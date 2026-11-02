import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, RngStrip } from "@/components/poker/cards"
import {
  Etiqueta,
  Exemplo,
  Exemplos,
  Faixa,
  Intro,
  ITEM,
  Lista,
  Nota,
  RotuloBoard,
  Secao,
  Secoes,
  Videos,
  TextoMini,
  TituloMini,
} from "@/components/teoria/blocos"
import { mod17, splitById, type SizeBB, type SplitId } from "@/data/mod17"
import { KEYS, writeJSON } from "@/lib/storage"

const COR_SIZE: Record<SizeBB, string> = {
  B25: "bg-b25",
  B40: "bg-b50",
  B70: "bg-primary",
}

function SizeBadge({ size }: { size: SizeBB }) {
  return <Etiqueta className={COR_SIZE[size]}>{size}</Etiqueta>
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
        <Videos videos={[{ id: "0fanABMWSkE" }]} titulo={mod17.nome} />
      </PageHeader>
      <Secoes>
        <Secao titulo="Em 30 segundos">
          <Lista itens={mod17.em30} />
        </Secao>

        <Secao titulo="Por que este pote é diferente">
          <Lista itens={mod17.premissas} />
        </Secao>

        <Secao titulo="Thin value define o size">
          <div className="grid gap-3 md:grid-cols-3">
            {mod17.sizes.map((s) => (
              <Card key={s.size} className="gap-3 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  <SizeBadge size={s.size} />
                  <TituloMini className="uppercase">{s.nome}</TituloMini>
                </div>
                <TextoMini>{s.nota}</TextoMini>
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
            <CardContent className="grid gap-10 p-5 sm:p-7">
              <p className="max-w-[60ch] font-serif text-lg" aria-live="polite">
                {split.quando}
              </p>
              <div className="grid gap-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
                <div className="flex flex-col items-start gap-4">
                  <Cards codes={split.board} size="lg" />
                  <RotuloBoard>{split.boardNome}</RotuloBoard>
                  <SizeBadge size={split.size} />
                </div>
                <div>
                  {split.buckets.map((b) => (
                    <Faixa key={`${b.p}-${b.maos}`} p={b.p}>
                      <Exemplos>
                        {b.ex.map((e) => (
                          <Exemplo
                            key={e.classe}
                            cartas={e.hero}
                            nome={e.classe}
                          />
                        ))}
                      </Exemplos>
                    </Faixa>
                  ))}
                </div>
              </div>
              <Nota className="-mt-4">{split.nota}</Nota>
            </CardContent>
          </Card>
        </Secao>

        <Secao titulo="Como sortear a frequência">
          <Intro>
            Cada mão tem uma frequência de aposta. O número do RNG (1 a 100)
            decide: até a frequência da mão, você aposta. Depois, dá check.
          </Intro>
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
          <Nota className="mt-3">
            Com flush draw no board, a mão com carta do naipe aposta mais e a
            sem carta dá check. Sem flush draw, um RNG de 1 a 50 serve.
          </Nota>
        </Secao>

        <Secao titulo="Size por tipo de board">
          <div className="grid gap-3 md:grid-cols-2">
            {mod17.tiposDeBoard.map((t) => (
              <Card
                key={t.nome}
                className="flex-row items-center gap-3 rounded-[14px] p-5"
              >
                <SizeBadge size={t.size} />
                <div>
                  <TituloMini className="block uppercase">{t.nome}</TituloMini>
                  <TextoMini>{t.estrategia}</TextoMini>
                </div>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Boards da aula">
          <Intro>
            Boards conferidos no vídeo, com o size que o coach usou em cada um.
          </Intro>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {mod17.boards.map((b) => (
              <Card key={b.cards.join("")} className="gap-3 rounded-[14px] p-5">
                <Cards codes={b.cards} size="sm" />
                <div className="flex items-center gap-2">
                  <SizeBadge size={b.size} />
                  <TituloMini>{b.nome}</TituloMini>
                </div>
                <TextoMini>{b.nota}</TextoMini>
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
                  <TituloMini className="uppercase">{e.nome}</TituloMini>
                </div>
                <ul className="grid list-disc gap-2 pl-5 text-base text-muted-foreground">
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
      </Secoes>
    </main>
  )
}
