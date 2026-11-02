import { useEffect, useState, type CSSProperties } from "react"
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
  mesa: "clamp(30px, 6vw, 58px)",
  mesaHero: "clamp(30px, 5.6vw, 54px)",
} as const

type SuitKey = keyof typeof SUIT

export function PlayingCard({
  code,
  size = "md",
}: {
  code: string
  size?: keyof typeof WIDTH
}) {
  const rank = code.charAt(0)
  const suit = code.charAt(1) as SuitKey
  const style = {
    "--w": WIDTH[size],
    width: "var(--w)",
    aspectRatio: "5 / 7",
  } as CSSProperties
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
      <span
        aria-hidden="true"
        style={{
          fontSize: "calc(var(--w) * 0.3)",
          marginTop: "calc(var(--w) * 0.04)",
        }}
      >
        {SUIT[suit]}
      </span>
    </span>
  )
}

export function Cards({
  codes,
  size = "md",
  className,
}: {
  codes: string[]
  size?: keyof typeof WIDTH
  className?: string
}) {
  return (
    <div className={cn("inline-flex gap-2", className)}>
      {codes.map((c) => (
        <PlayingCard key={c} code={c} size={size} />
      ))}
    </div>
  )
}

// Barra do treino: o RNG vai enchendo de 1 até o número sorteado. Até o bucket é
// aposta, depois é check. Cores neutras para não lembrar acerto ou erro.
function RngBarra({
  bucket,
  rng,
  size,
}: {
  bucket: number
  rng: number
  size?: string
}) {
  const [cheio, setCheio] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setCheio(true))
    return () => cancelAnimationFrame(t)
  }, [])
  const rotulo =
    "flex h-full items-center justify-center overflow-hidden px-3 text-sm font-bold whitespace-nowrap text-[#14121f] not-italic"
  const segmentos = (
    <>
      <i
        className={cn(rotulo, "rounded-full bg-rng-bet")}
        style={{ width: `calc(${bucket}% - 2px)` }}
      >
        1 a {bucket} · aposta {size}
      </i>
      {bucket < 100 && (
        <i className={cn(rotulo, "flex-1 rounded-full bg-check")}>
          {bucket + 1} a 100 · check
        </i>
      )}
    </>
  )
  return (
    <div className="mt-5">
      <div
        className="relative"
        role="img"
        aria-label={`RNG ${rng}. De 1 a ${bucket} aposta ${size ?? ""}, de ${bucket + 1} a 100 dá check`}
      >
        <div className="flex h-10 gap-1 opacity-25">{segmentos}</div>
        <div
          className="absolute inset-0 flex h-10 gap-1 transition-[clip-path] duration-[1100ms] ease-out motion-reduce:transition-none"
          style={{
            clipPath: cheio
              ? `inset(0 ${100 - rng}% 0 0)`
              : "inset(0 100% 0 0)",
          }}
        >
          {segmentos}
        </div>
        <span
          className="absolute -top-1.5 h-[52px] w-0.5 -translate-x-1/2 rounded bg-white transition-[left] duration-[1100ms] ease-out motion-reduce:transition-none"
          style={{ left: cheio ? `${rng}%` : "0%" }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export function RngStrip({
  bucket,
  rng,
  size,
}: {
  bucket: number
  rng?: number
  size?: string
}) {
  if (rng !== undefined)
    return <RngBarra bucket={bucket} rng={rng} size={size} />
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
              rng === n &&
                "relative z-10 outline-2 outline-offset-1 outline-white"
            )}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <b className="inline-block size-2.5 rounded-sm bg-b50" />1 a {bucket}:
          aposta {size}
        </span>
        {bucket < 100 && (
          <span className="inline-flex items-center gap-2">
            <b className="inline-block size-2.5 rounded-sm bg-check" />
            {bucket + 1} a 100: check
          </span>
        )}
      </div>
    </div>
  )
}

export function RngPlate({
  value,
  className,
}: {
  value: number
  className?: string
}) {
  return (
    <div
      aria-label={`RNG ${value}`}
      className={cn(
        "min-w-[104px] rounded-[10px] border-4 border-rng-line bg-white px-4 py-2 text-center text-[2.6rem] leading-[1.1] font-bold text-rng-ink tabular-nums",
        className
      )}
    >
      {value}
    </div>
  )
}
