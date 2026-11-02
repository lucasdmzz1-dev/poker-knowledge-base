import { useMemo, useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  LINHAS_ICM,
  SPOTS_ICM,
  type SolverMedia,
  type SpotIcm,
} from "@/data/teoria/icm-ranges"
import { cn } from "@/lib/utils"
import { ITEM } from "./blocos"

// Cores do solver: as mesmas dos frames da aula.
const COR = {
  allin: "#7B3FB0",
  raise: "#E8730C",
  call: "#4CC15C",
  fold: "#2A8FD4",
}

const LETRAS = "AKQJT98765432"

type Celula = [number, number, number, number] // raise, all-in, call, fold

function nomeMao(i: number, j: number) {
  if (i === j) return LETRAS[i] + LETRAS[j]
  return j > i ? `${LETRAS[i]}${LETRAS[j]}s` : `${LETRAS[j]}${LETRAS[i]}o`
}

function decodifica(s: string): Celula[] {
  const out: Celula[] = []
  for (let k = 0; k < 169; k++) {
    const r = Number(s[3 * k]) / 9
    const a = Number(s[3 * k + 1]) / 9
    const c = Number(s[3 * k + 2]) / 9
    out.push([r, a, c, Math.max(0, 1 - r - a - c)])
  }
  return out
}

function gradiente(x: Celula) {
  const a = x[1] * 100
  const r = x[0] * 100
  const c = x[2] * 100
  const e1 = a
  const e2 = a + r
  const e3 = a + r + c
  return `linear-gradient(90deg,${COR.allin} 0 ${e1}%,${COR.raise} ${e1}% ${e2}%,${COR.call} ${e2}% ${e3}%,${COR.fold} ${e3}% 100%)`
}

function dominante(x: Celula) {
  let m = 0
  let k = 0
  for (let i = 0; i < 4; i++) {
    if (x[i] > m) {
      m = x[i]
      k = i
    }
  }
  return k
}

const virgula = (n: number) => String(n).replace(".", ",")

type Marca = "entra" | "sai" | "muda" | undefined

const BORDA: Record<NonNullable<Marca>, string> = {
  entra: "shadow-[inset_0_0_0_2px_#2A78D6]",
  sai: "shadow-[inset_0_0_0_2px_#E34948]",
  muda: "shadow-[inset_0_0_0_2px_#F0B323]",
}

function Grade({
  celulas,
  marcas,
}: {
  celulas: Celula[]
  marcas: Marca[] | null
}) {
  return (
    <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-0.5">
      {celulas.map((c, k) => {
        const i = Math.floor(k / 13)
        const j = k % 13
        const m = marcas?.[k]
        return (
          <div
            key={k}
            style={{ background: gradiente(c) }}
            className={cn(
              "flex h-7 items-center justify-center rounded-[3px] text-[9px] font-medium text-white [text-shadow:0_0_2px_rgba(0,0,0,.9),0_0_2px_rgba(0,0,0,.9)] sm:h-9 sm:text-[11px]",
              m && "relative z-10",
              m && BORDA[m]
            )}
          >
            {nomeMao(i, j)}
          </div>
        )
      })}
    </div>
  )
}

function Pilulas({ spot }: { spot: SpotIcm }) {
  const L = spot.lab
  const itens: [keyof typeof COR, string][] = [
    ["allin", L[1]],
    ["raise", L[0]],
    ["call", L[2]],
    ["fold", L[3]],
  ]
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
      {itens
        .filter(([k]) => !(spot.open && (k === "allin" || k === "call")))
        .map(([k, nome]) => (
          <span key={k} className="flex items-center gap-1.5 text-sm">
            <i
              className="size-3 rounded-[3px]"
              style={{ background: COR[k] }}
              aria-hidden
            />
            {nome}
          </span>
        ))}
    </div>
  )
}

function Totais({ spot, fase }: { spot: SpotIcm; fase: "m25" | "m16" }) {
  const m = spot[fase]
  const L = spot.lab
  const itens: [keyof typeof COR, string, number][] = [
    ["raise", L[0], m.raise],
    ["allin", L[1], m.allin],
    ["call", L[2], m.call],
    ["fold", L[3], m.fold],
  ]
  return (
    <div className="flex flex-wrap gap-1.5">
      {itens
        .filter(([k]) => !(spot.open && (k === "allin" || k === "call")))
        .filter(([, , v]) => v > 0)
        .map(([k, nome, v]) => (
          <span
            key={k}
            className="rounded-md px-2 py-0.5 text-sm font-bold text-white [text-shadow:0_0_2px_rgba(0,0,0,.6)]"
            style={{ background: COR[k] }}
          >
            {nome} {virgula(v)}%
          </span>
        ))}
    </div>
  )
}

function Mudancas({ spot }: { spot: SpotIcm }) {
  const L = spot.lab
  const todas: [keyof SolverMedia, string][] = [
    ["raise", L[0]],
    ["allin", L[1]],
    ["call", L[2]],
    ["fold", L[3]],
  ]
  const linhas = todas
    .filter(([k]) => !(spot.open && k !== "raise" && k !== "fold"))
    .map(([k, nome]) => ({ k, nome, a: spot.m25[k], b: spot.m16[k] }))
    .filter((l) => l.a !== 0 || l.b !== 0)

  return (
    <div className="overflow-hidden rounded-[14px] border">
      <table className="w-full text-base">
        <thead>
          <tr className="bg-secondary/60 text-left text-sm text-muted-foreground uppercase">
            <th className="px-4 py-2.5 font-semibold">Ação</th>
            <th className="px-4 py-2.5 text-right font-semibold">25% left</th>
            <th className="px-4 py-2.5 text-right font-semibold">16% left</th>
            <th className="px-4 py-2.5 text-right font-semibold">Mudança</th>
          </tr>
        </thead>
        <tbody>
          {linhas.map(({ k, nome, a, b }) => {
            const d = Math.round((b - a) * 10) / 10
            return (
              <tr key={k} className="border-t">
                <td className="px-4 py-2.5 font-bold">{nome}</td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {virgula(a)}%
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {virgula(b)}%
                </td>
                <td
                  className={cn(
                    "px-4 py-2.5 text-right font-bold tabular-nums",
                    d > 0 && "text-primary",
                    d < 0 && "text-b50"
                  )}
                >
                  {d > 0 ? "+" : d < 0 ? "−" : ""}
                  {virgula(Math.abs(d))}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function ListaMaos({
  titulo,
  maos,
  cor,
}: {
  titulo: string
  maos: string[]
  cor: string
}) {
  if (maos.length === 0) return null
  return (
    <div className="rounded-[14px] border p-4">
      <p className={cn("mb-2.5 text-base font-bold uppercase", cor)}>
        {titulo} ({maos.length})
      </p>
      <div className="flex flex-wrap gap-1.5">
        {maos.slice(0, 60).map((m) => (
          <span
            key={m}
            className="rounded-md bg-secondary px-2 py-0.5 text-sm font-medium"
          >
            {m}
          </span>
        ))}
        {maos.length > 60 && (
          <span className="px-1 py-0.5 text-sm text-muted-foreground">
            e mais {maos.length - 60}
          </span>
        )}
      </div>
    </div>
  )
}

function Botao({
  ativo,
  onClick,
  children,
  disabled,
}: {
  ativo: boolean
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={ativo}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-semibold uppercase transition-colors duration-150",
        ativo
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-card hover:border-foreground/40",
        disabled && "cursor-default opacity-40 hover:border-border"
      )}
    >
      {children}
    </button>
  )
}

// Compara o mesmo spot com 25% e com 16% do field left, direto dos frames da aula.
export function IcmRanges() {
  const [chave, setChave] = useState("LJ")
  const [destaque, setDestaque] = useState(false)
  const spot = SPOTS_ICM[chave]

  const { a, b, marcas, entram, saem, mudam } = useMemo(() => {
    const a = decodifica(spot.g25)
    const b = decodifica(spot.g16)
    const marcas: Marca[] = []
    const entram: string[] = []
    const saem: string[] = []
    const mudam: string[] = []
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        const k = i * 13 + j
        const x = a[k]
        const y = b[k]
        const h = nomeMao(i, j)
        const px = x[3] < 0.5
        const py = y[3] < 0.5
        let m: Marca
        if (!px && py) {
          m = "entra"
          entram.push(h)
        } else if (px && !py) {
          m = "sai"
          saem.push(h)
        } else if (
          px &&
          py &&
          dominante(x) !== dominante(y) &&
          Math.max(
            Math.abs(x[0] - y[0]),
            Math.abs(x[1] - y[1]),
            Math.abs(x[2] - y[2])
          ) >= 0.5
        ) {
          m = "muda"
          mudam.push(
            `${h} (${spot.lab[dominante(x)]} → ${spot.lab[dominante(y)]})`
          )
        }
        marcas.push(m)
      }
    }
    return { a, b, marcas, entram, saem, mudam }
  }, [spot])

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        {LINHAS_ICM.map((l) => (
          <div key={l.nome} className="grid gap-2">
            <p className="text-base">
              <b>{l.nome}</b>
              <span className="text-muted-foreground"> · {l.stack}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {l.abre[0] ? (
                <Botao
                  ativo={chave === l.abre[0]}
                  onClick={() => setChave(l.abre[0])}
                >
                  {l.abre[1]}
                </Botao>
              ) : (
                <Botao ativo={false} disabled onClick={() => {}}>
                  {l.abre[1]}
                </Botao>
              )}
              <span className="text-muted-foreground" aria-hidden>
                →
              </span>
              {l.reage[0] ? (
                <Botao
                  ativo={chave === l.reage[0]}
                  onClick={() => setChave(l.reage[0]!)}
                >
                  {l.reage[1]}
                </Botao>
              ) : (
                <Botao ativo={false} disabled onClick={() => {}}>
                  {l.reage[1]} (sem dados)
                </Botao>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 rounded-[22px] border bg-card p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-lg font-bold">{spot.title}</p>
          <ToggleGroup
            type="single"
            value={destaque ? "on" : "off"}
            onValueChange={(v) => v && setDestaque(v === "on")}
            aria-label="Destacar as diferenças"
            className="flex gap-2"
          >
            <ToggleGroupItem value="off" className={ITEM}>
              RANGES
            </ToggleGroupItem>
            <ToggleGroupItem value="on" className={ITEM}>
              DIFERENÇAS
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <p className="max-w-[70ch] text-base text-muted-foreground">
          {spot.ctx}
        </p>
        <Pilulas spot={spot} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <b className="text-xl text-sky-300">25% left</b>
              <Totais spot={spot} fase="m25" />
            </div>
            <Grade celulas={a} marcas={destaque ? marcas : null} />
          </div>
          <div className="grid gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <b className="text-xl text-amber-300">16% left</b>
              <Totais spot={spot} fase="m16" />
            </div>
            <Grade celulas={b} marcas={destaque ? marcas : null} />
          </div>
        </div>
        {destaque && (
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            <span className="flex items-center gap-1.5">
              <i className="size-3 rounded-[3px] bg-[#2A78D6]" aria-hidden />
              Entra com 16%
            </span>
            <span className="flex items-center gap-1.5">
              <i className="size-3 rounded-[3px] bg-[#E34948]" aria-hidden />
              Sai com 16%
            </span>
            <span className="flex items-center gap-1.5">
              <i className="size-3 rounded-[3px] bg-[#F0B323]" aria-hidden />
              Muda de ação
            </span>
          </div>
        )}
      </div>

      <Mudancas spot={spot} />

      <div className="grid gap-3 md:grid-cols-2">
        <ListaMaos
          titulo="Entram com 16% left"
          maos={entram}
          cor="text-primary"
        />
        <ListaMaos titulo="Saem com 16% left" maos={saem} cor="text-b50" />
        <ListaMaos titulo="Mudam de ação" maos={mudam} cor="text-amber-300" />
      </div>
      {entram.length + saem.length + mudam.length === 0 && (
        <p className="text-base text-muted-foreground">
          Nenhuma mão entra, sai ou muda de ação por completo. A diferença está
          só na frequência.
        </p>
      )}
    </div>
  )
}
