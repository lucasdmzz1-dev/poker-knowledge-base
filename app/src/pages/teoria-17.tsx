import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, RngStrip } from "@/components/poker/cards"
import { mod17, splitById, type SizeBB, type SplitId } from "@/data/mod17"
import { KEYS, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

const ITEM =
  "rounded-full border px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"

const COR_SIZE: Record<SizeBB, string> = {
  B25: "bg-b25",
  B40: "bg-b50",
  B70: "bg-primary",
}

function SizeBadge({ size }: { size: SizeBB }) {
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

export default function Teoria17() {
  const [splitId, setSplitId] = useState<SplitId>("b40")
  const [freq, setFreq] = useState(75)
  const split = splitById[splitId]

  useEffect(() => {
    writeJSON(KEYS.last, {
      to: "/teoria/bb-raise-pot-vs-sb",
      label: "BB Raise Pot vs SB · Teoria",
      verbo: "Continuar",
    })
  }, [])

  return (
    <main>
      <PageHeader
        title={mod17.nome}
        lead={mod17.spot}
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
          <Badge variant="outline">Sizes B25, B40 e B70</Badge>
        </div>
      </PageHeader>
      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        <Secao titulo="Em 30 segundos">
          <Lista itens={mod17.em30} />
        </Secao>

        <Secao titulo="Por que este pote é diferente">
          <Lista itens={mod17.premissas} />
        </Secao>

        <Secao titulo="Thin value define o size">
          <div className="grid gap-3 md:grid-cols-3">
            {mod17.sizes.map((s) => (
              <Card key={s.size} className="gap-2.5 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  <SizeBadge size={s.size} />
                  <strong className="text-lg uppercase">{s.nome}</strong>
                </div>
                <p className="text-lg text-muted-foreground">{s.nota}</p>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Como dividir o range">
          <ToggleGroup
            type="single"
            value={splitId}
            onValueChange={(v) => v && setSplitId(v as SplitId)}
            className="mb-5 flex flex-wrap justify-start gap-2"
            aria-label="Tipo de split"
          >
            {mod17.splits.map((s) => (
              <ToggleGroupItem key={s.id} value={s.id} className={ITEM}>
                {s.nome}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Card className="rounded-[22px]">
            <CardContent
              className="grid gap-8 p-7 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]"
              aria-live="polite"
            >
              <div className="flex flex-col items-start gap-4">
                <Cards codes={split.board} size="lg" />
                <span className="text-base font-medium text-muted-foreground">
                  {split.boardNome}
                </span>
                <SizeBadge size={split.size} />
              </div>
              <div>
                <p className="mb-2 max-w-[60ch] font-serif text-lg">
                  {split.quando}
                </p>
                {split.buckets.map((b) => (
                  <div
                    key={`${b.p}-${b.maos}`}
                    className="grid grid-cols-[4.2ch_minmax(0,1fr)] items-center gap-x-3.5 gap-y-1 border-t py-3"
                  >
                    <span className="text-lg font-bold tabular-nums">
                      {b.p}%
                    </span>
                    <span className="h-2 overflow-hidden rounded-full bg-secondary">
                      <i
                        className="block h-full rounded-full bg-primary"
                        style={{ width: `${b.p}%` }}
                      />
                    </span>
                    <ul className="col-start-2 flex flex-wrap gap-x-6 gap-y-4">
                      {b.ex.map((e) => (
                        <li
                          key={e.classe}
                          className="flex w-28 flex-col items-center gap-2"
                        >
                          <Cards codes={e.hero} size="sm" />
                          <span className="text-center text-base leading-snug font-medium text-foreground">
                            {e.classe}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="mt-3 max-w-[60ch] text-lg text-muted-foreground">
                  {split.nota}
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
          <p className="mt-3 max-w-[60ch] text-lg text-muted-foreground">
            Com flush draw no board, a mão com carta do naipe aposta mais e a
            sem carta dá check. Sem flush draw, um RNG de 1 a 50 serve.
          </p>
        </Secao>

        <Secao titulo="Size por tipo de board">
          <div className="grid gap-3 md:grid-cols-2">
            {mod17.tiposDeBoard.map((t) => (
              <Card
                key={t.nome}
                className="flex-row items-center gap-3 rounded-[14px] p-4"
              >
                <SizeBadge size={t.size} />
                <div>
                  <strong className="block text-lg uppercase">{t.nome}</strong>
                  <small className="text-base text-muted-foreground">
                    {t.estrategia}
                  </small>
                </div>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Boards da aula">
          <p className="-mt-3 mb-5 max-w-[60ch] text-lg text-muted-foreground">
            Boards conferidos no vídeo, com o size que o coach usou em cada um.
          </p>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {mod17.boards.map((b) => (
              <Card key={b.cards.join("")} className="gap-3 rounded-[14px] p-4">
                <Cards codes={b.cards} size="sm" />
                <div className="flex items-center gap-2">
                  <SizeBadge size={b.size} />
                  <strong className="text-lg">{b.nome}</strong>
                </div>
                <small className="text-base text-muted-foreground">
                  {b.nota}
                </small>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Dois boards com split próprio">
          <div className="grid gap-3 md:grid-cols-2">
            {mod17.especiais.map((e) => (
              <Card key={e.nome} className="gap-3 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  <SizeBadge size={e.size} />
                  <strong className="text-lg uppercase">{e.nome}</strong>
                </div>
                <ul className="grid list-disc gap-1.5 pl-5 text-lg text-muted-foreground">
                  {e.textos.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Turn">
          <Lista itens={mod17.turn} />
        </Secao>

        <Secao titulo="Regras de bolso">
          <Lista itens={mod17.pocket} />
        </Secao>

        <section className="mt-16">
          <p className="max-w-[60ch] text-muted-foreground">
            Fonte: {mod17.fonte}.
          </p>
        </section>
      </div>
    </main>
  )
}
