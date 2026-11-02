import { useEffect, useMemo, useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { CAMPO } from "@/components/analise/secao"
import {
  capturarRetornoGoogle,
  criarConta,
  entrar,
  googleAtivo,
  irParaGoogle,
  nuvemAtiva,
  sair,
  sessaoValida,
  type Sessao,
} from "@/lib/nuvem"
import { comecarSincronia, limparLocal, sincronizarAoEntrar } from "@/lib/sync"
import { comecarRegistroDeUso } from "@/lib/uso"
import { UsuarioContext } from "@/lib/usuario"
import { cn } from "@/lib/utils"

type Fase = "carregando" | "fora" | "dentro"

function Login({
  aoEntrar,
  erroInicial,
}: {
  aoEntrar: (s: Sessao) => Promise<void>
  erroInicial: string
}) {
  const [modo, setModo] = useState<"entrar" | "criar">("entrar")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState(erroInicial)
  const [aviso, setAviso] = useState("")
  const [ocupado, setOcupado] = useState(false)

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    setErro("")
    setAviso("")
    setOcupado(true)
    try {
      const mail = email.trim()
      const s =
        modo === "entrar"
          ? await entrar(mail, senha)
          : await criarConta(mail, senha)
      if (s) await aoEntrar(s)
      else
        setAviso(
          "Conta criada. Abra o e-mail que enviamos, confirme o endereço e depois use Entrar."
        )
    } catch (x) {
      setErro(x instanceof Error ? x.message : "Não consegui entrar.")
    } finally {
      setOcupado(false)
    }
  }

  return (
    <main className="grid min-h-svh place-items-center px-5">
      <form
        onSubmit={enviar}
        className="w-full max-w-sm rounded-2xl border bg-card/60 p-6"
      >
        <div className="mb-5 flex items-center gap-2.5 font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm text-primary-foreground">
            PK
          </span>
          Poker KB
        </div>
        <div role="tablist" aria-label="Acesso" className="mb-4 flex gap-2">
          {(
            [
              ["entrar", "Entrar"],
              ["criar", "Criar conta"],
            ] as const
          ).map(([id, nome]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={modo === id}
              onClick={() => {
                setModo(id)
                setErro("")
                setAviso("")
              }}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium",
                modo === id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {nome}
            </button>
          ))}
        </div>
        <label className="mb-3 grid gap-1 text-sm">
          E-mail
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={CAMPO}
          />
        </label>
        <label className="mb-4 grid gap-1 text-sm">
          Senha
          <input
            type="password"
            required
            minLength={6}
            autoComplete={
              modo === "entrar" ? "current-password" : "new-password"
            }
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={CAMPO}
          />
        </label>
        <p role="alert" className="min-h-5 text-sm text-destructive">
          {erro}
        </p>
        {aviso && <p className="text-sm text-primary">{aviso}</p>}
        <Button
          type="submit"
          className="mt-2 h-11 w-full font-bold"
          disabled={ocupado}
        >
          {ocupado ? "Aguarde…" : modo === "entrar" ? "Entrar" : "Criar conta"}
        </Button>
        {googleAtivo && (
          <>
            <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              ou
              <span className="h-px flex-1 bg-border" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full font-medium"
              onClick={irParaGoogle}
            >
              Continuar com o Google
            </Button>
          </>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          Seus leaks, stats e painel ficam na sua conta e só você vê. Teoria e
          Prática são abertas a todos que entram. Registramos só quais áreas do
          site você abre, para saber como ele é usado; nunca o conteúdo.
        </p>
      </form>
    </main>
  )
}

export function Portao({ children }: { children: ReactNode }) {
  const [fase, setFase] = useState<Fase>(nuvemAtiva ? "carregando" : "dentro")
  const [email, setEmail] = useState("")
  const [erro, setErro] = useState("")

  async function entrouComSessao(s: Sessao) {
    await sincronizarAoEntrar()
    setEmail(s.user.email)
    setErro("")
    setFase("dentro")
  }

  useEffect(() => {
    if (!nuvemAtiva) return
    let vivo = true
    void (async () => {
      const volta = await capturarRetornoGoogle()
      if (volta && "erro" in volta) {
        if (!vivo) return
        setErro(volta.erro)
        return setFase("fora")
      }
      const s = volta ?? (await sessaoValida())
      if (!vivo) return
      if (!s) return setFase("fora")
      try {
        await entrouComSessao(s)
      } catch (x) {
        if (!vivo) return
        setErro(x instanceof Error ? x.message : "Não consegui carregar.")
        setFase("fora")
      }
    })()
    return () => {
      vivo = false
    }
  }, [])

  useEffect(() => (fase === "dentro" ? comecarSincronia() : undefined), [fase])
  useEffect(
    () => (fase === "dentro" ? comecarRegistroDeUso() : undefined),
    [fase]
  )

  const usuario = useMemo(
    () =>
      nuvemAtiva && fase === "dentro"
        ? {
            email,
            sair: () => {
              void sair().then(() => {
                limparLocal()
                window.location.reload()
              })
            },
          }
        : null,
    [fase, email]
  )

  if (fase === "carregando")
    return (
      <main className="grid min-h-svh place-items-center text-muted-foreground">
        Carregando seus dados…
      </main>
    )
  if (fase === "fora")
    return (
      <Login
        erroInicial={erro}
        aoEntrar={async (s) => {
          try {
            await entrouComSessao(s)
          } catch (x) {
            throw x instanceof Error ? x : new Error("Não consegui carregar.")
          }
        }}
      />
    )
  return <UsuarioContext value={usuario}>{children}</UsuarioContext>
}
