import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ComparacaoHud, ExploradorHud } from "@/components/analise/hud"
import { lerHud } from "@/lib/hud"
import { PrintsDoMes } from "@/components/analise/prints"
import { Secao, CAMPO } from "@/components/analise/secao"
import {
  CHAVES,
  PONTOS_CRITICOS,
  desvio,
  fmt,
  lerLeaks,
  novoId,
  capitalizar,
  rotuloMes,
  type Fase,
  type Leak,
} from "@/lib/analise"
import { leakNoPainel, levarLeak, tirarLeak } from "@/lib/painel"
import { writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

function mesesDe(leaks: Leak[]): string[] {
  return [...new Set(leaks.map((l) => l.mes))].sort().reverse()
}

const VISIVEIS = 6

export function useLeaks() {
  const [leaks, setLeaks] = useState<Leak[]>(lerLeaks)
  const salvar = (novos: Leak[]) => {
    setLeaks(novos)
    writeJSON(CHAVES.leaks, novos)
  }
  return { leaks, salvar }
}

function LeaksLista({
  leaks,
  salvar,
  abrirPainel,
}: {
  leaks: Leak[]
  salvar: (l: Leak[]) => void
  abrirPainel?: () => void
}) {
  const meses = mesesDe(leaks)
  const [escolhido, setEscolhido] = useState<string | null>(null)
  const mes =
    escolhido && meses.includes(escolhido) ? escolhido : (meses[0] ?? "")
  const [fase, setFase] = useState<Fase>("preflop")
  const [todos, setTodos] = useState(false)
  const doMes = useMemo(
    () =>
      leaks
        .filter((l) => l.mes === mes && l.fase === fase)
        .sort((a, b) => Math.abs(desvio(b)) - Math.abs(desvio(a))),
    [leaks, mes, fase]
  )
  const total = (f: Fase) =>
    leaks.filter((l) => l.mes === mes && l.fase === f).length
  const mostrados = todos ? doMes : doMes.slice(0, VISIVEIS)
  const criticos = PONTOS_CRITICOS[mes]
  const [marcados, setMarcados] = useState<string[]>([])
  const [versao, setVersao] = useState(0)
  const noPainel = useMemo(
    () => new Set(leaks.filter(leakNoPainel).map((l) => l.id)),
    // versao força reler o painel depois de levar ou tirar leaks
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [leaks, versao]
  )
  const selecionados = leaks.filter(
    (l) => l.mes === mes && marcados.includes(l.id) && !noPainel.has(l.id)
  )
  const contar = (f: Fase) => selecionados.filter((l) => l.fase === f).length
  const [levados, setLevados] = useState(0)

  function levar() {
    selecionados.forEach(levarLeak)
    setLevados(selecionados.length)
    setMarcados([])
    setVersao((v) => v + 1)
  }
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
    const faseNova: Fase = f.get("fase") === "posflop" ? "posflop" : "preflop"
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
        fase: faseNova,
        spot,
        stat,
        real,
        solver,
        contra: "Referência",
        fazer: String(f.get("fazer")).trim(),
      },
    ])
    setEscolhido(mesNovo)
    setFase(faseNova)
    setAberto(false)
    e.currentTarget.reset()
  }

  return (
    <Secao
      titulo="Leaks do mês"
      lead="Os spots em que o seu número mais foge da referência, do maior desvio para o menor, separados em pré-flop e pós-flop. Os três primeiros de cada lado são onde atacar."
    >
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {meses.length > 0 && (
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Mês
            <select
              className={cn(CAMPO, "w-auto")}
              value={mes}
              onChange={(e) => {
                setEscolhido(e.target.value)
                setMarcados([])
                setLevados(0)
              }}
            >
              {meses.map((m) => (
                <option key={m} value={m}>
                  {capitalizar(rotuloMes(m))}
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
              Fase
              <select name="fase" defaultValue={fase} className={CAMPO}>
                <option value="preflop">Pré-flop</option>
                <option value="posflop">Pós-flop</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Spot
              <input
                name="spot"
                placeholder="BTN · 15–25bb"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm">
              Estatística
              <input name="stat" placeholder="RFI" className={CAMPO} />
            </label>
            <label className="grid gap-1 text-sm">
              Seu valor (%)
              <input
                name="real"
                inputMode="decimal"
                placeholder="33"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm">
              Referência (%)
              <input
                name="solver"
                inputMode="decimal"
                placeholder="45"
                className={CAMPO}
              />
            </label>
            <label className="grid gap-1 text-sm md:col-span-3">
              O que fazer
              <input
                name="fazer"
                placeholder="Abrir mais Kxo e Jxs"
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

      {criticos && (
        <Card className="mb-6 rounded-[18px] p-5">
          <h3 className="mb-2 font-bold">
            Pontos críticos de {rotuloMes(mes)}
          </h3>
          <ol className="grid list-decimal gap-1 pl-5 text-muted-foreground">
            {criticos.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ol>
        </Card>
      )}

      <div role="tablist" aria-label="Fase" className="mb-4 flex gap-2">
        {(
          [
            ["preflop", "Pré-flop"],
            ["posflop", "Pós-flop"],
          ] as const
        ).map(([id, nome]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={fase === id}
            onClick={() => {
              setFase(id)
              setTodos(false)
            }}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
              fase === id
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {nome} · {total(id)}
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border bg-card/40 p-3">
        <Button
          className="h-10 px-5 font-bold"
          disabled={selecionados.length === 0}
          onClick={levar}
        >
          Levar selecionados para o painel semanal
        </Button>
        <span className="text-sm text-muted-foreground">
          {selecionados.length === 0
            ? "Marque os leaks de pré-flop e pós-flop que quer acompanhar por semana."
            : `${selecionados.length} selecionados · ${contar("preflop")} pré-flop · ${contar("posflop")} pós-flop`}
        </span>
        {levados > 0 && (
          <span className="text-sm text-primary">
            {levados} {levados === 1 ? "leak levado" : "leaks levados"}.
            {abrirPainel && (
              <button
                type="button"
                className="ml-2 cursor-pointer underline-offset-4 hover:underline"
                onClick={abrirPainel}
              >
                Abrir o painel
              </button>
            )}
          </span>
        )}
      </div>

      {doMes.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Nenhum leak de {fase === "preflop" ? "pré-flop" : "pós-flop"} em{" "}
          {rotuloMes(mes) || "este mês"} ainda. Use "Adicionar leak" com os
          números do mês.
        </div>
      ) : (
        <>
          <ul className="grid gap-3">
            {mostrados.map((l, i) => {
              const d = desvio(l)
              const un = l.unidade ?? "%"
              return (
                <li key={l.id}>
                  <Card className="rounded-[18px] p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="flex items-center gap-3 text-lg font-bold">
                        <input
                          type="checkbox"
                          aria-label={`Selecionar ${l.spot} · ${l.stat}`}
                          disabled={noPainel.has(l.id)}
                          checked={
                            noPainel.has(l.id) || marcados.includes(l.id)
                          }
                          onChange={(e) =>
                            setMarcados(
                              e.target.checked
                                ? [...marcados, l.id]
                                : marcados.filter((x) => x !== l.id)
                            )
                          }
                          className="size-5 accent-primary"
                        />
                        {l.spot} · {l.stat}
                        {i < 3 && (
                          <span className="ml-2 rounded-full bg-primary px-2.5 py-0.5 align-middle text-xs font-bold text-primary-foreground">
                            Atacar
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground tabular-nums">
                        Você{" "}
                        <b className="text-foreground">
                          {fmt(l.real)}
                          {un === "%" ? "%" : " bb"}
                        </b>{" "}
                        · {l.contra ?? "Solver"}{" "}
                        <b className="text-foreground">
                          {fmt(l.solver)}
                          {un === "%" ? "%" : " bb"}
                        </b>{" "}
                        ·{" "}
                        <b className={d > 0 ? "text-b50" : "text-check"}>
                          {d > 0 ? "+" : ""}
                          {fmt(d)} {un === "%" ? "pts" : "bb"}
                        </b>
                      </p>
                    </div>
                    {l.fazer && <p className="mt-2 max-w-[70ch]">{l.fazer}</p>}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                      {noPainel.has(l.id) ? (
                        <span className="flex items-center gap-3">
                          <span className="text-primary">
                            No painel semanal
                          </span>
                          <button
                            type="button"
                            className="cursor-pointer underline-offset-4 hover:text-foreground hover:underline"
                            onClick={() => {
                              tirarLeak(l)
                              setVersao((v) => v + 1)
                            }}
                          >
                            Tirar
                          </button>
                        </span>
                      ) : (
                        <span />
                      )}
                      <span>{l.fonte ?? "Registrado por você"}</span>
                      <button
                        type="button"
                        className="cursor-pointer underline-offset-4 hover:text-foreground hover:underline"
                        onClick={() =>
                          salvar(leaks.filter((x) => x.id !== l.id))
                        }
                      >
                        Remover
                      </button>
                    </div>
                  </Card>
                </li>
              )
            })}
          </ul>
          {doMes.length > VISIVEIS && (
            <div className="mt-4 flex justify-center">
              <Button variant="outline" onClick={() => setTodos((v) => !v)}>
                {todos
                  ? "Mostrar só os principais"
                  : `Mostrar todos (${doMes.length})`}
              </Button>
            </div>
          )}
        </>
      )}
    </Secao>
  )
}

function ComparacaoLeaks({ leaks }: { leaks: Leak[] }) {
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
          Falta um segundo mês. Quando você adicionar os leaks de outubro, com o
          mesmo spot e a mesma estatística de setembro, a comparação aparece
          aqui.
        </div>
      </Secao>
    )
  }

  return (
    <Secao
      titulo="Comparação mês a mês"
      lead="Menos desvio da referência é melhor. A variação mostra quanto o desvio mudou, em pontos percentuais."
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
                  {capitalizar(rotuloMes(m))}
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
                {capitalizar(rotuloMes(m))}
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

function Vista<T extends string>({
  valor,
  opcoes,
  onChange,
}: {
  valor: T
  opcoes: readonly (readonly [T, string])[]
  onChange: (v: T) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Vista"
      className="mb-8 flex flex-wrap gap-2"
    >
      {opcoes.map(([id, nome]) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={valor === id}
          onClick={() => onChange(id)}
          className={cn(
            "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
            valor === id
              ? "border-foreground bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {nome}
        </button>
      ))}
    </div>
  )
}

export function LeaksDoMes(props: {
  leaks: Leak[]
  salvar: (l: Leak[]) => void
  abrirPainel?: () => void
}) {
  const [vista, setVista] = useState<"leaks" | "stats">("stats")
  const mesAtual =
    [...lerHud()]
      .map((m) => m.mes)
      .sort()
      .pop() ?? new Date().toISOString().slice(0, 7)
  return (
    <div>
      <Vista
        valor={vista}
        onChange={setVista}
        opcoes={[
          ["stats", "Prints e stats do HUD"],
          ["leaks", "Leaks do mês"],
        ]}
      />
      {vista === "leaks" ? (
        <LeaksLista {...props} />
      ) : (
        <>
          <Secao
            titulo="Prints e stats do mês"
            lead="Coloque aqui os prints do mês. Com eles, as stats do HUD são preenchidas por seção, com cores pela meta. Busque pelo nome, filtre as fora da meta e use a estrela para levar uma stat para a comparação."
          >
            <PrintsDoMes mes={mesAtual} />
            <ExploradorHud />
          </Secao>
          <div className="mt-8 flex justify-center">
            <Button
              className="px-6 font-bold"
              onClick={() => setVista("leaks")}
            >
              Ver os leaks do mês
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export function Comparacao({ leaks }: { leaks: Leak[] }) {
  const [vista, setVista] = useState<"leaks" | "stats">("stats")
  return (
    <div>
      <Vista
        valor={vista}
        onChange={setVista}
        opcoes={[
          ["stats", "Stats do HUD"],
          ["leaks", "Leaks"],
        ]}
      />
      {vista === "leaks" ? (
        <ComparacaoLeaks leaks={leaks} />
      ) : (
        <Secao
          titulo="Comparação das stats do HUD"
          lead="O que mudou de um mês para o outro, da maior mudança para a menor. As stats que você fixou com a estrela aparecem primeiro."
        >
          <ComparacaoHud />
        </Secao>
      )}
    </div>
  )
}
