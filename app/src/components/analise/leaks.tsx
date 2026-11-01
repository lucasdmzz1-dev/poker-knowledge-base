import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PrintsDoMes } from "@/components/analise/prints"
import { Secao, CAMPO } from "@/components/analise/secao"
import {
  CHAVES,
  desvio,
  fmt,
  lerLeaks,
  novoId,
  rotuloMes,
  type Leak,
} from "@/lib/analise"
import { writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

function mesesDe(leaks: Leak[]): string[] {
  return [...new Set(leaks.map((l) => l.mes))].sort().reverse()
}

export function useLeaks() {
  const [leaks, setLeaks] = useState<Leak[]>(lerLeaks)
  const salvar = (novos: Leak[]) => {
    setLeaks(novos)
    writeJSON(CHAVES.leaks, novos)
  }
  return { leaks, salvar }
}

export function LeaksDoMes({
  leaks,
  salvar,
}: {
  leaks: Leak[]
  salvar: (l: Leak[]) => void
}) {
  const meses = mesesDe(leaks)
  const [escolhido, setEscolhido] = useState<string | null>(null)
  const mes =
    escolhido && meses.includes(escolhido) ? escolhido : (meses[0] ?? "")
  const doMes = useMemo(
    () =>
      leaks
        .filter((l) => l.mes === mes)
        .sort((a, b) => Math.abs(desvio(b)) - Math.abs(desvio(a))),
    [leaks, mes]
  )
  const [aberto, setAberto] = useState(false)
  const [erro, setErro] = useState("")

  function adicionar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const real = Number(String(f.get("real")).replace(",", "."))
    const solver = Number(String(f.get("solver")).replace(",", "."))
    const spot = String(f.get("spot")).trim()
    const stat = String(f.get("stat")).trim()
    const mesNovo = String(f.get("mes"))
    if (
      !spot ||
      !stat ||
      !mesNovo ||
      Number.isNaN(real) ||
      Number.isNaN(solver)
    ) {
      setErro("Preencha o mês, o spot, a estatística e os dois valores.")
      return
    }
    setErro("")
    salvar([
      ...leaks,
      {
        id: novoId(),
        mes: mesNovo,
        spot,
        stat,
        real,
        solver,
        fazer: String(f.get("fazer")).trim(),
      },
    ])
    setEscolhido(mesNovo)
    setAberto(false)
    e.currentTarget.reset()
  }

  return (
    <Secao
      titulo="Leaks do mês"
      lead="Os spots em que o seu número mais foge do solver, do maior desvio para o menor. Os três primeiros são onde atacar."
    >
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {meses.length > 0 && (
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Mês
            <select
              className={cn(CAMPO, "w-auto")}
              value={mes}
              onChange={(e) => setEscolhido(e.target.value)}
            >
              {meses.map((m) => (
                <option key={m} value={m}>
                  {rotuloMes(m)}
                </option>
              ))}
            </select>
          </label>
        )}
        <Button
          variant="outline"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
        >
          {aberto ? "Fechar" : "Adicionar leak"}
        </Button>
      </div>

      {aberto && (
        <Card className="mb-5 rounded-[18px] p-5">
          <form onSubmit={adicionar} className="grid gap-3 md:grid-cols-3">
            <label className="grid gap-1 text-sm">
              Mês
              <input
                name="mes"
                type="month"
                defaultValue={mes || new Date().toISOString().slice(0, 7)}
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm">
              Spot
              <input
                name="spot"
                placeholder="BTN contra CO"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm">
              Estatística
              <input name="stat" placeholder="Fold" className={CAMPO} />
            </label>
            <label className="grid gap-1 text-sm">
              Seu valor (%)
              <input
                name="real"
                inputMode="decimal"
                placeholder="80,0"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm">
              Solver (%)
              <input
                name="solver"
                inputMode="decimal"
                placeholder="76,3"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm md:col-span-3">
              O que fazer
              <input
                name="fazer"
                placeholder="Parar de foldar A9o e KTo"
                className={CAMPO}
              />
            </label>
            <p
              role="alert"
              className="min-h-5 text-sm text-destructive md:col-span-3"
            >
              {erro}
            </p>
            <div className="md:col-span-3">
              <Button type="submit" className="px-5 font-bold">
                Salvar leak
              </Button>
            </div>
          </form>
        </Card>
      )}

      <PrintsDoMes mes={mes || new Date().toISOString().slice(0, 7)} />

      {doMes.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Nenhum leak neste mês ainda. Use "Adicionar leak" com os números do
          mês.
        </div>
      ) : (
        <ul className="grid gap-3">
          {doMes.map((l, i) => {
            const d = desvio(l)
            return (
              <li key={l.id}>
                <Card className="rounded-[18px] p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold">
                      {l.spot} · {l.stat}
                      {i < 3 && (
                        <span className="ml-2 rounded-full bg-primary px-2.5 py-0.5 align-middle text-xs font-bold text-primary-foreground">
                          Atacar
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground tabular-nums">
                      Você <b className="text-foreground">{fmt(l.real)}%</b> ·
                      Solver <b className="text-foreground">{fmt(l.solver)}%</b>{" "}
                      ·{" "}
                      <b className={d > 0 ? "text-b50" : "text-check"}>
                        {d > 0 ? "+" : ""}
                        {fmt(d)} pts
                      </b>
                    </p>
                  </div>
                  {l.fazer && <p className="mt-2 max-w-[70ch]">{l.fazer}</p>}
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <span>{l.fonte ?? "Registrado por você"}</span>
                    <button
                      type="button"
                      className="cursor-pointer underline-offset-4 hover:text-foreground hover:underline"
                      onClick={() => salvar(leaks.filter((x) => x.id !== l.id))}
                    >
                      Remover
                    </button>
                  </div>
                </Card>
              </li>
            )
          })}
        </ul>
      )}
    </Secao>
  )
}

export function Comparacao({ leaks }: { leaks: Leak[] }) {
  const meses = mesesDe(leaks)
  const [a, setA] = useState<string | null>(null)
  const [b, setB] = useState<string | null>(null)
  const atual = b && meses.includes(b) ? b : (meses[0] ?? "")
  const anterior =
    a && meses.includes(a) && a !== atual
      ? a
      : (meses.find((m) => m !== atual) ?? "")

  const linhas = useMemo(() => {
    const chave = (l: Leak) => `${l.spot}|${l.stat}`
    const mapa = new Map<
      string,
      { spot: string; stat: string; antes?: Leak; agora?: Leak }
    >()
    for (const l of leaks) {
      if (l.mes !== atual && l.mes !== anterior) continue
      const item = mapa.get(chave(l)) ?? { spot: l.spot, stat: l.stat }
      if (l.mes === anterior) item.antes = l
      else item.agora = l
      mapa.set(chave(l), item)
    }
    return [...mapa.values()]
  }, [leaks, atual, anterior])

  if (meses.length < 2) {
    return (
      <Secao
        titulo="Comparação mês a mês"
        lead="Compara o desvio de cada spot entre dois meses e diz se melhorou, piorou ou ficou igual."
      >
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Falta um segundo mês. Adicione os leaks do mês seguinte com o mesmo
          spot e a mesma estatística, e a comparação aparece aqui.
        </div>
      </Secao>
    )
  }

  return (
    <Secao
      titulo="Comparação mês a mês"
      lead="Menos desvio do solver é melhor. A variação mostra quanto o desvio mudou, em pontos percentuais."
    >
      <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <label className="flex items-center gap-2">
          Antes
          <select
            className={cn(CAMPO, "w-auto")}
            value={anterior}
            onChange={(e) => setA(e.target.value)}
          >
            {meses
              .filter((m) => m !== atual)
              .map((m) => (
                <option key={m} value={m}>
                  {rotuloMes(m)}
                </option>
              ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          Agora
          <select
            className={cn(CAMPO, "w-auto")}
            value={atual}
            onChange={(e) => setB(e.target.value)}
          >
            {meses.map((m) => (
              <option key={m} value={m}>
                {rotuloMes(m)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead className="bg-card text-sm text-muted-foreground">
            <tr>
              <th className="p-3 font-medium">Spot</th>
              <th className="p-3 font-medium">Antes</th>
              <th className="p-3 font-medium">Agora</th>
              <th className="p-3 font-medium">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((r) => {
              const dA = r.antes ? desvio(r.antes) : null
              const dB = r.agora ? desvio(r.agora) : null
              let rotulo = "Sem os dois meses"
              let cor = "text-muted-foreground"
              if (dA !== null && dB !== null) {
                const delta = Math.abs(dB) - Math.abs(dA)
                if (delta < -0.05)
                  [rotulo, cor] = [
                    `Melhorou ${fmt(-delta)} pts`,
                    "text-primary",
                  ]
                else if (delta > 0.05)
                  [rotulo, cor] = [
                    `Piorou ${fmt(delta)} pts`,
                    "text-destructive",
                  ]
                else [rotulo, cor] = ["Igual", "text-muted-foreground"]
              }
              return (
                <tr key={`${r.spot}|${r.stat}`} className="border-t">
                  <td className="p-3 font-medium">
                    {r.spot} · {r.stat}
                  </td>
                  <td className="p-3 tabular-nums">
                    {dA === null ? "–" : `${dA > 0 ? "+" : ""}${fmt(dA)}`}
                  </td>
                  <td className="p-3 tabular-nums">
                    {dB === null ? "–" : `${dB > 0 ? "+" : ""}${fmt(dB)}`}
                  </td>
                  <td className={cn("p-3 font-medium", cor)}>{rotulo}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Secao>
  )
}
