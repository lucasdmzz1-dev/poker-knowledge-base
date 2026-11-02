import { Children, createContext, useContext, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Cards } from "@/components/poker/cards"
import type { CardCode } from "@/data/mod15"
import { cn } from "@/lib/utils"
import { Rico, separa } from "./rico"

// Blocos das páginas de teoria (módulos 14, 15 e 17). Tamanhos de texto e
// espaçamentos ficam aqui para as páginas não divergirem.

export const ITEM =
  "rounded-full border px-4 font-semibold uppercase data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"

// Cada título de seção ganha uma cor do conjunto abaixo. Verde e vermelho ficam
// de fora de propósito: só significam positivo e negativo.
const ACENTOS = [
  {
    texto: "text-sky-300",
    barra: "bg-sky-300",
    marca: "marker:text-sky-300",
    numero: "bg-sky-300/15 text-sky-300",
  },
  {
    texto: "text-amber-300",
    barra: "bg-amber-300",
    marca: "marker:text-amber-300",
    numero: "bg-amber-300/15 text-amber-300",
  },
  {
    texto: "text-pink-300",
    barra: "bg-pink-300",
    marca: "marker:text-pink-300",
    numero: "bg-pink-300/15 text-pink-300",
  },
  {
    texto: "text-zinc-100",
    barra: "bg-zinc-100",
    marca: "marker:text-zinc-100",
    numero: "bg-zinc-100/15 text-zinc-100",
  },
]

const AcentoCtx = createContext(0)

export const useAcento = () => ACENTOS[useContext(AcentoCtx) % ACENTOS.length]

// Container das seções: dá a cada uma a sua cor, em ordem.
export function Secoes({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1080px] px-5 pb-20">
      {Children.toArray(children).map((c, i) => (
        <AcentoCtx.Provider key={i} value={i}>
          {c}
        </AcentoCtx.Provider>
      ))}
    </div>
  )
}

export function Secao({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  const a = useAcento()
  return (
    <section className="mt-20">
      <div className="mb-7 flex flex-col items-center gap-3 text-center">
        <span className={cn("h-1 w-12 rounded-full", a.barra)} aria-hidden />
        <h2
          className={cn(
            "text-[clamp(1.5rem,3.4vw,2.1rem)] leading-tight font-bold tracking-tight",
            a.texto
          )}
        >
          {titulo}
        </h2>
      </div>
      {children}
    </section>
  )
}

export type TomLista = "neutro" | "negativo" | "positivo"

function Marcador({ tom, i }: { tom: TomLista; i: number }) {
  const a = useAcento()
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full text-base font-bold",
        tom === "negativo" && "bg-b50/15 text-b50",
        tom === "positivo" && "bg-primary/15 text-primary",
        tom === "neutro" && a.numero
      )}
    >
      {tom === "negativo" ? "✕" : tom === "positivo" ? "✓" : i + 1}
    </span>
  )
}

// Um item: a frase de abertura em destaque e o detalhe embaixo.
function ItemTexto({ texto }: { texto: string }) {
  const [titulo, resto] = separa(texto)
  return (
    <div className="grid gap-1">
      {titulo && (
        <p className="text-lg leading-snug font-bold text-foreground">
          <Rico>{titulo}</Rico>
        </p>
      )}
      {resto && (
        <p className="font-serif text-lg leading-relaxed text-muted-foreground">
          <Rico>{resto}</Rico>
        </p>
      )}
    </div>
  )
}

function CartaoItem({
  texto,
  i,
  tom,
}: {
  texto: string
  i: number
  tom: TomLista
}) {
  return (
    <li
      className={cn(
        "grid grid-cols-[auto_1fr] items-start gap-4 rounded-[14px] border bg-card p-4 sm:p-5",
        tom === "negativo" && "border-b50/30",
        tom === "positivo" && "border-primary/30"
      )}
    >
      <Marcador tom={tom} i={i} />
      <ItemTexto texto={texto} />
    </li>
  )
}

export function Lista({
  itens,
  tom = "neutro",
}: {
  itens: string[]
  tom?: TomLista
}) {
  return (
    <ol className="mx-auto grid max-w-[860px] gap-3 md:grid-cols-2">
      {itens.map((t, i) => (
        <CartaoItem key={t} texto={t} i={i} tom={tom} />
      ))}
    </ol>
  )
}

// Um ponto de cada vez, com navegação. "Ver tudo" abre a lista completa.
export function ListaPassos({ itens }: { itens: string[] }) {
  const [i, setI] = useState(0)
  const [tudo, setTudo] = useState(false)
  const a = useAcento()

  if (tudo) {
    return (
      <div className="grid gap-5">
        <Lista itens={itens} />
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => setTudo(false)}>
            PASSO A PASSO
          </Button>
        </div>
      </div>
    )
  }

  const [titulo, resto] = separa(itens[i])
  return (
    <div className="mx-auto grid max-w-[760px] gap-5">
      <div
        className="grid min-h-48 content-center gap-3 rounded-[22px] border bg-card p-6 text-center sm:p-9"
        aria-live="polite"
      >
        <span
          className={cn(
            "mx-auto grid size-11 place-items-center rounded-full text-xl font-bold",
            a.numero
          )}
        >
          {i + 1}
        </span>
        {titulo && (
          <p className="text-[clamp(1.3rem,2.6vw,1.7rem)] leading-snug font-bold text-foreground">
            <Rico>{titulo}</Rico>
          </p>
        )}
        {resto && (
          <p className="mx-auto max-w-[56ch] font-serif text-lg leading-relaxed text-muted-foreground">
            <Rico>{resto}</Rico>
          </p>
        )}
      </div>
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          disabled={i === 0}
          onClick={() => setI(i - 1)}
        >
          ‹ ANTERIOR
        </Button>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Pontos"
        >
          {itens.map((t, k) => (
            <button
              key={t}
              type="button"
              aria-label={`Ponto ${k + 1}`}
              aria-current={k === i}
              onClick={() => setI(k)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-200",
                k === i
                  ? cn("w-7", a.barra)
                  : "w-2.5 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
        <Button disabled={i === itens.length - 1} onClick={() => setI(i + 1)}>
          PRÓXIMO ›
        </Button>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setTudo(true)}
          className="text-base font-semibold text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline"
        >
          Ver tudo de uma vez
        </button>
      </div>
    </div>
  )
}

// Frase de apoio logo abaixo do título da seção, centralizada.
export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto -mt-3 mb-6 max-w-[60ch] text-center text-lg text-muted-foreground">
      {typeof children === "string" ? <Rico>{children}</Rico> : children}
    </p>
  )
}

export function Nota({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={cn(
        "max-w-[64ch] rounded-xl bg-amber-300/10 p-4 text-lg leading-relaxed text-muted-foreground",
        className
      )}
    >
      <strong className="mr-2 text-base font-bold tracking-wide text-amber-300 uppercase">
        Atenção
      </strong>
      {typeof children === "string" ? <Rico>{children}</Rico> : children}
    </p>
  )
}

// Texto de uma ação ou faixa: a frase de abertura em destaque e o detalhe embaixo.
export function TextoAcao({ texto }: { texto: string }) {
  const [titulo, resto] = separa(texto)
  return (
    <span className="grid gap-1">
      {titulo && (
        <span className="text-lg leading-snug font-bold text-foreground">
          <Rico>{titulo}</Rico>
        </span>
      )}
      {resto && (
        <span className="text-base leading-relaxed text-muted-foreground">
          <Rico>{resto}</Rico>
        </span>
      )}
    </span>
  )
}

export interface VideoT {
  id: string
  nome?: string
}

// Aulas do módulo: um player, com abas quando houver mais de uma.
export function Videos({
  videos,
  titulo,
}: {
  videos: VideoT[]
  titulo: string
}) {
  const [id, setId] = useState(videos[0]?.id)
  if (videos.length === 0) return null
  const atual = videos.find((v) => v.id === id) ?? videos[0]
  return (
    <div className="mx-auto mt-8 grid w-full max-w-[720px] gap-3">
      {videos.length > 1 && (
        <ToggleGroup
          type="single"
          value={atual.id}
          onValueChange={(v) => v && setId(v)}
          className="flex flex-wrap justify-center gap-2"
          aria-label="Escolha a aula"
        >
          {videos.map((v, i) => (
            <ToggleGroupItem key={v.id} value={v.id} className={ITEM}>
              {v.nome ?? `Aula ${i + 1}`}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}
      <a
        href={`https://www.youtube.com/watch?v=${atual.id}`}
        target="_blank"
        rel="noreferrer"
        className="text-center text-sm font-semibold text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline"
      >
        Abrir no YouTube ↗
      </a>
      <div className="aspect-video w-full overflow-hidden rounded-[22px] border">
        <iframe
          key={atual.id}
          src={`https://www.youtube.com/embed/${atual.id}`}
          title={`Aula: ${titulo}`}
          className="size-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function Etiqueta({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <Badge
      className={cn("px-3.5 py-1 text-sm font-bold text-[#1a0907]", className)}
    >
      {children}
    </Badge>
  )
}

export function RotuloBoard({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-base font-medium text-muted-foreground">
      {children}
    </span>
  )
}

// Textos dos cartões pequenos (sizes, boards de referência, flushes).
export function TituloMini({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <strong className={cn("text-lg leading-snug", className)}>
      {children}
    </strong>
  )
}

export function TextoMini({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-muted-foreground">{children}</p>
}

// Um tipo de mão: duas cartas pequenas e o nome embaixo, centralizado.
export function Exemplo({
  cartas,
  nome,
}: {
  cartas: CardCode[]
  nome: string
}) {
  return (
    <li className="flex w-28 flex-col items-center gap-2 sm:w-32">
      <Cards codes={cartas} size="sm" />
      <span className="text-center text-base leading-snug font-medium text-foreground">
        {nome}
      </span>
    </li>
  )
}

export function Exemplos({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-wrap content-start gap-x-4 gap-y-5 sm:gap-x-6">
      {children}
    </ul>
  )
}

// Faixa de frequência: porcentagem, barra e o conteúdo da faixa embaixo.
export function Faixa({
  p,
  children,
}: {
  p: number
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-[4.2ch_minmax(0,1fr)] items-center gap-x-3.5 gap-y-2 border-t py-3">
      <span className="text-lg font-bold tabular-nums">{p}%</span>
      <span className="h-2 overflow-hidden rounded-full bg-secondary">
        <i
          className="block h-full rounded-full bg-primary"
          style={{ width: `${p}%` }}
        />
      </span>
      <div className="col-span-2 sm:col-span-1 sm:col-start-2">{children}</div>
    </div>
  )
}
