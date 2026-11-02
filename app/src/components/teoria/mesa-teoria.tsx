import type { CSSProperties } from "react"
import { Cards } from "@/components/poker/cards"
import type { HistoriaT, MesaT } from "@/data/teoria/tipos"
import { cn } from "@/lib/utils"

// Mesa no formato do replayer da Prática, para mostrar um spot da teoria:
// quem está na mão, o que cada um fez, o board e a mão do herói.
// Com `historia`, a mão é mostrada até o passo indicado em `passo`.

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

export function corAcaoMesa(acao: string) {
  if (/fold/i.test(acao)) return "bg-muted text-muted-foreground"
  if (/sua vez/i.test(acao)) return "bg-primary text-primary-foreground"
  if (/check-raise|raise|abre|bet|aposta|3bet|shove|all-in/i.test(acao))
    return "bg-b50 text-[#1a0907]"
  if (/call|paga/i.test(acao)) return "bg-sky-300 text-[#06121f]"
  return "bg-secondary text-foreground"
}

// Estado da mesa depois de `passo` passos do histórico.
export function estadoDaMao(mesa: MesaT, passo: number) {
  const h: HistoriaT[] = mesa.historia ?? []
  const feitos = h.slice(0, passo)
  let cartas = mesa.historia ? 0 : mesa.board.length
  // Antes da primeira ação o pote tem só os blinds.
  let pote = mesa.historia ? 1.5 : mesa.pote
  let inicioStreet = 0
  feitos.forEach((e, i) => {
    if (e.mostra === "flop") cartas = 3
    if (e.mostra === "turn") cartas = 4
    if (e.mostra) inicioStreet = i + 1
    if (e.pote !== undefined) pote = e.pote
  })
  // Cada assento mostra só a última ação da street atual.
  const acoes: Record<string, string> = {}
  for (const e of feitos.slice(inicioStreet)) {
    if (e.pos && e.acao) acoes[e.pos] = e.acao
  }
  const ultimo = feitos[feitos.length - 1]
  return { cartas, pote, acoes, vez: ultimo?.pos }
}

export function MesaTeoria({
  mesa,
  passo,
  fim = false,
}: {
  mesa: MesaT
  passo?: number
  // No fim do replay, o herói recebe a marca de "Sua vez".
  fim?: boolean
}) {
  const heroi = mesa.assentos.find((a) => a.heroi)?.pos ?? "BTN"
  const estado = estadoDaMao(mesa, passo ?? mesa.historia?.length ?? 0)
  const estilo = { "--s": "clamp(38px, 6.6vw, 60px)" } as CSSProperties
  const board = mesa.board.slice(0, estado.cartas)
  return (
    <div className="mx-auto w-full max-w-[820px]" style={estilo}>
      <div
        className="relative aspect-[1.25/1] w-full sm:aspect-[2.2/1]"
        role="group"
        aria-label={`Mesa: herói no ${heroi}, pote de ${estado.pote} bb`}
      >
        <div
          className="absolute inset-x-[6%] inset-y-[12%] rounded-[999px] border-2 border-felt-line bg-felt/50"
          aria-hidden
        />
        {ORDEM.map((pos) => {
          const a = mesa.assentos.find((s) => s.pos === pos)
          const [x, y, xm] = lugar(pos, heroi)
          const naMao = Boolean(a && !a.fora)
          const acao = mesa.historia
            ? fim && a?.heroi
              ? "Sua vez"
              : estado.acoes[pos]
            : a?.acao
          const agindo = Boolean(mesa.historia) && estado.vez === pos && !fim
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
                  "grid size-(--s) place-content-center rounded-full border-2 bg-card text-center leading-tight transition-shadow duration-300",
                  a?.heroi
                    ? "border-primary"
                    : naMao
                      ? "border-b50/70"
                      : "border-border",
                  agindo && "ring-4 ring-amber-300/60"
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
              {acao && (
                <span
                  key={acao}
                  className={cn(
                    "absolute rounded-full px-2 py-0.5 text-[clamp(0.6rem,1.05vw,0.78rem)] font-bold whitespace-nowrap motion-safe:animate-in motion-safe:duration-300 motion-safe:zoom-in-95 motion-safe:fade-in",
                    y > 70 ? "bottom-full mb-1" : "top-full mt-1",
                    corAcaoMesa(acao)
                  )}
                >
                  {acao}
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
          {board.length > 0 ? (
            <div
              key={board.length}
              className="motion-safe:animate-in motion-safe:duration-300 motion-safe:fade-in motion-safe:slide-in-from-top-2"
            >
              <Cards codes={board} size="mesa" />
            </div>
          ) : (
            <span className="text-[clamp(0.75rem,1.6vw,1rem)] font-semibold text-muted-foreground uppercase">
              Pré-flop
            </span>
          )}
          <p className="text-center text-[clamp(0.75rem,1.6vw,1.05rem)] leading-tight">
            <span className="text-muted-foreground">Pote </span>
            <b className="tabular-nums">
              {String(estado.pote).replace(".", ",")} bb
            </b>
          </p>
        </div>

        {mesa.heroi && (
          <div className="absolute top-[88%] left-[calc(50%+var(--s)/2+8px)] -translate-y-1/2">
            <Cards codes={mesa.heroi} size="mesaHero" />
          </div>
        )}
      </div>
    </div>
  )
}
