import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
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
import { moduloPorSlug } from "@/data/teoria/registro"
import type {
  AbaT,
  AcaoT,
  CorAcao,
  CorEtiqueta,
  Etiq,
  MaoEx,
  SecaoT,
} from "@/data/teoria/tipos"
import { KEYS, writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

const COR_ETIQUETA: Record<CorEtiqueta, string> = {
  claro: "bg-b25",
  vermelho: "bg-b50",
  verde: "bg-primary",
}

const COR_ACAO: Record<CorAcao, string> = {
  verde: "text-primary",
  branco: "text-foreground",
  vermelho: "text-b50",
}

function Etq({ e }: { e: Etiq }) {
  return <Etiqueta className={COR_ETIQUETA[e.cor]}>{e.texto}</Etiqueta>
}

function ListaMaos({ maos }: { maos: MaoEx[] }) {
  return (
    <Exemplos>
      {maos.map((m) => (
        <Exemplo key={m.nome} cartas={m.cartas} nome={m.nome} />
      ))}
    </Exemplos>
  )
}

function Acoes({ acoes }: { acoes: AcaoT[] }) {
  return (
    <>
      {acoes.map((a) => (
        <div
          key={a.nome}
          className="grid gap-2 border-t py-3 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-4"
        >
          <span className={cn("text-lg font-bold uppercase", COR_ACAO[a.cor])}>
            {a.nome}
          </span>
          {a.maos && a.maos.length > 0 ? (
            <ListaMaos maos={a.maos} />
          ) : (
            <span className="text-lg font-semibold text-foreground">
              {a.texto}
            </span>
          )}
        </div>
      ))}
    </>
  )
}

function Abas({ abas }: { abas: AbaT[] }) {
  const [id, setId] = useState(abas[0].id)
  const aba = abas.find((a) => a.id === id) ?? abas[0]

  return (
    <>
      <ToggleGroup
        type="single"
        value={aba.id}
        onValueChange={(v) => v && setId(v)}
        className="mb-5 flex flex-wrap justify-start gap-2"
        aria-label="Escolha o caso"
      >
        {abas.map((a) => (
          <ToggleGroupItem key={a.id} value={a.id} className={ITEM}>
            {a.nome}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Card className="rounded-[22px]">
        <CardContent className="grid gap-10 p-5 sm:p-7">
          <p className="max-w-[60ch] font-serif text-lg" aria-live="polite">
            {aba.criterio}
          </p>
          {aba.blocos.map((b, i) => (
            <div
              key={b.grupo ?? b.rotulo ?? i}
              className={cn(
                "grid gap-8",
                b.cartas && "md:grid-cols-[minmax(0,320px)_minmax(0,1fr)]"
              )}
            >
              {b.cartas && (
                <div className="flex flex-col items-start gap-4">
                  <Cards codes={b.cartas} size="lg" />
                  {b.turn && (
                    <div className="flex items-center gap-3">
                      <PlayingCard code={b.turn} size="lg" />
                      <RotuloBoard>turn</RotuloBoard>
                    </div>
                  )}
                  {b.rotulo && <RotuloBoard>{b.rotulo}</RotuloBoard>}
                  {b.etiqueta && <Etq e={b.etiqueta} />}
                </div>
              )}
              <div>
                {b.grupo && <p className="pb-2 text-lg font-bold">{b.grupo}</p>}
                {b.faixas?.map((f) => (
                  <Faixa key={`${f.p}-${f.texto}`} p={f.p}>
                    {f.maos && f.maos.length > 0 ? (
                      <ListaMaos maos={f.maos} />
                    ) : (
                      <span className="text-lg font-semibold text-foreground">
                        {f.texto}
                      </span>
                    )}
                  </Faixa>
                ))}
                {b.acoes && <Acoes acoes={b.acoes} />}
              </div>
            </div>
          ))}
          {aba.nota && <Nota className="-mt-4">{aba.nota}</Nota>}
        </CardContent>
      </Card>
    </>
  )
}

function Rng() {
  const [freq, setFreq] = useState(75)
  return (
    <>
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
    </>
  )
}

function Conteudo({ s }: { s: SecaoT }) {
  switch (s.tipo) {
    case "lista":
      return (
        <>
          {s.intro && <Intro>{s.intro}</Intro>}
          <Lista itens={s.itens} />
        </>
      )
    case "cartoes":
      return (
        <>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div
            className={cn(
              "grid gap-3",
              s.colunas === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
            )}
          >
            {s.itens.map((c) => (
              <Card key={c.titulo} className="gap-3 rounded-[14px] p-5">
                <div className="flex items-center gap-3">
                  {c.etiqueta && <Etq e={c.etiqueta} />}
                  <TituloMini className="uppercase">{c.titulo}</TituloMini>
                </div>
                {c.cartas && <Cards codes={c.cartas} size="sm" />}
                {c.texto && <TextoMini>{c.texto}</TextoMini>}
                {c.textos && (
                  <ul className="grid list-disc gap-2 pl-5 text-base text-muted-foreground">
                    {c.textos.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </>
      )
    case "abas":
      return (
        <>
          {s.intro && <Intro>{s.intro}</Intro>}
          <Abas abas={s.abas} />
        </>
      )
    case "boards":
      return (
        <>
          {s.intro && <Intro>{s.intro}</Intro>}
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-3">
            {s.itens.map((b) => (
              <Card
                key={b.cartas.join("") + b.nome}
                className="gap-3 rounded-[14px] p-5"
              >
                <Cards codes={b.cartas} size="sm" />
                <div className="flex items-center gap-2">
                  {b.etiqueta && <Etq e={b.etiqueta} />}
                  <TituloMini>{b.nome}</TituloMini>
                </div>
                {b.nota && <TextoMini>{b.nota}</TextoMini>}
              </Card>
            ))}
          </div>
        </>
      )
    case "rng":
      return (
        <>
          <Intro>
            {s.intro ??
              "Cada mão tem uma frequência de aposta. O número do RNG (1 a 100) decide: até a frequência da mão, você aposta. Depois, dá check."}
          </Intro>
          <Rng />
          {s.nota && <Nota className="mt-3">{s.nota}</Nota>}
        </>
      )
  }
}

export default function TeoriaModulo() {
  const { slug } = useParams()
  const mod = slug ? moduloPorSlug[slug] : undefined

  useEffect(() => {
    if (!mod) return
    writeJSON(KEYS.last, {
      to: `/teoria/${mod.slug}`,
      label: `${mod.nome} · Teoria`,
      verbo: "Continuar",
    })
  }, [mod])

  if (!mod) return <Navigate to="/teoria" replace />

  return (
    <main>
      <PageHeader
        title={mod.nome}
        lead={mod.spot}
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
          {mod.tags.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
        {mod.video && (
          <div className="mx-auto mt-8 aspect-video w-full max-w-[720px] overflow-hidden rounded-[22px] border">
            <iframe
              src={`https://www.youtube.com/embed/${mod.video}`}
              title={`Aula: ${mod.nome}`}
              className="size-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        )}
      </PageHeader>
      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        {mod.secoes.map((s) => (
          <Secao key={s.titulo} titulo={s.titulo}>
            <Conteudo s={s} />
          </Secao>
        ))}
        <Fonte>Fonte: {mod.fonte}.</Fonte>
      </div>
    </main>
  )
}
