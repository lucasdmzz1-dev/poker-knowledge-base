import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, PlayingCard } from "@/components/poker/cards"
import { mod14, turnById, type SizeProbe, type TurnId } from "@/data/mod14"
import { KEYS, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

const ITEM =
  "rounded-full border px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"

const COR_SIZE: Record<SizeProbe, string> = {
  B40: "bg-b25",
  B70: "bg-b50",
  B100: "bg-primary",
}

const COR_ACAO: Record<string, string> = {
  Bet: "text-primary",
  "Check-call": "text-foreground",
  "Check-raise": "text-b50",
}

function SizeBadge({ size }: { size: SizeProbe }) {
  return (
    <Badge
      className={cn(
        "px-3.5 py-1 text-sm font-bold text-[#1a0907]",
        COR_SIZE[size]
      )}
    >
      {size}
    </Badge>
  )
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ol className="grid max-w-[70ch] gap-2.5">
      {itens.map((t, i) => (
        <li
          key={t}
          className="grid grid-cols-[2.2ch_1fr] gap-3.5 font-serif text-lg leading-relaxed"
        >
          <span className="font-sans font-bold text-primary">{i + 1}</span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  )
}

function Secao({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-[clamp(1.4rem,3vw,1.9rem)] leading-tight font-bold tracking-tight">
        {titulo}
      </h2>
      {children}
    </section>
  )
}

export default function Teoria14() {
  const [turnId, setTurnId] = useState<TurnId>("blank")
  const t = turnById[turnId]

  useEffect(() => {
    writeJSON(KEYS.last, {
      to: "/teoria/probe-turn",
      label: "Probe Turn · Teoria",
      verbo: "Continuar",
    })
  }, [])

  return (
    <main>
      <PageHeader
        title={mod14.nome}
        lead={mod14.spot}
        topo={
          <Link
            to="/teoria"
            className="transition-colors duration-150 hover:text-foreground"
          >
            ‹ Teoria
          </Link>
        }
      >
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Badge variant="outline">Turn</Badge>
          <Badge variant="outline">Fora de posição</Badge>
          <Badge variant="outline">Sizes B40, B70 e B100</Badge>
        </div>
        <div className="mx-auto mt-8 aspect-video w-full max-w-[720px] overflow-hidden rounded-[22px] border">
          <iframe
            src="https://www.youtube.com/embed/CkP1v_BjJcU"
            title="Aula: Probe Turn"
            className="size-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </PageHeader>
      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        <Secao titulo="Em 30 segundos">
          <Lista itens={mod14.em30} />
        </Secao>

        <Secao titulo="O que o BTN tem no check atrás">
          <Lista itens={mod14.checkAtras} />
        </Secao>

        <Secao titulo="Como escolher o size">
          <div className="grid gap-3 md:grid-cols-2">
            {mod14.sizes.map((s) => (
              <Card key={s.para} className="gap-2.5 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  <SizeBadge size={s.size} />
                  <strong className="text-lg uppercase">{s.para}</strong>
                </div>
                <p className="text-muted-foreground">{s.quando}</p>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="O que fazer em cada turn">
          <p className="-mt-3 mb-5 max-w-[60ch] text-lg text-muted-foreground">
            Base: 8-7-5 com flush draw, BTN contra BB, 40bb, flop em
            check-check.
          </p>
          <ToggleGroup
            type="single"
            value={turnId}
            onValueChange={(v) => v && setTurnId(v as TurnId)}
            className="mb-5 flex flex-wrap justify-start gap-2"
            aria-label="Tipo de turn"
          >
            {mod14.turns.map((x) => (
              <ToggleGroupItem key={x.id} value={x.id} className={ITEM}>
                {x.nome}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Card className="rounded-[22px]">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
              <div className="flex flex-col items-start gap-4">
                <Cards codes={t.flop} size="lg" />
                <div className="flex items-center gap-3">
                  <PlayingCard code={t.turn} size="lg" />
                  <span className="text-sm text-muted-foreground">turn</span>
                </div>
                <SizeBadge size={t.size} />
              </div>
              <div aria-live="polite">
                <p className="mb-2 max-w-[60ch] font-serif text-lg">
                  {t.criterio}
                </p>
                {t.acoes.map((a) => (
                  <div
                    key={a.nome}
                    className="grid gap-1 border-t py-3 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-4"
                  >
                    <span
                      className={cn(
                        "text-lg font-bold uppercase",
                        COR_ACAO[a.nome]
                      )}
                    >
                      {a.nome}
                    </span>
                    <ul className="flex flex-wrap content-start gap-x-6 gap-y-5">
                      {a.maos.map((m) => (
                        <li
                          key={m.texto}
                          className="flex w-32 flex-col items-center gap-2"
                        >
                          <Cards codes={m.ex} size="sm" />
                          <span className="text-center text-sm leading-snug font-medium text-foreground">
                            {m.texto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="mt-3 max-w-[60ch] text-muted-foreground">
                  {t.nota}
                </p>
              </div>
            </CardContent>
          </Card>
        </Secao>

        <Secao titulo="A divisão dos flushes">
          <p className="-mt-3 mb-5 max-w-[60ch] text-lg text-muted-foreground">
            Vale para os turns em que o flush completa, em carta baixa ou alta.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {mod14.flushes.map((f) => (
              <Card key={f.tipo} className="gap-3 rounded-[14px] p-5">
                <Cards codes={f.ex} size="sm" />
                <strong className={cn("text-lg uppercase", COR_ACAO[f.acao])}>
                  {f.acao}
                </strong>
                <small className="text-muted-foreground">{f.tipo}</small>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Erros mais comuns">
          <Lista itens={mod14.erros} />
        </Secao>

        <Secao titulo="Regras de bolso">
          <Lista itens={mod14.pocket} />
        </Secao>

        <section className="mt-16">
          <p className="max-w-[60ch] text-muted-foreground">
            Fonte: {mod14.fonte}.
          </p>
        </section>
      </div>
    </main>
  )
}
