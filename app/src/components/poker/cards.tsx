import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

const SUIT = { s: "♠", h: "♥", d: "♦", c: "♣" } as const
const NOME = { s: "espadas", h: "copas", d: "ouros", c: "paus" } as const
const BG = {
  s: "bg-[#34434e]",
  h: "bg-[#c23b32]",
  d: "bg-[#2a6fdb]",
  c: "bg-[#23a455]",
} as const

const WIDTH = {
  sm: "34px",
  md: "52px",
  lg: "clamp(54px, 15vw, 72px)",
  xl: "clamp(60px, 18vw, 88px)",
} as const

type SuitKey = keyof typeof SUIT

export function PlayingCard({ code, size = "md" }: { code: string; size?: keyof typeof WIDTH }) {
  const rank = code.charAt(0)
  const suit = code.charAt(1) as SuitKey
  const style = { "--w": WIDTH[size], width: "var(--w)", aspectRatio: "5 / 7" } as CSSProperties
  return (
    <span
      role="img"
      aria-label={`${rank} de ${NOME[suit]}`}
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-[10px] border border-white/20 leading-none font-bold text-white",
        BG[suit]
      )}
      style={style}
    >
      <span style={{ fontSize: "calc(var(--w) * 0.5)" }}>{rank}</span>
      <span aria-hidden="true" style={{ fontSize: "calc(var(--w) * 0.3)", marginTop: "calc(var(--w) * 0.04)" }}>
        {SUIT[suit]}
      </span>
    </span>
  )
}

export function Cards({ codes, size = "md", className }: { codes: string[]; size?: keyof typeof WIDTH; className?: string }) {
  return (
    <div className={cn("inline-flex gap-2", className)}>
      {codes.map((c) => (
        <PlayingCard key={c} code={c} size={size} />
      ))}
    </div>
  )
}

export function RngStrip({ bucket, rng, size }: { bucket: number; rng?: number; size?: string }) {
  const cells = Array.from({ length: 100 }, (_, i) => i + 1)
  return (
    <div className="mt-4">
      <div
        className="grid h-5 gap-px"
        style={{ gridTemplateColumns: "repeat(100, 1fr)" }}
        role="img"
        aria-label={`De 1 a ${bucket} aposta ${size ?? ""}, de ${bucket + 1} a 100 dá check`}
      >
        {cells.map((n) => (
          <i
            key={n}
            className={cn(
              "block rounded-[1px]",
              n <= bucket ? "bg-b50" : "bg-check",
              rng === n && "relative z-10 outline-2 outline-offset-1 outline-white"
            )}
          />
        ))}
      </div>
      <div className="text-muted-foreground mt-2 flex flex-wrap gap-4 text-sm">
        <span className="inline-flex items-center gap-2">
          <b className="bg-b50 inline-block size-2.5 rounded-sm" />
          1 a {bucket}: aposta {size}
        </span>
        {bucket < 100 && (
          <span className="inline-flex items-center gap-2">
            <b className="bg-check inline-block size-2.5 rounded-sm" />
            {bucket + 1} a 100: check
          </span>
        )}
      </div>
    </div>
  )
}
