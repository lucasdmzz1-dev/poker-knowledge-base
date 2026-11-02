import { useEffect, useMemo, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Secao } from "@/components/analise/secao"
import { ehAdmin, resumoUsuarios, type ResumoUsuario } from "@/lib/nuvem"

const DIA = 86_400_000

function data(v: string | null): string {
  if (!v) return "–"
  return new Date(v).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function ativoEm(v: string | null, dias: number): boolean {
  return Boolean(v) && Date.now() - new Date(v as string).getTime() < dias * DIA
}

export default function Admin() {
  const [estado, setEstado] = useState<"carregando" | "negado" | "ok">(
    "carregando"
  )
  const [lista, setLista] = useState<ResumoUsuario[]>([])
  const [erro, setErro] = useState("")

  useEffect(() => {
    let vivo = true
    void (async () => {
      try {
        if (!(await ehAdmin())) return vivo && setEstado("negado")
        const r = await resumoUsuarios()
        if (!vivo) return
        setLista(r)
        setEstado("ok")
      } catch (e) {
        if (!vivo) return
        setErro(e instanceof Error ? e.message : "Não consegui carregar.")
        setEstado("negado")
      }
    })()
    return () => {
      vivo = false
    }
  }, [])

  const totais = useMemo(
    () => ({
      usuarios: lista.length,
      ativos7: lista.filter((u) => ativoEm(u.ultima_atividade, 7)).length,
      ativos1: lista.filter((u) => ativoEm(u.ultima_atividade, 1)).length,
      novos7: lista.filter((u) => ativoEm(u.cadastro, 7)).length,
    }),
    [lista]
  )

  return (
    <main>
      <PageHeader
        title="Administração"
        lead="Uso do site por jogador. Mostra quais áreas cada um abre e contagens do que registrou, nunca o conteúdo dos leaks, stats ou painel."
      />
      <div className="mx-auto max-w-[1080px] px-5 pb-24">
        {estado === "carregando" && (
          <p className="text-muted-foreground">Carregando…</p>
        )}
        {estado === "negado" && (
          <div className="rounded-2xl border border-dashed p-5 text-muted-foreground">
            {erro || "Esta página é só para administradores."}
          </div>
        )}
        {estado === "ok" && (
          <Secao
            titulo="Usuários"
            lead="Ordenados do cadastro mais recente para o mais antigo. Aberturas contam quantas vezes a área foi aberta."
          >
            <div className="mb-5 grid [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] gap-3">
              {(
                [
                  ["Usuários", totais.usuarios],
                  ["Ativos nas últimas 24 h", totais.ativos1],
                  ["Ativos nos últimos 7 dias", totais.ativos7],
                  ["Novos nos últimos 7 dias", totais.novos7],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="rounded-[14px] border bg-card p-4">
                  <div className="text-sm text-muted-foreground">{k}</div>
                  <div className="text-3xl font-bold tabular-nums">{v}</div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl border">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead className="bg-card text-muted-foreground">
                  <tr>
                    {[
                      "E-mail",
                      "Entra por",
                      "Cadastro",
                      "Último login",
                      "Última atividade",
                      "Início",
                      "Teoria",
                      "Prática",
                      "Análise",
                      "Treinos",
                      "Leaks",
                      "Semanas",
                    ].map((h) => (
                      <th key={h} className="p-3 font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lista.map((u) => (
                    <tr key={u.email} className="border-t">
                      <th scope="row" className="p-3 text-left font-medium">
                        {u.email}
                      </th>
                      <td className="p-3">{u.provedor || "–"}</td>
                      <td className="p-3 whitespace-nowrap tabular-nums">
                        {data(u.cadastro)}
                      </td>
                      <td className="p-3 whitespace-nowrap tabular-nums">
                        {data(u.ultimo_login)}
                      </td>
                      <td className="p-3 whitespace-nowrap tabular-nums">
                        {data(u.ultima_atividade)}
                      </td>
                      <td className="p-3 tabular-nums">{u.aberturas_inicio}</td>
                      <td className="p-3 tabular-nums">{u.aberturas_teoria}</td>
                      <td className="p-3 tabular-nums">
                        {u.aberturas_pratica}
                      </td>
                      <td className="p-3 tabular-nums">
                        {u.aberturas_analise}
                      </td>
                      <td className="p-3 tabular-nums">{u.treinos}</td>
                      <td className="p-3 tabular-nums">{u.leaks}</td>
                      <td className="p-3 tabular-nums">{u.semanas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Secao>
        )}
      </div>
    </main>
  )
}
