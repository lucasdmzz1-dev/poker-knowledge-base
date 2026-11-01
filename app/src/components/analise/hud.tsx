import { Fragment, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CAMPO } from "@/components/analise/secao"
import { capitalizar, fmt, rotuloMes } from "@/lib/analise"
import {
  CHAVE_FIXADAS,
  CHAVE_HUD,
  CHAVE_TOL,
  COR_NIVEL,
  LEGENDA_COMBATIVIDADE,
  TOLERANCIA_PADRAO,
  SECOES,
  STATS,
  distanciaMeta,
  lerFixadas,
  lerHud,
  lerTol,
  nivelStat,
  type MesHud,
  type NivelStat,
  type StatDef,
  type ValorStat,
} from "@/lib/hud"
import { writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

function useHud() {
  const [meses, setMeses] = useState<MesHud[]>(lerHud)
  const [fixadas, setFixadas] = useState<string[]>(lerFixadas)
  const [tol, setTol] = useState<Record<string, number>>(lerTol)
  const definirTol = (id: string, valor: number | null) => {
    const novas = { ...tol }
    if (valor === null) delete novas[id]
    else novas[id] = valor
    setTol(novas)
    writeJSON(CHAVE_TOL, novas)
  }
  const salvarMeses = (m: MesHud[]) => {
    setMeses(m)
    writeJSON(CHAVE_HUD, m)
  }
  const alternarFixada = (id: string) => {
    const novas = fixadas.includes(id)
      ? fixadas.filter((x) => x !== id)
      : [...fixadas, id]
    setFixadas(novas)
    writeJSON(CHAVE_FIXADAS, novas)
  }
  return { meses, salvarMeses, fixadas, alternarFixada, tol, definirTol }
}

function Pilula({
  ativa,
  onClick,
  children,
}: {
  ativa: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={ativa}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
        ativa
          ? "border-primary bg-primary text-primary-foreground"
          : "bg-card text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

function numero(texto: string): number | null {
  const n = Number(texto.replace(",", "."))
  return texto.trim() === "" || Number.isNaN(n) ? null : n
}

export function ExploradorHud() {
  const { meses, salvarMeses, fixadas, alternarFixada, tol, definirTol } =
    useHud()
  const lista = useMemo(
    () => [...meses].sort((a, b) => b.mes.localeCompare(a.mes)),
    [meses]
  )
  const [escolhido, setEscolhido] = useState<string | null>(null)
  const atual = lista.find((m) => m.mes === escolhido) ?? lista[0]
  const [secao, setSecao] = useState(SECOES[0])
  const [busca, setBusca] = useState("")
  const [soFora, setSoFora] = useState(false)
  const [editando, setEditando] = useState(false)
  const [novoMes, setNovoMes] = useState("")

  const termo = busca.trim().toLowerCase()
  const visiveis = STATS.filter((s) => {
    if (
      termo
        ? !`${s.nome} ${s.bloco} ${s.secao}`.toLowerCase().includes(termo)
        : s.secao !== secao
    )
      return false
    if (!soFora) return true
    const v = atual?.valores[s.id]?.v
    const nivel = nivelStat(v, s.meta, tol[s.id])
    return nivel === "perto" || nivel === "longe"
  })
  const porBloco = new Map<string, StatDef[]>()
  for (const s of visiveis) {
    const k = `${s.secao}|${s.bloco}`
    porBloco.set(k, [...(porBloco.get(k) ?? []), s])
  }

  function definir(id: string, campo: "v" | "ap" | "nai", texto: string) {
    if (!atual) return
    const antigo: ValorStat = atual.valores[id] ?? { v: null }
    const novo: ValorStat = { ...antigo, [campo]: numero(texto) }
    salvarMeses(
      meses.map((m) =>
        m.mes === atual.mes
          ? { ...m, valores: { ...m.valores, [id]: novo } }
          : m
      )
    )
  }

  function adicionarMes() {
    if (!novoMes || meses.some((m) => m.mes === novoMes)) return
    salvarMeses([...meses, { mes: novoMes, valores: {} }])
    setEscolhido(novoMes)
    setEditando(true)
    setNovoMes("")
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Mês
          <select
            className={cn(CAMPO, "w-auto")}
            value={atual?.mes}
            onChange={(e) => setEscolhido(e.target.value)}
          >
            {lista.map((m) => (
              <option key={m.mes} value={m.mes}>
                {capitalizar(rotuloMes(m.mes))}
              </option>
            ))}
          </select>
        </label>
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar uma stat, ex.: turn, 3bet, river"
          aria-label="Buscar uma stat"
          className={cn(CAMPO, "w-64")}
        />
        <Pilula ativa={soFora} onClick={() => setSoFora((v) => !v)}>
          Só fora da meta
        </Pilula>
        <Pilula ativa={editando} onClick={() => setEditando((v) => !v)}>
          Editar valores
        </Pilula>
      </div>

      {!termo && (
        <div
          role="tablist"
          aria-label="Seção das stats"
          className="mb-5 flex flex-wrap gap-2"
        >
          {SECOES.map((s) => (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={secao === s}
              onClick={() => setSecao(s)}
              className={cn(
                "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium transition-[background-color,border-color] duration-150",
                secao === s
                  ? "border-foreground bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {editando && (
        <div className="mb-5 flex flex-wrap items-center gap-2 rounded-xl border border-dashed p-3 text-sm text-muted-foreground">
          <span>
            Os campos aceitam número. Em perto até, diga quantos pontos fora da
            meta ainda contam como perto. Para um mês novo:
          </span>
          <input
            type="month"
            value={novoMes}
            onChange={(e) => setNovoMes(e.target.value)}
            aria-label="Novo mês"
            className={cn(CAMPO, "w-44")}
          />
          <Button variant="outline" onClick={adicionarMes}>
            Adicionar mês
          </Button>
        </div>
      )}

      {porBloco.size === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          {termo
            ? "Nenhuma stat com esse nome."
            : soFora
              ? "Nenhuma stat fora da meta nesta seção."
              : "Sem stats nesta seção."}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {[...porBloco.entries()].map(([chave, stats]) => {
            const [sec, bloco] = chave.split("|")
            const temAp =
              stats.some((s) => atual?.valores[s.id]?.ap !== undefined) ||
              editando
            const temNai =
              stats.some((s) => atual?.valores[s.id]?.nai !== undefined) ||
              editando
            return (
              <Card key={chave} className="gap-0 rounded-[18px] p-0">
                <div className="border-b px-4 py-3">
                  <h3 className="font-bold">{bloco}</h3>
                  {termo && (
                    <p className="text-xs text-muted-foreground">{sec}</p>
                  )}
                </div>
                <table className="w-full border-collapse text-sm">
                  <thead className="text-xs text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Stat</th>
                      <th className="px-2 py-2 text-right font-medium">
                        Valor
                      </th>
                      {temNai && (
                        <th className="px-2 py-2 text-right font-medium">
                          NAI
                        </th>
                      )}
                      {temAp && (
                        <th className="px-2 py-2 text-right font-medium">AP</th>
                      )}
                      <th className="px-2 py-2 text-right font-medium">Meta</th>
                      {editando && (
                        <th className="px-2 py-2 text-right font-medium">
                          Perto até
                        </th>
                      )}
                      <th className="px-2 py-2 font-medium">
                        <span className="sr-only">Fixar</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.map((s) => {
                      const val = atual?.valores[s.id]
                      const fixada = fixadas.includes(s.id)
                      return (
                        <tr key={s.id} className="border-t">
                          <th
                            scope="row"
                            className="px-4 py-1.5 text-left font-normal"
                          >
                            {s.nome}
                            {typeof val?.n === "number" && (
                              <span className="ml-2 text-[11px] whitespace-nowrap text-muted-foreground tabular-nums">
                                {val.n} {val.n === 1 ? "mão" : "mãos"}
                              </span>
                            )}
                          </th>
                          <Celula
                            val={val}
                            campo="v"
                            editando={editando}
                            id={s.id}
                            definir={definir}
                            destaque
                            nivel={nivelStat(val?.v, s.meta, tol[s.id])}
                          />
                          {temNai && (
                            <Celula
                              val={val}
                              campo="nai"
                              editando={editando}
                              id={s.id}
                              definir={definir}
                            />
                          )}
                          {temAp && (
                            <Celula
                              val={val}
                              campo="ap"
                              editando={editando}
                              id={s.id}
                              definir={definir}
                            />
                          )}
                          <td className="px-2 py-1.5 text-right text-muted-foreground tabular-nums">
                            {s.meta ?? "–"}
                          </td>
                          {editando && (
                            <td className="px-1 py-1 text-right">
                              {s.meta ? (
                                <input
                                  inputMode="decimal"
                                  aria-label={`Perto até, ${s.nome}`}
                                  defaultValue={String(
                                    tol[s.id] ?? TOLERANCIA_PADRAO
                                  ).replace(".", ",")}
                                  onBlur={(e) => {
                                    const n = numero(e.target.value)
                                    definirTol(
                                      s.id,
                                      n === null || n < 0 ? null : n
                                    )
                                  }}
                                  className={cn(
                                    CAMPO,
                                    "h-8 w-16 text-right tabular-nums"
                                  )}
                                />
                              ) : (
                                <span className="text-muted-foreground">–</span>
                              )}
                            </td>
                          )}
                          <td className="px-2 py-1.5 text-right">
                            <button
                              type="button"
                              aria-pressed={fixada}
                              aria-label={
                                fixada
                                  ? `Tirar ${s.nome} da comparação`
                                  : `Levar ${s.nome} para a comparação`
                              }
                              title={
                                fixada
                                  ? "Fixada na comparação"
                                  : "Levar para a comparação"
                              }
                              onClick={() => alternarFixada(s.id)}
                              className={cn(
                                "cursor-pointer text-base leading-none transition-colors duration-150",
                                fixada
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {fixada ? "★" : "☆"}
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </Card>
            )
          })}
        </div>
      )}

      {!termo && secao === "Multiway e combatividade" && (
        <Card className="mt-4 rounded-[18px] p-5">
          <h3 className="mb-2 font-bold">Como ler a combatividade</h3>
          <ul className="grid gap-1.5 text-sm text-muted-foreground">
            {LEGENDA_COMBATIVIDADE.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Card>
      )}

      <p className="mt-4 text-xs text-muted-foreground">
        O valor fica verde no alvo, amarelo perto da meta e vermelho longe dela.
        Quanto é perto muda por stat, em editar valores, no campo perto até (o
        padrão é 2 pontos). NAI exclui o all-in e AP é o lucro médio. O número
        pequeno ao lado do nome é a quantidade de mãos. Use a estrela para levar
        uma stat para a comparação.
      </p>
    </div>
  )
}

function Celula({
  val,
  campo,
  editando,
  id,
  definir,
  destaque,
  nivel,
}: {
  val?: ValorStat
  campo: "v" | "ap" | "nai"
  editando: boolean
  id: string
  definir: (id: string, campo: "v" | "ap" | "nai", texto: string) => void
  destaque?: boolean
  nivel?: NivelStat | null
}) {
  const v = val?.[campo]
  if (editando)
    return (
      <td className="px-1 py-1 text-right">
        <input
          inputMode="decimal"
          aria-label={`${campo} de ${id.split("|")[2]}`}
          defaultValue={
            typeof v === "number" ? String(v).replace(".", ",") : ""
          }
          onBlur={(e) => definir(id, campo, e.target.value)}
          className={cn(CAMPO, "h-8 w-20 text-right tabular-nums")}
        />
      </td>
    )
  return (
    <td
      className={cn(
        "px-2 py-1.5 text-right tabular-nums",
        destaque && "font-bold"
      )}
    >
      {typeof v === "number" ? (
        <span
          className={cn(
            campo === "v" && nivel && COR_NIVEL[nivel],
            campo === "ap" && v < 0 && "text-destructive",
            campo === "ap" && v > 0 && "text-primary"
          )}
        >
          {fmt(v).replace(",0", "")}
        </span>
      ) : (
        <span className="text-muted-foreground">–</span>
      )}
    </td>
  )
}

export function ComparacaoHud() {
  const { meses, fixadas, tol } = useHud()
  const lista = [...meses].sort((a, b) => b.mes.localeCompare(a.mes))
  const [a, setA] = useState<string | null>(null)
  const [b, setB] = useState<string | null>(null)
  const [soFixadas, setSoFixadas] = useState(false)
  const [soMudou, setSoMudou] = useState(true)
  const [secao, setSecao] = useState("Todas")
  const [todas, setTodas] = useState(false)

  const agora = lista.find((m) => m.mes === b) ?? lista[0]
  const antes =
    lista.find((m) => m.mes === a && m.mes !== agora?.mes) ??
    lista.find((m) => m.mes !== agora?.mes)

  const linhas = useMemo(() => {
    if (!agora || !antes) return []
    return STATS.map((s) => {
      const va = antes.valores[s.id]?.v
      const vb = agora.valores[s.id]?.v
      if (typeof va !== "number" || typeof vb !== "number") return null
      const delta = Math.round((vb - va) * 10) / 10
      const da = distanciaMeta(va, s.meta)
      const db = distanciaMeta(vb, s.meta)
      const julgamento =
        da === null || db === null
          ? null
          : db < da - 0.05
            ? "melhorou"
            : db > da + 0.05
              ? "piorou"
              : "igual"
      return {
        s,
        va,
        vb,
        delta,
        julgamento,
        fixada: fixadas.includes(s.id),
        na: nivelStat(va, s.meta, tol[s.id]),
        nb: nivelStat(vb, s.meta, tol[s.id]),
      }
    })
      .filter((x): x is NonNullable<typeof x> => x !== null)
      .filter(
        (x) =>
          (soFixadas ? x.fixada : true) &&
          (secao === "Todas" || x.s.secao === secao) &&
          (!soMudou || Math.abs(x.delta) >= 0.5)
      )
      .sort(
        (p, q) =>
          Number(q.fixada) - Number(p.fixada) ||
          Math.abs(q.delta) - Math.abs(p.delta)
      )
  }, [agora, antes, fixadas, tol, soFixadas, soMudou, secao])

  if (lista.length < 2)
    return (
      <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
        Falta um segundo mês de stats. Em leaks do mês, abra todas as stats,
        ative editar valores e adicione outubro. Depois use a estrela nas stats
        que você quer acompanhar, e elas aparecem aqui primeiro.
      </div>
    )

  const mostradas = todas ? linhas : linhas.slice(0, 25)

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <label className="flex items-center gap-2">
          Antes
          <select
            className={cn(CAMPO, "w-auto")}
            value={antes?.mes}
            onChange={(e) => setA(e.target.value)}
          >
            {lista
              .filter((m) => m.mes !== agora?.mes)
              .map((m) => (
                <option key={m.mes} value={m.mes}>
                  {capitalizar(rotuloMes(m.mes))}
                </option>
              ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          Agora
          <select
            className={cn(CAMPO, "w-auto")}
            value={agora?.mes}
            onChange={(e) => setB(e.target.value)}
          >
            {lista.map((m) => (
              <option key={m.mes} value={m.mes}>
                {capitalizar(rotuloMes(m.mes))}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          Seção
          <select
            className={cn(CAMPO, "w-auto")}
            value={secao}
            onChange={(e) => setSecao(e.target.value)}
          >
            <option>Todas</option>
            {SECOES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <Pilula ativa={soFixadas} onClick={() => setSoFixadas((v) => !v)}>
          Só as fixadas ({fixadas.length})
        </Pilula>
        <Pilula ativa={soMudou} onClick={() => setSoMudou((v) => !v)}>
          Só as que mudaram
        </Pilula>
      </div>

      {linhas.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Nenhuma stat com números nos dois meses para esse filtro.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-card text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Stat</th>
                <th className="p-3 font-medium">Meta</th>
                <th className="p-3 font-medium">Antes</th>
                <th className="p-3 font-medium">Agora</th>
                <th className="p-3 font-medium">Variação</th>
                <th className="p-3 font-medium">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {mostradas.map((x) => (
                <Fragment key={x.s.id}>
                  <tr className="border-t">
                    <th scope="row" className="p-3 text-left font-medium">
                      {x.fixada && (
                        <span className="mr-1.5 text-primary">★</span>
                      )}
                      {x.s.nome}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {x.s.secao} · {x.s.bloco}
                      </span>
                    </th>
                    <td className="p-3 text-muted-foreground tabular-nums">
                      {x.s.meta ?? "–"}
                    </td>
                    <td
                      className={cn(
                        "p-3 tabular-nums",
                        x.na && COR_NIVEL[x.na]
                      )}
                    >
                      {fmt(x.va).replace(",0", "")}
                    </td>
                    <td
                      className={cn(
                        "p-3 font-bold tabular-nums",
                        x.nb && COR_NIVEL[x.nb]
                      )}
                    >
                      {fmt(x.vb).replace(",0", "")}
                    </td>
                    <td className="p-3 tabular-nums">
                      {x.delta > 0 ? "+" : ""}
                      {fmt(x.delta).replace(",0", "")}
                    </td>
                    <td
                      className={cn(
                        "p-3 font-medium",
                        x.julgamento === "melhorou" && "text-primary",
                        x.julgamento === "piorou" && "text-destructive",
                        (!x.julgamento || x.julgamento === "igual") &&
                          "text-muted-foreground"
                      )}
                    >
                      {x.julgamento === "melhorou"
                        ? "Melhorou"
                        : x.julgamento === "piorou"
                          ? "Piorou"
                          : x.julgamento === "igual"
                            ? "Igual"
                            : x.delta === 0
                              ? "Igual"
                              : "Mudou"}
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {linhas.length > 25 && (
        <div className="mt-4 flex justify-center">
          <Button variant="outline" onClick={() => setTodas((v) => !v)}>
            {todas
              ? "Mostrar só as 25 maiores mudanças"
              : `Mostrar todas (${linhas.length})`}
          </Button>
        </div>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        As cores seguem a meta e a tolerância de cada stat. Melhorou e piorou só
        aparecem nas stats que têm meta, e querem dizer que o número chegou mais
        perto ou mais longe dela. Nas outras, a coluna mostra só a variação.
      </p>
    </div>
  )
}
