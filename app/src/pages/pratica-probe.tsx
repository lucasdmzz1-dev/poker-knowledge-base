import { useCallback, useEffect, useRef, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Cards } from "@/components/poker/cards"
import { mod14, turnById } from "@/data/mod14"
import {
  ROTULO_TURN,
  situacoesProbe,
  type AcaoProbe,
  type SituacaoProbe,
} from "@/data/prat14"
import { shuffle, type ItemSessao, type Sessao } from "@/lib/poker"
import { KEYS, lerSessoes, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

type Fase = "setup" | "jogo" | "fim"

// Pote single raised: o BTN abriu 2, o SB deu fold e o BB pagou, com o small blind morto.
const POTE = 4.5
const bb = (f: number) => (Math.round(POTE * f * 10) / 10).toString()

const ACOES: {
  a: AcaoProbe
  rotulo: string
  sub: string
  tecla: string
  cor: string
}[] = [
  {
    a: "Check-call",
    rotulo: "CHECK-CALL",
    sub: "",
    tecla: "C",
    cor: "bg-[#37829b] hover:bg-[#3f92ae]",
  },
  {
    a: "Check-raise",
    rotulo: "CHECK-RAISE",
    sub: "",
    tecla: "R",
    cor: "bg-[#6d4aa8] hover:bg-[#7d5ab8]",
  },
  {
    a: "B40",
    rotulo: "BET 40%",
    sub: `${bb(0.4)} bb`,
    tecla: "1",
    cor: "bg-[#b7791f] hover:bg-[#c98a2b]",
  },
  {
    a: "B70",
    rotulo: "BET 70%",
    sub: `${bb(0.7)} bb`,
    tecla: "2",
    cor: "bg-[#c4602b] hover:bg-[#d4703b]",
  },
  {
    a: "B100",
    rotulo: "BET 100%",
    sub: `${bb(1)} bb`,
    tecla: "3",
    cor: "bg-[#a63a3a] hover:bg-[#b84a4a]",
  },
]

const NOME_ACAO: Record<AcaoProbe, string> = {
  "Check-call": "check-call",
  "Check-raise": "check-raise",
  B40: "bet 40%",
  B70: "bet 70%",
  B100: "bet 100%",
}

const ehBet = (a: string) => a.startsWith("B")

function Ficha({
  nome,
  acao,
  vez,
}: {
  nome: string
  acao: string
  vez?: boolean
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center gap-1.5 rounded-md border py-0.5 pr-0.5 pl-2 text-xs",
        vez && "border-primary"
      )}
    >
      <span className="text-muted-foreground">{nome}</span>
      <span
        className={cn(
          "rounded px-2 py-0.5 font-medium",
          vez ? "text-primary" : "bg-muted text-muted-foreground"
        )}
      >
        {acao}
      </span>
    </span>
  )
}

function Assento({
  pos,
  nome,
  heroi,
}: {
  pos: string
  nome: string
  heroi?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "grid size-16 place-content-center rounded-full border-2 bg-card text-center leading-tight",
          heroi ? "border-primary" : "border-b50"
        )}
      >
        <span className="font-bold">{pos}</span>
        <span className="text-sm text-muted-foreground tabular-nums">38</span>
      </div>
      <span className="text-xs text-muted-foreground">{nome}</span>
    </div>
  )
}

export type Tema = "bet" | "probe"

export function SeletorTema({
  tema,
  onTema,
}: {
  tema: Tema
  onTema: (t: Tema) => void
}) {
  const temas: [Tema, string][] = [
    ["bet", "Bet vs Missed C-Bet"],
    ["probe", "Probe Turn"],
  ]
  return (
    <fieldset className="grid gap-2.5">
      <legend className="mb-1 font-medium text-muted-foreground">Tema</legend>
      <div className="flex flex-wrap gap-2">
        {temas.map(([id, nome]) => (
          <button
            key={id}
            type="button"
            aria-pressed={tema === id}
            onClick={() => onTema(id)}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-2 transition-colors",
              tema === id
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {nome}
          </button>
        ))}
        <span className="rounded-full border bg-card px-3.5 py-2 text-muted-foreground opacity-50">
          Misturar temas · em breve
        </span>
      </div>
    </fieldset>
  )
}

export default function PraticaProbe({
  onTema,
}: {
  onTema: (t: Tema) => void
}) {
  const [fase, setFase] = useState<Fase>("setup")
  const [qty, setQty] = useState("10")
  const [fila, setFila] = useState<SituacaoProbe[]>([])
  const [i, setI] = useState(0)
  const [itens, setItens] = useState<ItemSessao[]>([])
  const [resp, setResp] = useState<AcaoProbe | null>(null)
  const [sessId, setSessId] = useState(0)
  const [levada, setLevada] = useState(false)
  // Guarda síncrona contra duas teclas no mesmo quadro.
  const respondido = useRef(false)

  const atual = fila[i]
  const turn = atual ? turnById[atual.turn] : undefined

  const responder = useCallback(
    (a: AcaoProbe) => {
      if (!atual || respondido.current) return
      respondido.current = true
      setItens((prev) => [
        ...prev,
        {
          sid: atual.id,
          tipo: ROTULO_TURN[atual.turn],
          bucket: 0,
          rng: 0,
          resp: a,
          esperado: atual.certa,
          ok: a === atual.certa,
        },
      ])
      setResp(a)
    },
    [atual]
  )

  useEffect(() => {
    if (fase !== "jogo") return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key.toLowerCase()
      const alvo = ACOES.find((x) => x.tecla.toLowerCase() === k)
      if (alvo) responder(alvo.a)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [fase, responder])

  function iniciar(e: React.FormEvent) {
    e.preventDefault()
    const n = Number(qty)
    let pool = shuffle(situacoesProbe)
    if (n && pool.length > n) pool = pool.slice(0, n)
    setFila(pool)
    setI(0)
    setItens([])
    setResp(null)
    respondido.current = false
    setLevada(false)
    setFase("jogo")
  }

  function proxima() {
    if (i === fila.length - 1) {
      const sess: Sessao = {
        id: Date.now(),
        modulo: mod14.id,
        total: itens.length,
        acertos: itens.filter((x) => x.ok).length,
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
  }

  function levar() {
    writeJSON(
      KEYS.sessions,
      lerSessoes().map((s) => (s.id === sessId ? { ...s, levar: true } : s))
    )
    setLevada(true)
  }

  if (fase === "setup") {
    return (
      <main>
        <PageHeader
          title="Prática"
          lead="Treine as decisões do módulo 14. Você está no BB, o flop deu check-check e saiu o turn. Escolha a ação."
        />
        <div className="mx-auto max-w-[1080px] px-5 pb-20">
          <form
            onSubmit={iniciar}
            className="mx-auto grid max-w-xl gap-7 rounded-[22px] border bg-card p-6 md:p-8"
          >
            <SeletorTema tema="probe" onTema={onTema} />
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
    const tipos = [...new Set(itens.map((x) => x.tipo))]
      .map((t) => {
        const d = itens.filter((x) => x.tipo === t)
        return {
          nome: t,
          total: d.length,
          certos: d.filter((x) => x.ok).length,
        }
      })
      .sort(
        (a, b) => a.certos / a.total - b.certos / b.total || b.total - a.total
      )
    const pior = tipos.find((x) => x.certos < x.total)
    const erros = itens.filter((x) => !x.ok)
    const motivos = [
      {
        nome: "Apostou quando era para pagar ou subir",
        n: erros.filter((x) => ehBet(x.resp) && !ehBet(x.esperado)).length,
      },
      {
        nome: "Size errado",
        n: erros.filter((x) => ehBet(x.resp) && ehBet(x.esperado)).length,
      },
      {
        nome: "Check quando era para apostar",
        n: erros.filter((x) => !ehBet(x.resp) && ehBet(x.esperado)).length,
      },
      {
        nome: "Check-call no lugar de check-raise, ou o contrário",
        n: erros.filter((x) => !ehBet(x.resp) && !ehBet(x.esperado)).length,
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
          <p className="text-lg text-muted-foreground">
            {pior ? (
              <>
                Você mais errou no{" "}
                <strong className="text-foreground">
                  {pior.nome.toLowerCase()}
                </strong>
                : {pior.total - pior.certos} erro
                {pior.total - pior.certos > 1 ? "s" : ""} em {pior.total} mãos.
              </>
            ) : (
              "Nenhum erro nesta sessão."
            )}
          </p>
          <Card className="grid w-full gap-3 rounded-2xl p-5 text-left">
            <h3 className="font-bold">Por tipo de turn</h3>
            {tipos.map((x) => {
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

  if (!atual || !turn) return null
  const ok = resp === atual.certa
  const ultimo = i === fila.length - 1
  let sequencia = 0
  for (let k = itens.length - 1; k >= 0 && itens[k].ok; k--) sequencia++

  return (
    <main className="mx-auto max-w-[1080px] px-4 pt-6 pb-20 md:px-5">
      <div
        className="mx-auto mb-3 flex max-w-[880px] flex-wrap items-center gap-1.5"
        aria-label="Ações até aqui"
      >
        <Ficha nome="BTN" acao="Raise 2" />
        <Ficha nome="SB" acao="Fold" />
        <Ficha nome="BB" acao="Call" />
        <span className="px-1 text-xs text-muted-foreground">Flop</span>
        <Ficha nome="BB" acao="Check" />
        <Ficha nome="BTN" acao="Check" />
        <span className="px-1 text-xs text-muted-foreground">Turn</span>
        <Ficha nome="BB" acao={resp ? NOME_ACAO[resp] : "Tomar ação"} vez />
      </div>

      <div className="mx-auto max-w-[880px]">
        <div className="mb-2 flex items-center justify-end gap-4 text-sm text-muted-foreground tabular-nums">
          <span title="Acertos seguidos">Sequência {sequencia}</span>
          <span title="Progresso do treino">
            {i + 1} / {fila.length}
          </span>
        </div>
        <div className="mx-auto grid min-h-80 grid-rows-[auto_1fr_auto] justify-items-center rounded-[999px] border-2 border-felt-line bg-felt/50 px-6 py-6">
          <div className="relative">
            <Assento pos="BTN" nome="Abriu 2 · check" />
            <span
              aria-label="Botão do dealer"
              className="absolute top-1 right-full mr-2 grid size-5 place-items-center rounded-full bg-white text-[11px] font-bold text-black"
            >
              D
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 py-3">
            <Cards codes={[...turn.flop, turn.turn]} size="mesa" />
            <p className="text-center">
              <span className="text-muted-foreground">Pote </span>
              <b className="tabular-nums">{POTE} bb</b>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Assento pos="BB" nome="Você" heroi />
            <Cards codes={atual.hero} size="mesaHero" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-[880px] grid-cols-2 gap-2 sm:grid-cols-5 md:gap-3">
        {ACOES.map(({ a, rotulo, sub, tecla, cor }) => (
          <button
            key={a}
            type="button"
            disabled={resp !== null}
            onClick={() => responder(a)}
            className={cn(
              "grid min-h-16 content-center gap-0.5 rounded-lg px-1.5 py-3 text-sm font-bold text-white transition-[transform,background-color,opacity] duration-150 enabled:cursor-pointer enabled:active:scale-[0.97] md:text-base",
              cor,
              resp !== null && a !== atual.certa && a !== resp && "opacity-40",
              resp !== null &&
                a === atual.certa &&
                "outline-2 outline-offset-2 outline-primary",
              resp !== null &&
                resp === a &&
                a !== atual.certa &&
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
              {ok ? "A ação certa era " : "O certo era "}
              <strong className="text-foreground">
                {NOME_ACAO[atual.certa]}
              </strong>{" "}
              no{" "}
              <strong className="text-foreground">
                {ROTULO_TURN[atual.turn].toLowerCase()}
              </strong>
              .
            </p>
            <p className="max-w-[64ch] text-lg text-muted-foreground">
              <strong className="text-foreground">{atual.classe}</strong>:{" "}
              {atual.porque}
            </p>
            <p className="max-w-[64ch] text-muted-foreground">
              {turn.criterio}
            </p>
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
    </main>
  )
}
