import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Cards, RngStrip } from "@/components/poker/cards"
import { mod15, tipoById, type Situacao, type TipoId } from "@/data/mod15"
import { rng, shuffle, type ItemSessao, type Sessao } from "@/lib/poker"
import { KEYS, readJSON, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

type Fase = "setup" | "jogo" | "fim"
type Acao = "Check" | "B25" | "B50"

const contagem = mod15.situacoes.reduce<Record<string, number>>((c, s) => {
  c[s.tipo] = (c[s.tipo] ?? 0) + 1
  return c
}, {})
const DISPONIVEIS = mod15.tipos.filter((t) => (contagem[t.id] ?? 0) > 0).map((t) => t.id)

const ACOES: { a: Acao; tecla: string; hover: string }[] = [
  { a: "Check", tecla: "C", hover: "hover:border-check" },
  { a: "B25", tecla: "1", hover: "hover:border-b25" },
  { a: "B50", tecla: "2", hover: "hover:border-b50" },
]

export default function Pratica() {
  const [fase, setFase] = useState<Fase>("setup")
  const [tipos, setTipos] = useState<TipoId[]>(DISPONIVEIS)
  const [qty, setQty] = useState("10")
  const [erro, setErro] = useState("")
  const [fila, setFila] = useState<Situacao[]>([])
  const [i, setI] = useState(0)
  const [itens, setItens] = useState<ItemSessao[]>([])
  const [roll, setRoll] = useState(1)
  const [resp, setResp] = useState<Acao | null>(null)
  const [sessId, setSessId] = useState(0)
  const [levada, setLevada] = useState(false)

  useEffect(() => {
    writeJSON(KEYS.last, { to: "/pratica", label: "Prática · Bet vs Missed C-Bet" })
  }, [])

  const atual = fila[i]
  const tipoAtual = atual ? tipoById[atual.tipo] : undefined
  const apostar = atual ? roll <= atual.bucket : false
  const esperado: Acao | undefined = tipoAtual ? (apostar ? tipoAtual.size : "Check") : undefined

  const responder = useCallback(
    (a: Acao) => {
      if (!atual || !esperado || resp) return
      const item: ItemSessao = {
        sid: atual.id,
        tipo: atual.tipo,
        bucket: atual.bucket,
        rng: roll,
        resp: a,
        esperado,
        ok: a === esperado,
      }
      setItens((prev) => [...prev, item])
      setResp(a)
    },
    [atual, esperado, resp, roll]
  )

  useEffect(() => {
    if (fase !== "jogo") return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key.toLowerCase()
      if (k === "c") responder("Check")
      else if (k === "1") responder("B25")
      else if (k === "2") responder("B50")
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [fase, responder])

  function iniciar(e: React.FormEvent) {
    e.preventDefault()
    if (tipos.length === 0) {
      setErro("Escolha ao menos um tipo de flop.")
      return
    }
    const n = Number(qty)
    let pool = shuffle(mod15.situacoes.filter((s) => tipos.includes(s.tipo)))
    if (n && pool.length > n) pool = pool.slice(0, n)
    setErro("")
    setFila(pool)
    setI(0)
    setItens([])
    setResp(null)
    setRoll(rng())
    setLevada(false)
    setFase("jogo")
  }

  function proxima() {
    if (i === fila.length - 1) {
      const acertos = itens.filter((x) => x.ok).length
      const sess: Sessao = { id: Date.now(), modulo: mod15.id, total: itens.length, acertos, itens, levar: false }
      writeJSON(KEYS.sessions, [...readJSON<Sessao[]>(KEYS.sessions, []), sess])
      setSessId(sess.id)
      setFase("fim")
      return
    }
    setI(i + 1)
    setResp(null)
    setRoll(rng())
  }

  function levar() {
    const todas = readJSON<Sessao[]>(KEYS.sessions, []).map((s) => (s.id === sessId ? { ...s, levar: true } : s))
    writeJSON(KEYS.sessions, todas)
    setLevada(true)
  }

  if (fase === "setup") {
    return (
      <main className="mx-auto max-w-[1080px] px-5 pt-10 pb-20">
        <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-tight font-bold tracking-tight">Prática</h1>
        <p className="text-muted-foreground mt-3 max-w-[60ch] text-lg">
          Treine as decisões do módulo 15. Você vê o board, a sua mão e o RNG. Escolha a ação.
        </p>
        <form onSubmit={iniciar} className="mt-7 grid max-w-xl gap-7">
          <fieldset className="grid gap-2.5">
            <legend className="text-muted-foreground mb-1 font-medium">Tema</legend>
            <div className="flex flex-wrap gap-2">
              <span className="bg-card rounded-full border px-3.5 py-2">Bet vs Missed C-Bet</span>
              <span className="bg-card text-muted-foreground rounded-full border px-3.5 py-2 opacity-50">
                Misturar temas · em breve
              </span>
            </div>
          </fieldset>

          <fieldset className="grid gap-2.5">
            <legend className="text-muted-foreground mb-1 font-medium">Tipos de flop</legend>
            <div className="flex flex-wrap gap-2">
              {mod15.tipos.map((t) => {
                const n = contagem[t.id] ?? 0
                const off = n === 0
                return (
                  <Label
                    key={t.id}
                    className={cn("bg-card flex items-center gap-2 rounded-full border px-3.5 py-2", off ? "opacity-45" : "cursor-pointer")}
                  >
                    <Checkbox
                      disabled={off}
                      checked={tipos.includes(t.id)}
                      onCheckedChange={(v) => setTipos((prev) => (v ? [...prev, t.id] : prev.filter((x) => x !== t.id)))}
                    />
                    {t.nome}
                    <span className="text-muted-foreground">{off ? "sem situações validadas" : n}</span>
                  </Label>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="grid gap-2.5">
            <legend className="text-muted-foreground mb-1 font-medium">Quantidade</legend>
            <RadioGroup value={qty} onValueChange={setQty} className="flex flex-wrap gap-2">
              {[
                ["10", "10"],
                ["20", "20"],
                ["0", "Todas"],
              ].map(([v, label]) => (
                <Label key={v} className="bg-card flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2">
                  <RadioGroupItem value={v} />
                  {label}
                </Label>
              ))}
            </RadioGroup>
          </fieldset>

          <p role="alert" className="text-destructive min-h-6">
            {erro}
          </p>
          <div>
            <Button type="submit" size="lg" className="h-12 px-7 font-bold">
              Iniciar treino
            </Button>
          </div>
        </form>
      </main>
    )
  }

  if (fase === "fim") {
    const acertos = itens.filter((x) => x.ok).length
    const pct = Math.round((acertos / itens.length) * 100)
    return (
      <main className="mx-auto max-w-[1080px] px-5 pt-10 pb-20">
        <div className="grid max-w-[560px] gap-4">
          <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-tight font-bold tracking-tight">Treino concluído</h1>
          <div className="text-[clamp(2.4rem,6vw,3.4rem)] font-bold">
            {acertos} de {itens.length} <span className="text-muted-foreground text-2xl">{pct}%</span>
          </div>
          <p className="text-muted-foreground text-lg">Quer levar esta sessão para a Análise? Sessões de teste ficam de fora.</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="h-12 px-6 font-bold" onClick={levar} disabled={levada}>
              Levar para a Análise
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 font-bold" onClick={() => setFase("setup")}>
              Novo treino
            </Button>
          </div>
          <p role="status" className="text-muted-foreground">
            {levada ? "Sessão enviada para a Análise." : ""}
          </p>
        </div>
      </main>
    )
  }

  if (!atual || !tipoAtual || !esperado) return null
  const acertos = itens.filter((x) => x.ok).length
  const ok = resp === esperado
  const ultimo = i === fila.length - 1
  const tipoNome = tipoAtual.nome.toLowerCase()

  let texto: string
  if (ok) {
    texto = apostar
      ? `Sua mão está no bucket de ${atual.bucket}% e o RNG ${roll} cai na aposta. O size do ${tipoNome} é ${tipoAtual.size}.`
      : `Sua mão está no bucket de ${atual.bucket}%, mas o RNG ${roll} cai no check.`
  } else if (resp !== "Check" && apostar) {
    texto = `Apostar estava certo (RNG ${roll} ≤ ${atual.bucket}), mas o size do ${tipoNome} é ${tipoAtual.size}.`
  } else if (resp === "Check") {
    texto = `O RNG ${roll} cai na aposta (bucket de ${atual.bucket}%). O certo era ${tipoAtual.size}.`
  } else {
    texto = `O RNG ${roll} fica acima de ${atual.bucket}%, então a mão dá check.`
  }

  return (
    <main className="mx-auto max-w-[1080px] px-5 pt-10 pb-20">
      <div className="text-muted-foreground mb-3.5 flex justify-between tabular-nums">
        <span>
          Mão {i + 1} de {fila.length}
        </span>
        <span>{acertos} acertos</span>
      </div>

      <div className="grid justify-items-center gap-6 rounded-[28px] border border-[#1d4034] bg-[#0f241e] px-5 pt-9 pb-8">
        <p className="text-muted-foreground max-w-[52ch] text-center">{mod15.spot}. Você aposta ou dá check?</p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm">Flop</span>
          <Cards codes={atual.board} size="xl" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7">
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-sm">Sua mão</span>
            <Cards codes={atual.hero} size="lg" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-sm">RNG de 1 a 100</span>
            <div
              aria-label={`RNG ${roll}`}
              className="min-w-[104px] rounded-[10px] border-4 border-[#2bb7d4] bg-white px-4 py-2 text-center text-[2.6rem] leading-[1.1] font-bold text-[#0b8aa6] tabular-nums"
            >
              {roll}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 md:gap-3">
        {ACOES.map(({ a, tecla, hover }) => (
          <button
            key={a}
            type="button"
            disabled={resp !== null}
            onClick={() => responder(a)}
            className={cn(
              "bg-secondary grid gap-0.5 rounded-[14px] border px-1.5 py-4 text-base font-bold transition-transform enabled:cursor-pointer enabled:hover:-translate-y-0.5 disabled:opacity-55 md:py-[18px] md:text-lg motion-reduce:transition-none",
              resp === null && hover,
              resp !== null && a === esperado && "bg-primary text-primary-foreground border-primary opacity-100",
              resp === a && "outline-foreground opacity-100 outline-2"
            )}
          >
            {a}
            <small className="text-xs font-normal opacity-70">tecla {tecla}</small>
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {resp && (
          <Card className={cn("mt-5 rounded-2xl p-5", ok ? "border-primary" : "border-destructive")}>
            <h3 className={cn("text-xl font-bold", ok ? "text-primary" : "text-destructive")}>{ok ? "Certo" : "Errado"}</h3>
            <p className="text-muted-foreground max-w-[64ch]">{texto}</p>
            <p className="text-muted-foreground max-w-[64ch]">
              <strong className="text-foreground">{atual.classe}</strong> no flop {tipoNome}: {atual.porque}
            </p>
            <RngStrip bucket={atual.bucket} rng={roll} size={tipoAtual.size} />
            <div className="mt-4">
              <Button autoFocus size="lg" className="h-12 px-6 font-bold" onClick={proxima}>
                {ultimo ? "Ver resultado" : "Próxima mão"}
              </Button>
            </div>
          </Card>
        )}
      </div>
      <p className="text-muted-foreground mt-3.5 text-sm">
        Dica: bucket é a frequência da mão. Se o RNG for menor ou igual a ela, aposta.
      </p>
    </main>
  )
}
