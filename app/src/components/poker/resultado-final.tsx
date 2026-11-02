import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ItemSessao } from "@/lib/poker"
import { cn } from "@/lib/utils"

// Nomes de tipo em minúsculas no meio da frase, menos as siglas (A HIGH, BBX, CO, EP), que ficam em maiúsculas.
export function nomeNaFrase(nome: string): string {
  return nome
    .split(" ")
    .map((p) => (/^[A-Z][A-Z0-9-]*$/.test(p) ? p : p.toLowerCase()))
    .join(" ")
}

export interface Motivo {
  nome: string
  n: number
}

// Tela final padrão dos temas da Prática: nota, o tipo que mais errou, o desempenho
// por tipo e os tipos de erro, com o botão de levar a sessão para a Análise.
export function ResultadoFinal({
  itens,
  tituloTipos,
  motivosDe,
  levada,
  onLevar,
  onNovo,
}: {
  itens: ItemSessao[]
  tituloTipos: string
  motivosDe: (erros: ItemSessao[]) => Motivo[]
  levada: boolean
  onLevar: () => void
  onNovo: () => void
}) {
  const acertos = itens.filter((x) => x.ok).length
  const pct = Math.round((acertos / itens.length) * 100)
  const tipos = [...new Set(itens.map((x) => x.tipo))]
    .map((t) => {
      const d = itens.filter((x) => x.tipo === t)
      return {
        nome: t,
        total: d.length,
        certos: d.filter((x) => x.ok).length,
      }
    })
    .sort(
      (a, b) => a.certos / a.total - b.certos / b.total || b.total - a.total
    )
  const pior = tipos.find((x) => x.certos < x.total)
  const erros = itens.filter((x) => !x.ok)
  const motivos = motivosDe(erros).filter((m) => m.n > 0)
  return (
    <main>
      <PageHeader title="Treino concluído" />
      <div className="enter mx-auto grid max-w-[620px] justify-items-center gap-4 px-5 pb-20 text-center">
        <div className="text-[clamp(2.4rem,6vw,3.4rem)] font-bold">
          {acertos} de {itens.length}{" "}
          <span className="text-2xl text-muted-foreground">{pct}%</span>
        </div>
        <p className="text-lg text-muted-foreground">
          {pior ? (
            <>
              Você mais errou em{" "}
              <strong className="text-foreground">
                {nomeNaFrase(pior.nome)}
              </strong>
              : {pior.total - pior.certos} erro
              {pior.total - pior.certos > 1 ? "s" : ""} em {pior.total} mãos.
            </>
          ) : (
            "Nenhum erro nesta sessão."
          )}
        </p>
        <Card className="grid w-full gap-3 rounded-2xl p-5 text-left">
          <h3 className="font-bold">{tituloTipos}</h3>
          {tipos.map((x) => {
            const p = Math.round((x.certos / x.total) * 100)
            return (
              <div key={x.nome} className="grid gap-1">
                <div className="flex justify-between gap-3">
                  <span>{x.nome}</span>
                  <span className="text-muted-foreground">
                    {x.certos} de {x.total} ·{" "}
                    <strong className="text-foreground">{p}%</strong>
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      p >= 70 ? "bg-primary" : "bg-destructive"
                    )}
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            )
          })}
          {motivos.length > 0 && (
            <>
              <h3 className="mt-2 font-bold">Tipo de erro</h3>
              {motivos.map((m) => (
                <div key={m.nome} className="flex justify-between gap-3">
                  <span>{m.nome}</span>
                  <strong>{m.n}</strong>
                </div>
              ))}
            </>
          )}
        </Card>
        <p className="text-lg text-muted-foreground">
          Quer levar esta sessão para a Análise? Sessões de teste ficam de fora.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            className="h-12 px-6 font-bold"
            onClick={onLevar}
            disabled={levada}
          >
            Levar para a Análise
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 font-bold"
            onClick={onNovo}
          >
            Novo treino
          </Button>
        </div>
        <p role="status" className="text-muted-foreground">
          {levada ? "Sessão enviada para a Análise." : ""}
        </p>
      </div>
    </main>
  )
}
