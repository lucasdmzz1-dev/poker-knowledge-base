import { Fragment, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { AcaoT, BlocoT, MesaT } from "@/data/teoria/tipos"
import { cn } from "@/lib/utils"
import { ITEM } from "./blocos"
import { corAcaoMesa, MesaTeoria } from "./mesa-teoria"

// Situações de mesa uma de cada vez: a mão é reproduzida passo a passo,
// como no replayer, e a decisão do herói só aparece no fim. O passo a passo
// é conteúdo e roda sempre; só os efeitos de transição seguem o motion-safe.

const PAUSA = 1000

function separaGrupo(grupo = "") {
  const i = grupo.indexOf(": ")
  if (i < 0) return { nome: grupo, descricao: "" }
  const resto = grupo.slice(i + 2)
  return {
    nome: grupo.slice(0, i),
    descricao: resto.charAt(0).toUpperCase() + resto.slice(1) + ".",
  }
}

function nomeDe(mesa: MesaT, pos: string) {
  return mesa.assentos.find((a) => a.pos === pos)?.nome ?? pos
}

// Linha do tempo da mão, no estilo da barra de ações do replayer.
function Linha({ mesa, passo }: { mesa: MesaT; passo: number }) {
  const feitos = (mesa.historia ?? []).slice(0, passo)
  return (
    <ol
      className="flex min-h-8 flex-wrap items-center justify-center gap-1.5"
      aria-label="Ações até aqui"
    >
      <li className="px-1 text-xs font-semibold text-muted-foreground uppercase">
        Pré-flop
      </li>
      {feitos.map((e, i) => (
        <Fragment key={i}>
          {e.mostra ? (
            <li className="px-1 text-xs font-semibold text-muted-foreground uppercase motion-safe:animate-in motion-safe:fade-in">
              {e.mostra === "flop" ? "Flop" : "Turn"}
            </li>
          ) : (
            <li className="flex items-center gap-1.5 rounded-md border py-0.5 pr-0.5 pl-2 text-xs motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-1">
              <span className="text-muted-foreground">
                {nomeDe(mesa, e.pos ?? "")}
              </span>
              <span
                className={cn(
                  "rounded px-2 py-0.5 font-semibold",
                  corAcaoMesa(e.acao ?? "")
                )}
              >
                {e.acao}
              </span>
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  )
}

export function SituacoesMesa({
  blocos,
  renderAcoes,
}: {
  blocos: BlocoT[]
  renderAcoes: (acoes: AcaoT[]) => React.ReactNode
}) {
  const [i, setI] = useState(0)
  const mesa = blocos[i].mesa as MesaT
  const total = mesa.historia?.length ?? 0
  const [passo, setPasso] = useState(0)
  const [rodando, setRodando] = useState(true)

  useEffect(() => {
    if (!rodando) return
    if (passo >= total) {
      setRodando(false)
      return
    }
    const t = setTimeout(
      () => setPasso((p) => p + 1),
      passo === 0 ? 500 : PAUSA
    )
    return () => clearTimeout(t)
  }, [passo, rodando, total])

  const reinicia = (k: number) => {
    setI(k)
    setPasso(0)
    setRodando(true)
  }

  const fim = passo >= total
  const b = blocos[i]
  const { descricao } = separaGrupo(b.grupo)

  return (
    <div className="grid gap-6">
      <p className="-mb-3 text-center text-sm font-bold tracking-wide text-muted-foreground uppercase">
        Situação
      </p>
      <ToggleGroup
        type="single"
        value={String(i)}
        onValueChange={(v) => v && reinicia(Number(v))}
        className="flex w-full flex-wrap justify-center gap-2"
        aria-label="Escolha a situação"
      >
        {blocos.map((x, k) => (
          <ToggleGroupItem key={k} value={String(k)} className={ITEM}>
            {k + 1}. {separaGrupo(x.grupo).nome}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="grid gap-4">
        {descricao && (
          <p className="text-center text-lg font-semibold">{descricao}</p>
        )}
        <MesaTeoria mesa={mesa} passo={passo} fim={fim} />
        <Linha mesa={mesa} passo={passo} />
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" onClick={() => reinicia(i)}>
            ▶ VER A MÃO DE NOVO
          </Button>
          {!fim && (
            <Button
              variant="outline"
              onClick={() => {
                setPasso(total)
                setRodando(false)
              }}
            >
              PULAR PARA A DECISÃO
            </Button>
          )}
        </div>
      </div>

      <div aria-live="polite">
        {fim ? (
          <div
            key={i}
            className="grid gap-3 rounded-[18px] border border-primary/30 p-4 motion-safe:animate-in motion-safe:duration-500 motion-safe:fade-in motion-safe:slide-in-from-bottom-2 sm:p-6"
          >
            <p className="text-center text-xl font-bold text-primary uppercase">
              Sua decisão
            </p>
            {mesa.legenda && (
              <p className="text-center text-base text-muted-foreground">
                {mesa.legenda}
              </p>
            )}
            {b.acoes && renderAcoes(b.acoes)}
          </div>
        ) : (
          <p className="text-center text-base text-muted-foreground">
            A decisão aparece quando a ação chegar em você.
          </p>
        )}
      </div>
    </div>
  )
}
