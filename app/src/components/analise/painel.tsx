import { Fragment, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Secao, CAMPO } from "@/components/analise/secao"
import { fmt } from "@/lib/analise"
import {
  CHAVE_PAINEL,
  METRICAS,
  comparar,
  estado,
  faixa,
  lerPainel,
  limiteAmostra,
  proximaData,
  type DadosPainel,
  type Escopo,
  type Estado,
  type Metrica,
  type Periodo,
} from "@/lib/painel"
import { writeJSON } from "@/lib/storage"
import { cn } from "@/lib/utils"

type Sub = "semana" | "mes" | "comparar"

const COR_ESTADO: Record<Estado, string> = {
  alvo: "text-primary",
  perto: "text-[#fcc419]",
  longe: "text-destructive",
}

function maosCurto(n: number | null): string {
  if (n === null) return "sem mãos"
  return n >= 1000
    ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(".", ",")}k mãos`
    : `${n} mãos`
}

function sinal(n: number): string {
  return `${n > 0 ? "+" : ""}${fmt(n)}`
}

function numeros(periodos: Periodo[], m: Metrica): number[] {
  return periodos
    .map((p) => p.valores[m.id])
    .filter((v): v is number => typeof v === "number")
}

function corValor(v: unknown, m: Metrica): string {
  return typeof v === "number" ? COR_ESTADO[estado(v, m)] : ""
}

function Tendencia({ valores, m }: { valores: number[]; m: Metrica }) {
  if (valores.length < 2)
    return <span className="text-muted-foreground">–</span>
  const t = comparar(
    valores[valores.length - 2],
    valores[valores.length - 1],
    m
  )
  const cor =
    t.sentido === "melhorou"
      ? "text-primary"
      : t.sentido === "piorou"
        ? "text-destructive"
        : "text-muted-foreground"
  const seta = t.delta > 0 ? "▲" : t.delta < 0 ? "▼" : "•"
  return (
    <span className={cn("whitespace-nowrap tabular-nums", cor)}>
      {seta} {sinal(t.delta)} <span className="text-xs">({t.sentido})</span>
    </span>
  )
}

function Tabela({
  escopo,
  dados,
  salvar,
}: {
  escopo: Escopo
  dados: DadosPainel
  salvar: (d: DadosPainel) => void
}) {
  const periodos = dados[escopo]
  const metricas = METRICAS.filter((m) => m.escopo === escopo)
  const aberto = periodos.find((p) => !p.fechado)
  const prefixo = escopo === "semana" ? "S" : "M"
  const nome = escopo === "semana" ? "semana" : "mês"
  const grupos = [...new Set(metricas.map((m) => m.grupo))]
  const limite = limiteAmostra(escopo)

  const troca = (lista: Periodo[]) => salvar({ ...dados, [escopo]: lista })
  const atualiza = (id: string, f: (p: Periodo) => Periodo) =>
    troca(periodos.map((p) => (p.id === id ? f(p) : p)))

  function fechar() {
    if (!aberto) return
    const nova: Periodo = {
      id: `${escopo}-${Date.now().toString(36)}`,
      data: proximaData(escopo, aberto.data),
      maos: null,
      fechado: false,
      valores: {},
    }
    troca([
      ...periodos.map((p) =>
        p.id === aberto.id ? { ...p, fechado: true } : p
      ),
      nova,
    ])
  }

  const vazio = (p: Periodo) =>
    p.maos === null &&
    Object.values(p.valores).every((v) => v === null || v === undefined)
  const ultimoFechado = [...periodos].reverse().find((p) => p.fechado)
  const podeReabrir = Boolean(ultimoFechado) && (!aberto || vazio(aberto))

  function reabrir() {
    if (!ultimoFechado) return
    troca(
      periodos
        .filter((p) => !(aberto && vazio(aberto) && p.id === aberto.id))
        .map((p) => (p.id === ultimoFechado.id ? { ...p, fechado: false } : p))
    )
  }

  function definir(p: Periodo, m: Metrica, texto: string) {
    const n = Number(texto.replace(",", "."))
    const v = texto.trim() === "" || Number.isNaN(n) ? null : n
    atualiza(p.id, (x) => ({ ...x, valores: { ...x.valores, [m.id]: v } }))
  }

  return (
    <>
      <p className="mb-4 max-w-[70ch] text-sm text-muted-foreground">
        {escopo === "semana"
          ? "Stats que você acompanha toda semana. Preencha a semana aberta e clique em Salvar para fechá-la e abrir a próxima. Stats de spot raro oscilam com amostra pequena: olhe a tendência de várias semanas."
          : "Análises que só fazem sentido com amostra grande (HUD mensal). M1 é a base de setembro, com o HUD de 46 mil mãos. Preencha outubro quando tiver os números."}{" "}
        "No alvo" é dentro da faixa, "Perto" é até 2 pontos fora e "Longe" é
        acima disso.
      </p>

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="bg-card text-sm text-muted-foreground">
            <tr>
              <th className="p-3 font-medium">Métrica (%)</th>
              <th className="p-3 font-medium">Alvo</th>
              {periodos.map((p, i) => (
                <th
                  key={p.id}
                  className="p-3 align-top font-medium whitespace-nowrap"
                >
                  <span className="font-bold text-foreground">
                    {prefixo}
                    {i + 1}
                  </span>
                  {!p.fechado && (
                    <span className="ml-2 rounded-full border border-primary px-2 py-0.5 text-xs text-primary">
                      aberta
                    </span>
                  )}
                  {p.fechado ? (
                    <>
                      <div className="text-xs">{p.data}</div>
                      <div className="text-xs">
                        {maosCurto(p.maos)}
                        {p.maos !== null && p.maos < limite && (
                          <span className="ml-1 text-[#fcc419]">
                            · amostra pequena
                          </span>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="mt-1 grid gap-1">
                      <input
                        defaultValue={p.data}
                        aria-label={`Data da ${nome} ${prefixo}${i + 1}`}
                        onBlur={(e) =>
                          atualiza(p.id, (x) => ({
                            ...x,
                            data: e.target.value.trim(),
                          }))
                        }
                        placeholder={escopo === "semana" ? "dd/mm" : "mm/aaaa"}
                        className={cn(CAMPO, "h-8 w-24")}
                      />
                      <input
                        inputMode="numeric"
                        defaultValue={p.maos ?? ""}
                        aria-label={`Mãos da ${nome} ${prefixo}${i + 1}`}
                        placeholder="mãos"
                        onBlur={(e) => {
                          const n = Number(e.target.value.replace(/\D/g, ""))
                          atualiza(p.id, (x) => ({
                            ...x,
                            maos: e.target.value.trim() === "" || !n ? null : n,
                          }))
                        }}
                        className={cn(CAMPO, "h-8 w-24")}
                      />
                    </div>
                  )}
                </th>
              ))}
              <th className="p-3 font-medium">Tendência</th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((g) => (
              <Fragment key={g}>
                <tr className="border-t bg-card/60">
                  <th
                    colSpan={periodos.length + 3}
                    className="p-3 text-left text-sm font-bold"
                  >
                    {g}
                  </th>
                </tr>
                {metricas
                  .filter((m) => m.grupo === g)
                  .map((m) => {
                    const v = numeros(periodos, m)
                    return (
                      <tr key={m.id} className="border-t align-top">
                        <th
                          scope="row"
                          className="min-w-56 p-3 text-left font-medium"
                        >
                          {m.nome}
                          {m.fonte && (
                            <span className="ml-2 text-xs font-normal text-muted-foreground">
                              {m.fonte}
                            </span>
                          )}
                          <p className="mt-1 max-w-[44ch] text-xs font-normal text-muted-foreground">
                            {m.nota}
                          </p>
                        </th>
                        <td className="p-3 text-sm whitespace-nowrap tabular-nums">
                          <div>{faixa(m)}</div>
                          {m.meta && (
                            <div className="mt-1 max-w-40 text-xs whitespace-normal text-muted-foreground">
                              {m.meta}
                            </div>
                          )}
                        </td>
                        {periodos.map((p) => (
                          <td key={p.id} className="p-2">
                            {p.fechado ? (
                              <span
                                className={cn(
                                  "block px-3 py-2 font-medium tabular-nums",
                                  corValor(p.valores[m.id], m)
                                )}
                              >
                                {typeof p.valores[m.id] === "number"
                                  ? fmt(p.valores[m.id] as number)
                                  : "–"}
                              </span>
                            ) : (
                              <input
                                inputMode="decimal"
                                aria-label={`${m.nome}, ${prefixo}${periodos.indexOf(p) + 1}`}
                                defaultValue={
                                  typeof p.valores[m.id] === "number"
                                    ? String(p.valores[m.id]).replace(".", ",")
                                    : ""
                                }
                                onBlur={(e) => definir(p, m, e.target.value)}
                                className={cn(
                                  CAMPO,
                                  "w-24 tabular-nums",
                                  corValor(p.valores[m.id], m)
                                )}
                              />
                            )}
                          </td>
                        ))}
                        <td className="p-3 text-sm">
                          <Tendencia valores={v} m={m} />
                        </td>
                      </tr>
                    )
                  })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button
          className="h-11 px-6 font-bold"
          disabled={!aberto}
          onClick={fechar}
        >
          {escopo === "semana"
            ? "Salvar semana e abrir a próxima"
            : "Salvar mês e abrir o próximo"}
        </Button>
        <Button
          variant="outline"
          className="h-11 px-5"
          disabled={!podeReabrir}
          onClick={reabrir}
          title={
            podeReabrir
              ? undefined
              : `Já existe uma ${nome} aberta com números. Salve-a antes de reabrir a anterior.`
          }
        >
          Reabrir a última salva
        </Button>
        <span className="text-sm text-muted-foreground">
          Os números ficam salvos assim que você sai de cada campo.
        </span>
      </div>
    </>
  )
}

function Comparar({ dados }: { dados: DadosPainel }) {
  const lista = useMemo(
    () =>
      (["semana", "mes"] as const).flatMap((escopo) =>
        dados[escopo].map((p, i) => ({
          chave: `${escopo}|${p.id}`,
          rotulo: `${escopo === "semana" ? "Semana S" : "Mês M"}${i + 1} · ${p.data}`,
          escopo,
          p,
        }))
      ),
    [dados]
  )
  const comDados = lista.filter((x) =>
    Object.values(x.p.valores).some((v) => typeof v === "number")
  )
  const semanas = comDados.filter((x) => x.escopo === "semana")
  const [a, setA] = useState<string>(
    semanas.length > 1
      ? semanas[semanas.length - 2].chave
      : (comDados[0]?.chave ?? "")
  )
  const [b, setB] = useState<string>(
    semanas.length > 1
      ? semanas[semanas.length - 1].chave
      : (comDados[comDados.length - 1]?.chave ?? "")
  )
  const A = lista.find((x) => x.chave === a)
  const B = lista.find((x) => x.chave === b)

  const linhas = METRICAS.filter((m) => {
    const va = A?.p.valores[m.id]
    const vb = B?.p.valores[m.id]
    return typeof va === "number" || typeof vb === "number"
  })

  const Seletor = ({
    valor,
    onChange,
    nome,
  }: {
    valor: string
    onChange: (v: string) => void
    nome: string
  }) => (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      {nome}
      <select
        className={cn(CAMPO, "w-auto")}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      >
        {lista.map((x) => (
          <option key={x.chave} value={x.chave}>
            {x.rotulo}
          </option>
        ))}
      </select>
    </label>
  )

  return (
    <>
      <p className="mb-4 max-w-[70ch] text-sm text-muted-foreground">
        Escolha dois períodos para comparar. "Melhorou" quer dizer que o número
        chegou mais perto da faixa-alvo, e não só que subiu ou desceu. Semanas
        só se comparam com semanas, e meses com meses, porque cada tipo tem as
        suas métricas.
      </p>
      <div className="mb-4 flex flex-wrap gap-4">
        <Seletor nome="Antes" valor={a} onChange={setA} />
        <Seletor nome="Agora" valor={b} onChange={setB} />
      </div>
      {linhas.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
          Escolha dois períodos com números preenchidos.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead className="bg-card text-sm text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Métrica</th>
                <th className="p-3 font-medium">Alvo</th>
                <th className="p-3 font-medium">Antes</th>
                <th className="p-3 font-medium">Agora</th>
                <th className="p-3 font-medium">Variação</th>
                <th className="p-3 font-medium">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((m) => {
                const va = A?.p.valores[m.id]
                const vb = B?.p.valores[m.id]
                const ok = typeof va === "number" && typeof vb === "number"
                const t = ok ? comparar(va, vb, m) : null
                return (
                  <tr key={m.id} className="border-t">
                    <th scope="row" className="p-3 text-left font-medium">
                      {m.nome}
                    </th>
                    <td className="p-3 text-sm whitespace-nowrap text-muted-foreground tabular-nums">
                      {faixa(m)}
                    </td>
                    <td className="p-3 tabular-nums">
                      {typeof va === "number" ? fmt(va) : "–"}
                    </td>
                    <td className="p-3 tabular-nums">
                      {typeof vb === "number" ? fmt(vb) : "–"}
                    </td>
                    <td className="p-3 tabular-nums">
                      {t ? sinal(t.delta) : "–"}
                    </td>
                    <td
                      className={cn(
                        "p-3 font-medium",
                        t?.sentido === "melhorou" && "text-primary",
                        t?.sentido === "piorou" && "text-destructive",
                        (!t || t.sentido === "igual") && "text-muted-foreground"
                      )}
                    >
                      {t
                        ? t.sentido[0].toUpperCase() + t.sentido.slice(1)
                        : "Falta um dos dois"}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export function PainelSemanal() {
  const [dados, setDados] = useState<DadosPainel>(lerPainel)
  const [sub, setSub] = useState<Sub>("semana")

  const salvar = (d: DadosPainel) => {
    setDados(d)
    writeJSON(CHAVE_PAINEL, d)
  }

  return (
    <Secao
      titulo="Painel semanal"
      lead="As stats que você acompanha por semana e por mês, com a faixa-alvo de cada uma, o valor colorido (verde no alvo, amarelo perto, vermelho longe) e a tendência contra o período anterior."
    >
      <div
        role="tablist"
        aria-label="Painel"
        className="mb-5 flex flex-wrap gap-2"
      >
        {(
          [
            ["semana", "Semanas"],
            ["mes", "Meses"],
            ["comparar", "Comparar períodos"],
          ] as const
        ).map(([id, nome]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={sub === id}
            onClick={() => setSub(id)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
              sub === id
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {nome}
          </button>
        ))}
      </div>
      {sub === "comparar" ? (
        <Comparar dados={dados} />
      ) : (
        <Tabela key={sub} escopo={sub} dados={dados} salvar={salvar} />
      )}
    </Secao>
  )
}
