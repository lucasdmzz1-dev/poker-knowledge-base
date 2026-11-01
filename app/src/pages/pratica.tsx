import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { RngStrip } from "@/components/poker/cards"
import {
  BarraAcoes,
  Mesa,
  tamanhoBB,
  type Opener,
} from "@/components/poker/mesa"
import { mod15, tipoById, type Situacao, type TipoId } from "@/data/mod15"
import {
  randomInt,
  rng,
  shuffle,
  type ItemSessao,
  type Sessao,
} from "@/lib/poker"
import { KEYS, lerSessoes, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

type Fase = "setup" | "jogo" | "fim"
type Acao = "Check" | "B25" | "B50"

const contagem = mod15.situacoes.reduce<Record<string, number>>((c, s) => {
  c[s.tipo] = (c[s.tipo] ?? 0) + 1
  return c
}, {})
const DISPONIVEIS = mod15.tipos
  .filter((t) => (contagem[t.id] ?? 0) > 0)
  .map((t) => t.id)

const ACOES: {
  a: Acao
  rotulo: string
  sub: string
  tecla: string
  cor: string
}[] = [
  {
    a: "Check",
    rotulo: "CHECK",
    sub: "",
    tecla: "C",
    cor: "bg-[#37829b] hover:bg-[#3f92ae]",
  },
  {
    a: "B25",
    rotulo: "BET 25%",
    sub: `${tamanhoBB(0.25)} bb`,
    tecla: "1",
    cor: "bg-[#b7791f] hover:bg-[#c98a2b]",
  },
  {
    a: "B50",
    rotulo: "BET 50%",
    sub: `${tamanhoBB(0.5)} bb`,
    tecla: "2",
    cor: "bg-[#a63a3a] hover:bg-[#b84a4a]",
  },
]

function negritoPct(t: string): ReactNode {
  return t.split(/(\d+%)/).map((parte, k) =>
    /^\d+%$/.test(parte) ? (
      <strong key={k} className="text-foreground">
        {parte}
      </strong>
    ) : (
      parte
    )
  )
}

export default function Pratica() {
  const [fase, setFase] = useState<Fase>("setup")
  const [tipos, setTipos] = useState<TipoId[]>(DISPONIVEIS)
  const [qty, setQty] = useState("10")
  const [erro, setErro] = useState("")
  const [fila, setFila] = useState<Situacao[]>([])
  const [i, setI] = useState(0)
  const [itens, setItens] = useState<ItemSessao[]>([])
  const [roll, setRoll] = useState(1)
  const [opener, setOpener] = useState<Opener>("HJ")
  const [resp, setResp] = useState<Acao | null>(null)
  const [sessId, setSessId] = useState(0)
  const [levada, setLevada] = useState(false)
  // Guarda síncrona: duas teclas no mesmo quadro não podem registrar a mesma mão duas vezes.
  const respondido = useRef(false)

  useEffect(() => {
    writeJSON(KEYS.last, {
      to: "/pratica",
      label: "Bet vs Missed C-Bet",
      verbo: "Treinar",
    })
  }, [])

  const atual = fila[i]
  const tipoAtual = atual ? tipoById[atual.tipo] : undefined
  const apostar = atual ? roll <= atual.bucket : false
  const esperado: Acao | undefined = tipoAtual
    ? apostar
      ? tipoAtual.size
      : "Check"
    : undefined

  const responder = useCallback(
    (a: Acao) => {
      if (!atual || !esperado || respondido.current) return
      respondido.current = true
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
    [atual, esperado, roll]
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
    respondido.current = false
    setRoll(rng())
    setOpener(randomInt(2) === 0 ? "HJ" : "CO")
    setLevada(false)
    setFase("jogo")
  }

  function proxima() {
    if (i === fila.length - 1) {
      const acertos = itens.filter((x) => x.ok).length
      const sess: Sessao = {
        id: Date.now(),
        modulo: mod15.id,
        total: itens.length,
        acertos,
        itens,
        levar: false,
      }
      writeJSON(KEYS.sessions, [...lerSessoes(), sess])
      setSessId(sess.id)
      setFase("fim")
      return
    }
    setI(i + 1)
    setResp(null)
    respondido.current = false
    setRoll(rng())
    setOpener(randomInt(2) === 0 ? "HJ" : "CO")
  }

  function levar() {
    const todas = lerSessoes().map((s) =>
      s.id === sessId ? { ...s, levar: true } : s
    )
    writeJSON(KEYS.sessions, todas)
    setLevada(true)
  }

  if (fase === "setup") {
    return (
      <main>
        <PageHeader
          title="Prática"
          lead="Treine as decisões do módulo 15. Você vê o board, a sua mão e o RNG. Escolha a ação."
        />
        <div className="mx-auto max-w-[1080px] px-5 pb-20">
          <form
            onSubmit={iniciar}
            className="mx-auto grid max-w-xl gap-7 rounded-[22px] border bg-card p-6 md:p-8"
          >
            <fieldset className="grid gap-2.5">
              <legend className="mb-1 font-medium text-muted-foreground">
                Tema
              </legend>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border bg-card px-3.5 py-2">
                  Bet vs Missed C-Bet
                </span>
                <span className="rounded-full border bg-card px-3.5 py-2 text-muted-foreground opacity-50">
                  Misturar temas · em breve
                </span>
              </div>
            </fieldset>

            <fieldset className="grid gap-2.5">
              <legend className="mb-1 font-medium text-muted-foreground">
                Tipos de flop
              </legend>
              <div className="flex flex-wrap gap-2">
                {mod15.tipos.map((t) => {
                  const n = contagem[t.id] ?? 0
                  const off = n === 0
                  return (
                    <Label
                      key={t.id}
                      className={cn(
                        "flex items-center gap-2 rounded-full border bg-card px-3.5 py-2",
                        off ? "opacity-45" : "cursor-pointer"
                      )}
                    >
                      <Checkbox
                        disabled={off}
                        checked={tipos.includes(t.id)}
                        onCheckedChange={(v) =>
                          setTipos((prev) =>
                            v ? [...prev, t.id] : prev.filter((x) => x !== t.id)
                          )
                        }
                      />
                      {t.nome}
                      <span className="text-muted-foreground">
                        {off ? "sem situações validadas" : n}
                      </span>
                    </Label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset className="grid gap-2.5">
              <legend className="mb-1 font-medium text-muted-foreground">
                Quantidade
              </legend>
              <RadioGroup
                value={qty}
                onValueChange={setQty}
                className="flex flex-wrap gap-2"
              >
                {[
                  ["10", "10"],
                  ["20", "20"],
                  ["0", "Todas"],
                ].map(([v, label]) => (
                  <Label
                    key={v}
                    className="flex cursor-pointer items-center gap-2 rounded-full border bg-card px-3.5 py-2"
                  >
                    <RadioGroupItem value={v} />
                    {label}
                  </Label>
                ))}
              </RadioGroup>
            </fieldset>

            <p role="alert" className="min-h-6 text-destructive">
              {erro}
            </p>
            <div>
              <Button type="submit" size="lg" className="h-12 px-7 font-bold">
                Iniciar treino
              </Button>
            </div>
          </form>
        </div>
      </main>
    )
  }

  if (fase === "fim") {
    const acertos = itens.filter((x) => x.ok).length
    const pct = Math.round((acertos / itens.length) * 100)
    const porTipo = mod15.tipos
      .map((t) => {
        const doTipo = itens.filter((x) => x.tipo === t.id)
        const certos = doTipo.filter((x) => x.ok).length
        return { nome: t.nome, total: doTipo.length, certos }
      })
      .filter((x) => x.total > 0)
      .sort(
        (a, b) => a.certos / a.total - b.certos / b.total || b.total - a.total
      )
    const piorTipo = porTipo.find((x) => x.certos < x.total)
    const erros = itens.filter((x) => !x.ok)
    const motivos = [
      {
        nome: "Check quando era para apostar",
        n: erros.filter((x) => x.resp === "Check").length,
      },
      {
        nome: "Apostou quando era check",
        n: erros.filter((x) => x.esperado === "Check").length,
      },
      {
        nome: "Apostou com o size errado",
        n: erros.filter((x) => x.resp !== "Check" && x.esperado !== "Check")
          .length,
      },
    ].filter((m) => m.n > 0)
    return (
      <main>
        <PageHeader title="Treino concluído" />
        <div className="enter mx-auto grid max-w-[620px] justify-items-center gap-4 px-5 pb-20 text-center">
          <div className="text-[clamp(2.4rem,6vw,3.4rem)] font-bold">
            {acertos} de {itens.length}{" "}
            <span className="text-2xl text-muted-foreground">{pct}%</span>
          </div>
          {piorTipo ? (
            <p className="text-lg text-muted-foreground">
              Você mais errou no flop{" "}
              <strong className="text-foreground">
                {piorTipo.nome.toLowerCase()}
              </strong>
              : {piorTipo.total - piorTipo.certos} erro
              {piorTipo.total - piorTipo.certos > 1 ? "s" : ""} em{" "}
              {piorTipo.total} mãos.
            </p>
          ) : (
            <p className="text-lg text-muted-foreground">
              Nenhum erro nesta sessão.
            </p>
          )}
          <Card className="grid w-full gap-3 rounded-2xl p-5 text-left">
            <h3 className="font-bold">Por tipo de board</h3>
            {porTipo.map((x) => {
              const p = Math.round((x.certos / x.total) * 100)
              return (
                <div key={x.nome} className="grid gap-1">
                  <div className="flex justify-between gap-3">
                    <span>{x.nome}</span>
                    <span className="text-muted-foreground">
                      {x.certos} de {x.total} ·{" "}
                      <strong className="text-foreground">{p}%</strong>
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        p >= 70 ? "bg-primary" : "bg-destructive"
                      )}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </div>
              )
            })}
            {motivos.length > 0 && (
              <>
                <h3 className="mt-2 font-bold">Tipo de erro</h3>
                {motivos.map((m) => (
                  <div key={m.nome} className="flex justify-between gap-3">
                    <span>{m.nome}</span>
                    <strong>{m.n}</strong>
                  </div>
                ))}
              </>
            )}
          </Card>
          <p className="text-lg text-muted-foreground">
            Quer levar esta sessão para a Análise? Sessões de teste ficam de
            fora.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="h-12 px-6 font-bold"
              onClick={levar}
              disabled={levada}
            >
              Levar para a Análise
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 font-bold"
              onClick={() => setFase("setup")}
            >
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
  const ok = resp === esperado
  const ultimo = i === fila.length - 1
  const tipoNome = tipoAtual.nome.toLowerCase()
  const tipoNegrito = <strong className="text-foreground">{tipoNome}</strong>

  const pct = <strong className="text-foreground">{atual.bucket}%</strong>
  let texto: ReactNode
  if (ok) {
    texto = apostar ? (
      <>
        Sua mão está no bucket de {pct} e o RNG {roll} cai na aposta. O size do{" "}
        {tipoNegrito} é {tipoAtual.size}.
      </>
    ) : (
      <>
        Sua mão está no bucket de {pct}, mas o RNG {roll} cai no check.
      </>
    )
  } else if (resp !== "Check" && apostar) {
    texto = (
      <>
        Apostar estava certo (RNG {roll} ≤ {pct}), mas o size do {tipoNegrito} é{" "}
        {tipoAtual.size}.
      </>
    )
  } else if (resp === "Check") {
    texto = (
      <>
        O RNG {roll} cai na aposta (bucket de {pct}). O certo era{" "}
        {tipoAtual.size}.
      </>
    )
  } else {
    texto = (
      <>
        O RNG {roll} fica acima de {pct}, então a mão dá check.
      </>
    )
  }

  let sequencia = 0
  for (let k = itens.length - 1; k >= 0 && itens[k].ok; k--) sequencia++

  return (
    <main className="mx-auto max-w-[1080px] px-4 pt-6 pb-20 md:px-5">
      <div className="mx-auto mb-3 max-w-[880px]">
        <BarraAcoes opener={opener} agora={resp ? resp : "Tomar ação"} />
      </div>

      <div>
        <Mesa
          opener={opener}
          board={atual.board}
          hero={atual.hero}
          roll={roll}
          mao={i + 1}
          total={fila.length}
          sequencia={sequencia}
        />
      </div>

      <div className="mx-auto mt-4 grid max-w-[880px] grid-cols-3 gap-2 md:gap-3">
        {ACOES.map(({ a, rotulo, sub, tecla, cor }) => (
          <button
            key={a}
            type="button"
            disabled={resp !== null}
            onClick={() => responder(a)}
            className={cn(
              "grid min-h-16 content-center gap-0.5 rounded-lg px-1.5 py-3 text-base font-bold text-white transition-[transform,background-color,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] enabled:cursor-pointer enabled:active:scale-[0.97] md:text-lg",
              cor,
              resp !== null && a !== esperado && a !== resp && "opacity-40",
              resp !== null &&
                a === esperado &&
                "outline-2 outline-offset-2 outline-primary",
              resp !== null &&
                resp === a &&
                a !== esperado &&
                "outline-2 outline-offset-2 outline-destructive"
            )}
          >
            {rotulo}
            <small className="text-xs font-normal opacity-80">
              {sub ? `${sub} · tecla ${tecla}` : `tecla ${tecla}`}
            </small>
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {resp && (
          <Card
            className={cn(
              "mt-5 rounded-2xl p-5",
              ok ? "border-primary" : "border-destructive"
            )}
          >
            <h3
              className={cn(
                "text-4xl font-extrabold tracking-tight",
                ok ? "text-primary" : "text-destructive"
              )}
            >
              {ok ? "CERTO" : "ERRADO"}
            </h3>
            <p className="max-w-[64ch] text-lg text-muted-foreground">
              {texto}
            </p>
            <p className="max-w-[64ch] text-lg text-muted-foreground">
              <strong className="text-foreground">{atual.classe}</strong> no
              flop {tipoNegrito}: {negritoPct(atual.porque)}
            </p>
            <RngStrip bucket={atual.bucket} rng={roll} size={tipoAtual.size} />
            <div className="mt-4">
              <Button
                autoFocus
                size="lg"
                className="h-12 px-6 font-bold"
                onClick={proxima}
              >
                {ultimo ? "Ver resultado" : "Próxima mão"}
              </Button>
            </div>
          </Card>
        )}
      </div>
      <p className="mt-3.5 text-sm text-muted-foreground">
        Dica: bucket é a frequência da mão. Se o RNG for menor ou igual a ela,
        aposta.
      </p>
    </main>
  )
}
