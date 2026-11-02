import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, PlayingCard } from "@/components/poker/cards"
import {
  Etiqueta,
  Exemplo,
  Exemplos,
  Intro,
  ITEM,
  Lista,
  ListaPassos,
  Nota,
  RotuloBoard,
  Secao,
  Secoes,
  Voltar,
  Videos,
  TextoMini,
  TituloMini,
} from "@/components/teoria/blocos"
import { mod14, turnById, type SizeProbe, type TurnId } from "@/data/mod14"
import { KEYS, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

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
  return <Etiqueta className={COR_SIZE[size]}>{size}</Etiqueta>
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
        lead={mod14.spot.toUpperCase()}
        topo={<Voltar />}
      >
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Badge variant="outline">Turn</Badge>
          <Badge variant="outline">Fora de posição</Badge>
          <Badge variant="outline">Sizes B40, B70 e B100</Badge>
        </div>
        <Videos videos={[{ id: "CkP1v_BjJcU" }]} titulo={mod14.nome} />
      </PageHeader>
      <Secoes>
        <Secao titulo="Em 30 segundos">
          <ListaPassos itens={mod14.em30} />
        </Secao>

        <Secao titulo="O que o BTN tem no check atrás">
          <Lista itens={mod14.checkAtras} />
        </Secao>

        <Secao titulo="Como escolher o size">
          <div className="grid gap-3 md:grid-cols-2">
            {mod14.sizes.map((s) => (
              <Card key={s.para} className="gap-3 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  <SizeBadge size={s.size} />
                  <TituloMini className="uppercase">{s.para}</TituloMini>
                </div>
                <TextoMini>{s.quando}</TextoMini>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="O que fazer em cada turn">
          <Intro>
            Base: 8-7-5 com flush draw, BTN contra BB, 40bb, flop em
            check-check.
          </Intro>
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
            <CardContent className="grid gap-10 p-5 sm:p-7">
              <p className="max-w-[60ch] font-serif text-lg" aria-live="polite">
                {t.criterio}
              </p>
              <div className="grid gap-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
                <div className="flex flex-col items-start gap-4">
                  <Cards codes={t.flop} size="lg" />
                  <div className="flex items-center gap-3">
                    <PlayingCard code={t.turn} size="lg" />
                    <RotuloBoard>turn</RotuloBoard>
                  </div>
                  <SizeBadge size={t.size} />
                </div>
                <div>
                  {t.acoes.map((a) => (
                    <div
                      key={a.nome}
                      className="grid gap-2 border-t py-3 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-4"
                    >
                      <span
                        className={cn(
                          "text-lg font-bold uppercase",
                          COR_ACAO[a.nome]
                        )}
                      >
                        {a.nome}
                      </span>
                      <Exemplos>
                        {a.maos.map((m) => (
                          <Exemplo key={m.texto} cartas={m.ex} nome={m.texto} />
                        ))}
                      </Exemplos>
                    </div>
                  ))}
                </div>
              </div>
              <Nota className="-mt-4">{t.nota}</Nota>
            </CardContent>
          </Card>
        </Secao>

        <Secao titulo="A divisão dos flushes">
          <Intro>
            Vale para os turns em que o flush completa, em carta baixa ou alta.
          </Intro>
          <div className="grid gap-3 md:grid-cols-3">
            {mod14.flushes.map((f) => (
              <Card key={f.tipo} className="gap-3 rounded-[14px] p-5">
                <Cards codes={f.ex} size="sm" />
                <TituloMini className={cn("uppercase", COR_ACAO[f.acao])}>
                  {f.acao}
                </TituloMini>
                <TextoMini>{f.tipo}</TextoMini>
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
      </Secoes>
    </main>
  )
}
