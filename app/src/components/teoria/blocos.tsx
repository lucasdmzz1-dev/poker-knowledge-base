import { Badge } from "@/components/ui/badge"
import { Cards } from "@/components/poker/cards"
import type { CardCode } from "@/data/mod15"
import { cn } from "@/lib/utils"

// Blocos das páginas de teoria (módulos 14, 15 e 17). Tamanhos de texto e
// espaçamentos ficam aqui para as páginas não divergirem.

export const ITEM =
  "rounded-full border px-4 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"

export function Secao({
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

export function Lista({ itens }: { itens: string[] }) {
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

// Frase de apoio logo abaixo do título da seção.
export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p className="-mt-3 mb-5 max-w-[60ch] text-lg text-muted-foreground">
      {children}
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
    <p className={cn("max-w-[60ch] text-lg text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export function Fonte({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <p className="max-w-[60ch] text-base text-muted-foreground">{children}</p>
    </section>
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
  return <p className="text-base text-muted-foreground">{children}</p>
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
