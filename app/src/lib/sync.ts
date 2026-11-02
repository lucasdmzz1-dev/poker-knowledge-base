import { enviar, nuvemAtiva, puxar } from "@/lib/nuvem"

// O que sobe para a conta de cada jogador. A chave da API e os prints ficam só no
// aparelho.
export const CHAVES_NUVEM = [
  "pkb:hud",
  "pkb:hud-fixadas",
  "pkb:hud-tol",
  "pkb:leaks",
  "pkb:painel2",
  "pkb:sessions",
  "pkb:last",
] as const

export const EVENTO_SALVO = "pkb:salvo"

const SO_NO_APARELHO = ["pkb:api-key"]

function lerLocal(chave: string): unknown {
  try {
    const bruto = localStorage.getItem(chave)
    return bruto ? JSON.parse(bruto) : undefined
  } catch {
    return undefined
  }
}

// Ao entrar: o que já está na conta vale; o que só existe aqui sobe para a conta.
export async function sincronizarAoEntrar(): Promise<void> {
  const remoto = await puxar()
  for (const chave of CHAVES_NUVEM) {
    if (chave in remoto && remoto[chave] !== null) {
      try {
        localStorage.setItem(chave, JSON.stringify(remoto[chave]))
      } catch {
        /* sem armazenamento */
      }
    } else {
      const local = lerLocal(chave)
      if (local !== undefined) await enviar(chave, local)
    }
  }
}

export async function enviarTudo(): Promise<void> {
  for (const chave of CHAVES_NUVEM) {
    const local = lerLocal(chave)
    if (local !== undefined) await enviar(chave, local)
  }
}

// Ao sair: apaga os dados do aparelho para o próximo jogador não ver os seus.
export function limparLocal(): void {
  for (const chave of [...CHAVES_NUVEM, ...SO_NO_APARELHO]) {
    try {
      localStorage.removeItem(chave)
    } catch {
      /* sem armazenamento */
    }
  }
}

const pendentes = new Map<string, ReturnType<typeof setTimeout>>()

// Cada gravação local (writeJSON) sobe para a conta depois de uma pausa curta.
export function comecarSincronia(): () => void {
  if (!nuvemAtiva) return () => {}
  const ouvir = (e: Event) => {
    const chave = (e as CustomEvent<{ key: string }>).detail?.key
    if (!chave || !(CHAVES_NUVEM as readonly string[]).includes(chave)) return
    clearTimeout(pendentes.get(chave))
    pendentes.set(
      chave,
      setTimeout(() => {
        pendentes.delete(chave)
        const valor = lerLocal(chave)
        if (valor !== undefined) void enviar(chave, valor).catch(() => {})
      }, 800)
    )
  }
  window.addEventListener(EVENTO_SALVO, ouvir)
  return () => window.removeEventListener(EVENTO_SALVO, ouvir)
}
