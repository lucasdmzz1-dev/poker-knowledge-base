import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, PlayingCard, RngStrip } from "@/components/poker/cards"
import { mod15, tipoById, type TipoId } from "@/data/mod15"
import { KEYS, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

const ITEM =
  "rounded-full border px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"

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

export default function Teoria15() {
  const [tipoId, setTipoId] = useState<TipoId>("semi")
  const [freq, setFreq] = useState(75)
  const tipo = tipoById[tipoId]

  useEffect(() => {
    writeJSON(KEYS.last, {
      to: "/teoria/bet-vs-missed",
      label: "Bet vs Missed C-Bet · Teoria",
      verbo: "Continuar",
    })
  }, [])

  let grupoAnterior: string | undefined

  return (
    <main>
      <PageHeader
        title={mod15.nome}
        lead={mod15.spot}
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
          <Badge variant="outline">Flop</Badge>
          <Badge variant="outline">Em posição</Badge>
          <Badge variant="outline">Sizes B25 e B50</Badge>
        </div>
      </PageHeader>
      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        <Secao titulo="Em 30 segundos">
          <Lista itens={mod15.em30} />
        </Secao>

        <Secao titulo="Os cinco tipos de flop">
          <ToggleGroup
            type="single"
            value={tipoId}
            onValueChange={(v) => v && setTipoId(v as TipoId)}
            className="mb-5 flex flex-wrap justify-start gap-2"
            aria-label="Tipo de flop"
          >
            {mod15.tipos.map((t) => (
              <ToggleGroupItem key={t.id} value={t.id} className={ITEM}>
                {t.nome}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Card className="rounded-[22px]">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
              <div className="flex flex-col items-start gap-4">
                <Cards codes={tipo.exemplo} size="lg" />
                <Badge
                  className={cn(
                    "px-3.5 py-1 text-sm font-bold text-[#1a0907]",
                    tipo.size === "B25" ? "bg-b25" : "bg-b50"
                  )}
                >
                  {tipo.size}
                </Badge>
              </div>
              <div aria-live="polite">
                <p className="mb-2 max-w-[60ch] font-serif text-lg">
                  {tipo.criterio}
                </p>
                {tipo.buckets.map((b) => {
                  const novoGrupo = b.grupo && b.grupo !== grupoAnterior
                  grupoAnterior = b.grupo
                  return (
                    <div key={`${b.grupo ?? ""}-${b.p}-${b.maos}`}>
                      {novoGrupo && (
                        <div className="pt-3 font-medium">{b.grupo}</div>
                      )}
                      <div className="grid grid-cols-[4.2ch_minmax(0,1fr)] items-center gap-x-3.5 gap-y-1 border-t py-3">
                        <span className="text-lg font-bold tabular-nums">
                          {b.p}%
                        </span>
                        <span className="h-2 overflow-hidden rounded-full bg-secondary">
                          <i
                            className="block h-full rounded-full bg-primary"
                            style={{ width: `${b.p}%` }}
                          />
                        </span>
                        <span className="col-start-2 text-muted-foreground">
                          {b.maos}
                        </span>
                      </div>
                    </div>
                  )
                })}
                <p className="mt-3 max-w-[60ch] text-muted-foreground">
                  {tipo.nota}
                </p>
              </div>
            </CardContent>
          </Card>
        </Secao>

        <Secao titulo="Como sortear a frequência">
          <p className="-mt-3 mb-4 max-w-[60ch] text-lg text-muted-foreground">
            Cada mão tem uma frequência de aposta. O número do RNG (1 a 100)
            decide: até a frequência da mão, você aposta. Depois, dá check.
          </p>
          <ToggleGroup
            type="single"
            value={String(freq)}
            onValueChange={(v) => v && setFreq(Number(v))}
            className="flex flex-wrap justify-start gap-2"
            aria-label="Frequência da mão"
          >
            {[100, 75, 50, 25].map((p) => (
              <ToggleGroupItem key={p} value={String(p)} className={ITEM}>
                {p}%
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <RngStrip bucket={freq} />
        </Secao>

        <Secao titulo="Boards de referência">
          <p className="-mt-3 mb-5 max-w-[60ch] text-lg text-muted-foreground">
            Classificações validadas. Os naipes dos boards sem fonte direta são
            ilustrativos.
          </p>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(230px,1fr))] gap-3">
            {mod15.refBoards.map((r) => (
              <Card key={r.b.join("")} className="gap-2.5 rounded-[14px] p-4">
                <div className="flex gap-1.5">
                  {r.b.map((c) => (
                    <PlayingCard key={c} code={c} size="sm" />
                  ))}
                </div>
                <strong>{tipoById[r.t].nome}</strong>
                <small className="text-muted-foreground">
                  {r.fixo ? "Naipes da fonte" : "Naipes ilustrativos"}
                </small>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Regras de bolso">
          <Lista itens={mod15.pocket} />
        </Secao>

        <section className="mt-16">
          <Collapsible className="rounded-xl border bg-card px-4 py-3.5">
            <CollapsibleTrigger className="cursor-pointer font-medium">
              Dúvidas abertas (levar ao coach)
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                {mod15.duvidas.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            Fonte: {mod15.fonte}.
          </p>
        </section>
      </div>
    </main>
  )
}
