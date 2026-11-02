import type { CSSProperties } from "react"
import { Cards } from "@/components/poker/cards"
import type { MesaT } from "@/data/teoria/tipos"
import { cn } from "@/lib/utils"

// Mesa no formato do replayer da Prática, para mostrar um spot da teoria:
// quem está na mão, o que cada um fez, o board e a mão do herói.

const ORDEM = ["UTG", "UTG1", "LJ", "HJ", "CO", "BTN", "SB", "BB"]

// Lugares em volta do oval, a partir do assento de baixo.
const LUGARES = ["BTN", "SB", "BB", "UTG", "UTG1", "LJ", "HJ", "CO"]

// [x, y, x no celular], em % da mesa (mesmas posições do replayer).
const TELA: Record<string, [number, number, number]> = {
  BTN: [50, 88, 50],
  SB: [18, 88, 17],
  BB: [6, 50, 7],
  UTG: [26, 12, 24],
  UTG1: [50, 12, 50],
  LJ: [74, 12, 76],
  HJ: [94, 50, 93],
  CO: [82, 88, 91],
}

// O herói senta embaixo e o resto gira junto.
function lugar(pos: string, heroi: string) {
  const k =
    (ORDEM.indexOf(pos) - ORDEM.indexOf(heroi) + ORDEM.length) % ORDEM.length
  return TELA[LUGARES[k]]
}

function corAcao(acao: string) {
  if (/check-raise|raise|abriu|bet|aposta|3bet|shove|all-in/i.test(acao))
    return "bg-b50 text-[#1a0907]"
  if (/call|paga/i.test(acao)) return "bg-sky-300 text-[#06121f]"
  return "bg-secondary text-foreground"
}

export function MesaTeoria({ mesa }: { mesa: MesaT }) {
  const heroi = mesa.assentos.find((a) => a.heroi)?.pos ?? "BTN"
  const estilo = { "--s": "clamp(38px, 6.6vw, 60px)" } as CSSProperties
  return (
    <div className="mx-auto w-full max-w-[820px]" style={estilo}>
      <div
        className="relative aspect-[1.25/1] w-full sm:aspect-[2.2/1]"
        role="group"
        aria-label={`Mesa: herói no ${heroi}, pote de ${mesa.pote} bb`}
      >
        <div
          className="absolute inset-x-[6%] inset-y-[12%] rounded-[999px] border-2 border-felt-line bg-felt/50"
          aria-hidden
        />
        {ORDEM.map((pos) => {
          const a = mesa.assentos.find((s) => s.pos === pos)
          const [x, y, xm] = lugar(pos, heroi)
          const naMao = Boolean(a && !a.fora)
          return (
            <div
              key={pos}
              className={cn(
                "absolute left-(--xm) flex flex-col items-center sm:left-(--x)",
                !naMao && "opacity-30"
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
                  a?.heroi
                    ? "border-primary"
                    : naMao
                      ? "border-b50/70"
                      : "border-border"
                )}
              >
                <span className="text-[clamp(0.6rem,1.3vw,0.9rem)] font-bold">
                  {a?.nome ?? pos}
                </span>
                {a && (
                  <span className="text-[clamp(0.56rem,1.15vw,0.8rem)] text-muted-foreground tabular-nums">
                    {a.stack}
                  </span>
                )}
              </div>
              {a?.acao && (
                <span
                  className={cn(
                    "absolute rounded-full px-2 py-0.5 text-[clamp(0.6rem,1.05vw,0.78rem)] font-bold whitespace-nowrap",
                    y > 70 ? "bottom-full mb-1" : "top-full mt-1",
                    corAcao(a.acao)
                  )}
                >
                  {a.acao}
                </span>
              )}
              {pos === "BTN" && (
                <span
                  aria-label="Botão do dealer"
                  className="absolute top-0 right-full mr-1 grid size-5 place-items-center rounded-full bg-white text-[11px] font-bold text-black"
                >
                  D
                </span>
              )}
            </div>
          )
        })}

        <div className="absolute top-[47%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
          <Cards codes={mesa.board} size="mesa" />
          <p className="text-center text-[clamp(0.75rem,1.6vw,1.05rem)] leading-tight">
            <span className="text-muted-foreground">Pote </span>
            <b className="tabular-nums">{mesa.pote} bb</b>
          </p>
        </div>

        {mesa.heroi && (
          <div className="absolute top-[88%] left-[calc(50%+var(--s)/2+8px)] -translate-y-1/2">
            <Cards codes={mesa.heroi} size="mesaHero" />
          </div>
        )}
      </div>
      {mesa.legenda && (
        <p className="mt-2 text-center text-base text-muted-foreground">
          {mesa.legenda}
        </p>
      )}
    </div>
  )
}
