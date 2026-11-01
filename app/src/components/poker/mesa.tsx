import type { CSSProperties } from "react"
import { Dices, Flame, Spade } from "lucide-react"
import { Cards, RngPlate } from "@/components/poker/cards"
import { cn } from "@/lib/utils"

export type Pos = "UTG" | "UTG1" | "LJ" | "HJ" | "CO" | "BTN" | "SB" | "BB"
export type Opener = "HJ" | "CO"

// Ordem de ação no pré-flop, da esquerda para a direita.
const ORDEM: Pos[] = ["UTG", "UTG1", "LJ", "HJ", "CO", "BTN", "SB", "BB"]

// Com o herói no BTN (embaixo, no centro), o resto da mesa gira a partir dele.
const POS_TELA: Record<Pos, [x: number, y: number, xCelular: number]> = {
  BTN: [50, 84, 50],
  SB: [26, 84, 28],
  BB: [11, 50, 8],
  UTG: [26, 16, 22],
  UTG1: [50, 16, 50],
  LJ: [74, 16, 78],
  HJ: [89, 50, 92],
  CO: [78, 84, 91],
}

const STACK = 40
const ABERTURA = 2
// Pote single raised em que SB e BB deram fold: abertura, call e os blinds mortos.
export const POTE_BB = ABERTURA * 2 + 0.5 + 1
export const STACK_EFETIVO = STACK - ABERTURA

export function tamanhoBB(fracao: number): string {
  return (Math.round(POTE_BB * fracao * 10) / 10).toString()
}

function stackNaMesa(pos: Pos, opener: Opener): number {
  if (pos === opener || pos === "BTN") return STACK_EFETIVO
  if (pos === "SB") return STACK - 0.5
  if (pos === "BB") return STACK - 1
  return STACK
}

function estaNoPote(pos: Pos, opener: Opener): boolean {
  return pos === opener || pos === "BTN"
}

export function BarraAcoes({
  opener,
  agora,
}: {
  opener: Opener
  agora: string
}) {
  return (
    <div
      className="flex [scrollbar-width:none] items-center gap-1.5 overflow-x-auto pb-1 text-sm whitespace-nowrap [&::-webkit-scrollbar]:hidden"
      aria-label="Ações até aqui"
    >
      {ORDEM.map((p) => {
        const acao =
          p === opener ? `Raise ${ABERTURA}` : p === "BTN" ? "Call" : "Fold"
        return (
          <span
            key={p}
            className="flex shrink-0 items-center gap-2 rounded-lg border bg-card py-1 pr-1 pl-2.5"
          >
            <span className="text-muted-foreground">
              {p} <b className="font-bold text-foreground">{STACK}</b>
            </span>
            <span
              className={cn(
                "rounded-md px-2.5 py-1 font-medium",
                p === opener ? "bg-secondary" : "bg-muted text-muted-foreground"
              )}
            >
              {acao}
            </span>
          </span>
        )
      })}
      <span className="shrink-0 px-1 text-muted-foreground">Flop</span>
      <span className="flex shrink-0 items-center gap-2 rounded-lg border bg-card py-1 pr-1 pl-2.5">
        <span className="text-muted-foreground">
          {opener} <b className="font-bold text-foreground">{STACK_EFETIVO}</b>
        </span>
        <span className="rounded-md bg-muted px-2.5 py-1 font-medium">
          Check
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-2 rounded-lg border border-primary py-1 pr-1 pl-2.5">
        <span className="text-primary">
          BTN <b className="font-bold">{STACK_EFETIVO}</b>
        </span>
        <span className="rounded-md px-2.5 py-1 text-muted-foreground">
          {agora}
        </span>
      </span>
    </div>
  )
}

function Assento({ pos, opener }: { pos: Pos; opener: Opener }) {
  const [x, y, xm] = POS_TELA[pos]
  const heroi = pos === "BTN"
  const noPote = estaNoPote(pos, opener)
  return (
    <div
      className={cn(
        "absolute left-(--xm) flex flex-col items-center sm:left-(--x)",
        !noPote && "opacity-40"
      )}
      style={
        {
          "--x": `${x}%`,
          "--xm": `${xm}%`,
          top: `${y}%`,
          transform: "translate(-50%, -50%)",
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "grid size-(--s) place-content-center rounded-full border-2 bg-card text-center leading-tight",
          heroi ? "border-primary" : "border-border"
        )}
      >
        <span className="text-[clamp(0.6rem,1.35vw,0.95rem)] font-bold">
          {pos}
        </span>
        <span className="text-[clamp(0.58rem,1.2vw,0.85rem)] text-muted-foreground tabular-nums">
          {stackNaMesa(pos, opener)}
        </span>
      </div>
      {pos === opener && (
        <span className="mt-1 rounded-full bg-secondary px-2 py-0.5 text-[clamp(0.6rem,1.1vw,0.8rem)] font-medium">
          Check
        </span>
      )}
      {heroi && (
        <span
          aria-label="Botão do dealer"
          className="absolute -top-1 -left-1 grid size-5 place-items-center rounded-full bg-white text-[11px] font-bold text-black"
        >
          D
        </span>
      )}
    </div>
  )
}

export function Mesa({
  opener,
  board,
  hero,
  roll,
  mao,
  total,
  sequencia,
}: {
  opener: Opener
  board: string[]
  hero: string[]
  roll: number
  mao: number
  total: number
  sequencia: number
}) {
  const estilo = { "--s": "clamp(44px, 8.2vw, 76px)" } as CSSProperties
  return (
    <div
      className="relative mx-auto aspect-[1.25/1] w-full max-w-[1000px] sm:aspect-[2/1]"
      style={estilo}
      role="group"
      aria-label={`Mesa: herói no BTN contra ${opener}, pote de ${POTE_BB} bb`}
    >
      <div
        className="absolute inset-x-[7%] inset-y-[10%] rounded-[999px] border-2 border-felt-line bg-felt/50"
        aria-hidden="true"
      />

      {ORDEM.map((p) => (
        <Assento key={p} pos={p} opener={opener} />
      ))}

      <div className="absolute top-[46%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <Cards codes={board} size="mesa" />
        <p className="text-center text-[clamp(0.75rem,1.6vw,1.1rem)] leading-tight">
          <span className="text-muted-foreground">Pote </span>
          <b className="tabular-nums">{POTE_BB} bb</b>
        </p>
      </div>

      <div className="absolute top-[84%] left-[calc(50%+var(--s)/2+8px)] -translate-y-1/2">
        <Cards codes={hero} size="mesaHero" />
      </div>

      <span
        className="absolute top-1 left-1 flex items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
        title="Acertos seguidos"
      >
        <Flame className="size-4" aria-hidden="true" />
        {sequencia}
      </span>
      <span
        className="absolute top-1 right-1 flex items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
        title="Progresso do treino"
      >
        <Spade className="size-4" aria-hidden="true" />
        {mao} / {total}
      </span>
      <div
        className="absolute bottom-0 left-0 flex items-center gap-2"
        title="RNG de 1 a 100"
      >
        <Dices className="size-5 text-muted-foreground" aria-hidden="true" />
        <RngPlate
          value={roll}
          className="min-w-0 border-[3px] px-2.5 py-0.5 text-[clamp(1.4rem,3vw,2.2rem)]"
        />
      </div>
    </div>
  )
}
