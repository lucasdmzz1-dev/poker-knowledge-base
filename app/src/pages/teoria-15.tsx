import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards, PlayingCard, RngStrip } from "@/components/poker/cards"
import {
  Etiqueta,
  Exemplo,
  Exemplos,
  Faixa,
  Fonte,
  Intro,
  ITEM,
  Lista,
  Nota,
  RotuloBoard,
  Secao,
  TextoMini,
  TituloMini,
} from "@/components/teoria/blocos"
import { mod15, tipoById, type TipoId } from "@/data/mod15"
import { KEYS, writeJSON } from "@/lib/storage"

function exemplosDoBucket(tipo: TipoId, p: number, grupo?: string) {
  if (tipo === "dobrado") {
    return mod15.exemplosDobrado
      .filter((e) => e.p === p && e.grupo === grupo)
      .map((e) => ({ id: e.id, hero: e.hero, nome: e.classe }))
  }
  return mod15.situacoes
    .filter((s) => s.tipo === tipo && s.bucket === p)
    .map((s) => ({ id: s.id, hero: s.hero, nome: s.classe }))
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
        <div className="mx-auto mt-8 aspect-video w-full max-w-[720px] overflow-hidden rounded-[22px] border">
          <iframe
            src="https://www.youtube.com/embed/3sDt8hoFNYE"
            title="Aula: Bet vs Missed C-Bet"
            className="size-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
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
            <CardContent className="grid gap-10 p-5 sm:p-7">
              <p className="max-w-[60ch] font-serif text-lg" aria-live="polite">
                {tipo.criterio}
              </p>
              {(
                tipo.blocos ?? [
                  { grupo: undefined, rotulo: undefined, codes: tipo.exemplo },
                ]
              ).map((bloco) => (
                <div
                  key={bloco.grupo ?? "unico"}
                  className="grid gap-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]"
                >
                  <div className="flex flex-col items-start gap-4">
                    <Cards codes={bloco.codes} size="lg" />
                    {bloco.rotulo && <RotuloBoard>{bloco.rotulo}</RotuloBoard>}
                    <Etiqueta
                      className={tipo.size === "B25" ? "bg-b25" : "bg-b50"}
                    >
                      {tipo.size}
                    </Etiqueta>
                  </div>
                  <div>
                    {bloco.grupo && (
                      <p className="pb-2 text-lg font-bold">{bloco.grupo}</p>
                    )}
                    {tipo.buckets
                      .filter((b) => b.grupo === bloco.grupo)
                      .map((b) => {
                        const exemplos = exemplosDoBucket(tipo.id, b.p, b.grupo)
                        return (
                          <Faixa key={`${b.p}-${b.maos}`} p={b.p}>
                            {exemplos.length > 0 ? (
                              <Exemplos>
                                {exemplos.map((s) => (
                                  <Exemplo
                                    key={s.id}
                                    cartas={s.hero}
                                    nome={s.nome}
                                  />
                                ))}
                              </Exemplos>
                            ) : (
                              <span className="text-lg font-semibold text-foreground">
                                {b.maos}
                              </span>
                            )}
                          </Faixa>
                        )
                      })}
                  </div>
                </div>
              ))}
              <Nota className="-mt-4">{tipo.nota}</Nota>
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
        </Secao>

        <Secao titulo="Boards de referência">
          <Intro>
            Classificações validadas. Os naipes dos boards sem fonte direta são
            ilustrativos.
          </Intro>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {mod15.refBoards.map((r) => (
              <Card key={r.b.join("")} className="gap-3 rounded-[14px] p-5">
                <div className="flex gap-1.5">
                  {r.b.map((c) => (
                    <PlayingCard key={c} code={c} size="sm" />
                  ))}
                </div>
                <TituloMini>{tipoById[r.t].nome}</TituloMini>
                <TextoMini>
                  {r.fixo ? "Naipes da fonte" : "Naipes ilustrativos"}
                </TextoMini>
              </Card>
            ))}
          </div>
        </Secao>

        <Secao titulo="Regras de bolso">
          <Lista itens={mod15.pocket} />
        </Secao>

        <Fonte>Fonte: {mod15.fonte}.</Fonte>
      </div>
    </main>
  )
}
