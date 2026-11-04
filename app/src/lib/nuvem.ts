// Conta e dados na nuvem (Supabase), por chamadas diretas à API. A chave pública
// (anon) é feita para ficar no navegador: quem protege os dados é a regra de
// acesso da tabela (docs/Supabase-Poker-KB.sql).
const URL_BASE = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  ?.trim()
  .replace(/\/$/, "")
const CHAVE_PUBLICA = (
  import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
)?.trim()

export const nuvemAtiva = Boolean(URL_BASE && CHAVE_PUBLICA)

// O botão do Google só aparece com VITE_LOGIN_GOOGLE=true (depois de ligar o
// provedor no Supabase).
export const googleAtivo =
  nuvemAtiva && import.meta.env.VITE_LOGIN_GOOGLE === "true"

const CHAVE_SESSAO = "pkb:sessao"
const TABELA = "dados_usuario"

export interface Sessao {
  access_token: string
  refresh_token: string
  expires_at: number // segundos desde 1970
  user: { id: string; email: string }
}

function cabecalhos(token?: string): Record<string, string> {
  return {
    "content-type": "application/json",
    apikey: CHAVE_PUBLICA ?? "",
    authorization: `Bearer ${token ?? CHAVE_PUBLICA ?? ""}`,
  }
}

function traduzir(corpo: unknown, status: number): string {
  const o = (
    typeof corpo === "object" && corpo !== null ? corpo : {}
  ) as Record<string, unknown>
  const texto = String(
    o.msg ?? o.error_description ?? o.message ?? o.error ?? ""
  ).toLowerCase()
  if (texto.includes("invalid login")) return "E-mail ou senha incorretos."
  if (texto.includes("already registered"))
    return "Esse e-mail já tem conta. Use Entrar."
  if (texto.includes("at least"))
    return "A senha precisa de pelo menos 6 letras."
  if (texto.includes("not confirmed"))
    return "Confirme o e-mail pelo link que enviamos antes de entrar."
  if (texto.includes("valid email") || texto.includes("invalid email"))
    return "Esse e-mail não parece válido."
  if (texto.includes("rate limit") || status === 429)
    return "Muitas tentativas. Espere um pouco e tente de novo."
  return texto
    ? `Não deu certo: ${texto}`
    : `Não deu certo (erro ${status}). Tente de novo.`
}

async function chamar(
  caminho: string,
  init: RequestInit & { token?: string } = {}
): Promise<unknown> {
  const { token, ...resto } = init
  let resposta: Response
  try {
    resposta = await fetch(`${URL_BASE}${caminho}`, {
      ...resto,
      headers: { ...cabecalhos(token), ...(resto.headers ?? {}) },
    })
  } catch {
    throw new Error("Sem conexão com o servidor. Confira a internet.")
  }
  const texto = await resposta.text()
  let corpo: unknown = null
  try {
    corpo = texto ? JSON.parse(texto) : null
  } catch {
    corpo = null
  }
  if (!resposta.ok) throw new Error(traduzir(corpo, resposta.status))
  return corpo
}

function guardar(s: Sessao | null) {
  try {
    if (s) localStorage.setItem(CHAVE_SESSAO, JSON.stringify(s))
    else localStorage.removeItem(CHAVE_SESSAO)
  } catch {
    /* sem armazenamento: a sessão vale só até recarregar */
  }
}

function comoSessao(o: unknown): Sessao | null {
  if (typeof o !== "object" || o === null) return null
  const x = o as Record<string, unknown>
  const u = x.user as Record<string, unknown> | undefined
  if (
    typeof x.access_token !== "string" ||
    typeof x.refresh_token !== "string" ||
    typeof u?.id !== "string"
  )
    return null
  const expira =
    typeof x.expires_at === "number"
      ? x.expires_at
      : Math.floor(Date.now() / 1000) +
        (typeof x.expires_in === "number" ? x.expires_in : 3600)
  return {
    access_token: x.access_token,
    refresh_token: x.refresh_token,
    expires_at: expira,
    user: { id: u.id, email: typeof u.email === "string" ? u.email : "" },
  }
}

function lerSessaoGuardada(): Sessao | null {
  try {
    const bruto = localStorage.getItem(CHAVE_SESSAO)
    return bruto ? comoSessao(JSON.parse(bruto)) : null
  } catch {
    return null
  }
}

// Devolve a sessão válida (renovando se estiver perto de vencer) ou null.
export async function sessaoValida(): Promise<Sessao | null> {
  const s = lerSessaoGuardada()
  if (!s) return null
  if (s.expires_at - 60 > Date.now() / 1000) return s
  try {
    const nova = comoSessao(
      await chamar("/auth/v1/token?grant_type=refresh_token", {
        method: "POST",
        body: JSON.stringify({ refresh_token: s.refresh_token }),
      })
    )
    guardar(nova)
    return nova
  } catch {
    guardar(null)
    return null
  }
}

export async function entrar(email: string, senha: string): Promise<Sessao> {
  const s = comoSessao(
    await chamar("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email, password: senha }),
    })
  )
  if (!s) throw new Error("Resposta inesperada do servidor.")
  guardar(s)
  return s
}

// Devolve a sessão, ou null quando o projeto exige confirmar o e-mail primeiro.
export async function criarConta(
  email: string,
  senha: string
): Promise<Sessao | null> {
  const corpo = await chamar("/auth/v1/signup", {
    method: "POST",
    body: JSON.stringify({ email, password: senha }),
  })
  const s = comoSessao(corpo)
  guardar(s)
  return s
}

// Manda o jogador para a tela de login do Google. O Supabase devolve para o
// endereço do site com a sessão no fragmento (#access_token=...).
export function irParaGoogle(): void {
  const volta = window.location.origin + window.location.pathname
  window.location.href = `${URL_BASE}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(volta)}`
}

// Na volta do Google: lê a sessão do fragmento, guarda e limpa o endereço.
// Devolve a sessão, uma mensagem de erro, ou null se não é uma volta do Google.
export async function capturarRetornoGoogle(): Promise<
  Sessao | { erro: string } | null
> {
  const hash = window.location.hash.replace(/^#\/?/, "")
  if (!hash.includes("access_token=") && !hash.includes("error")) return null
  const p = new URLSearchParams(hash)
  const limpar = () =>
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search + "#/"
    )
  const erro = p.get("error_description") ?? p.get("error")
  if (erro && !p.get("access_token")) {
    limpar()
    return { erro: `Não consegui entrar com o Google: ${erro}` }
  }
  const access = p.get("access_token")
  const refresh = p.get("refresh_token")
  if (!access || !refresh) return null
  try {
    const u = (await chamar("/auth/v1/user", { token: access })) as {
      id?: string
      email?: string
    }
    const duracao = Number(p.get("expires_in")) || 3600
    const s = comoSessao({
      access_token: access,
      refresh_token: refresh,
      expires_at: Math.floor(Date.now() / 1000) + duracao,
      user: { id: u?.id, email: u?.email },
    })
    limpar()
    if (!s) return { erro: "Resposta inesperada do Google." }
    guardar(s)
    return s
  } catch (e) {
    limpar()
    return {
      erro:
        e instanceof Error ? e.message : "Não consegui entrar com o Google.",
    }
  }
}

export async function sair(): Promise<void> {
  const s = lerSessaoGuardada()
  guardar(null)
  if (!s) return
  try {
    await chamar("/auth/v1/logout", { method: "POST", token: s.access_token })
  } catch {
    /* já saiu deste aparelho; o token expira sozinho */
  }
}

export async function puxar(): Promise<Record<string, unknown>> {
  const s = await sessaoValida()
  if (!s) throw new Error("Sessão vencida. Entre de novo.")
  const linhas = await chamar(`/rest/v1/${TABELA}?select=chave,valor`, {
    token: s.access_token,
  })
  const out: Record<string, unknown> = {}
  if (Array.isArray(linhas))
    for (const l of linhas as { chave?: unknown; valor?: unknown }[])
      if (typeof l.chave === "string") out[l.chave] = l.valor
  return out
}

export async function enviar(chave: string, valor: unknown): Promise<void> {
  const s = await sessaoValida()
  if (!s) throw new Error("Sessão vencida. Entre de novo.")
  await chamar(`/rest/v1/${TABELA}?on_conflict=user_id,chave`, {
    method: "POST",
    token: s.access_token,
    headers: { prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify([
      {
        user_id: s.user.id,
        chave,
        valor,
        atualizado: new Date().toISOString(),
      },
    ]),
  })
}

// Uso do site: uma linha por abertura de área, sem conteúdo.
export async function enviarEvento(area: string): Promise<void> {
  const s = await sessaoValida()
  if (!s) return
  await chamar("/rest/v1/eventos", {
    method: "POST",
    token: s.access_token,
    headers: { prefer: "return=minimal" },
    body: JSON.stringify({ user_id: s.user.id, area }),
  })
}

export async function ehAdmin(): Promise<boolean> {
  const s = await sessaoValida()
  if (!s) return false
  const linhas = await chamar(
    `/rest/v1/admins?select=user_id&user_id=eq.${s.user.id}`,
    { token: s.access_token }
  )
  return Array.isArray(linhas) && linhas.length > 0
}

export interface ResumoUsuario {
  id_usuario: string
  aprovado: boolean
  email: string
  provedor: string
  cadastro: string
  ultimo_login: string | null
  ultima_atividade: string | null
  aberturas_inicio: number
  aberturas_teoria: number
  aberturas_pratica: number
  aberturas_analise: number
  treinos: number
  leaks: number
  semanas: number
}

export async function resumoUsuarios(): Promise<ResumoUsuario[]> {
  const s = await sessaoValida()
  if (!s) throw new Error("Sessão vencida. Entre de novo.")
  const r = await chamar("/rest/v1/rpc/resumo_usuarios", {
    method: "POST",
    token: s.access_token,
    body: "{}",
  })
  return Array.isArray(r) ? (r as ResumoUsuario[]) : []
}

// Conta aprovada por um administrador. Se não der para checar (rede ou tabela
// ainda sem criar), deixa passar: quem barra de verdade é o servidor.
export async function estouAprovado(): Promise<boolean> {
  const s = await sessaoValida()
  if (!s) return false
  try {
    const linhas = await chamar(
      `/rest/v1/aprovados?select=user_id&user_id=eq.${s.user.id}`,
      { token: s.access_token }
    )
    return Array.isArray(linhas) && linhas.length > 0
  } catch {
    return true
  }
}

async function chamarRpc(nome: string, corpo: unknown): Promise<void> {
  const s = await sessaoValida()
  if (!s) throw new Error("Sessão vencida. Entre de novo.")
  await chamar(`/rest/v1/rpc/${nome}`, {
    method: "POST",
    token: s.access_token,
    body: JSON.stringify(corpo),
  })
}

export const aprovarUsuario = (id: string) =>
  chamarRpc("aprovar_usuario", { p_user: id })
export const removerAprovacao = (id: string) =>
  chamarRpc("remover_aprovacao", { p_user: id })
