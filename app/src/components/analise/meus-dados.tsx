import { useState } from "react"
import { Button } from "@/components/ui/button"
import { analiseVazia, baixarBackup, restaurarBackup } from "@/lib/backup"

export function PrimeirosPassos({ aoComecar }: { aoComecar: () => void }) {
  if (!analiseVazia()) return null
  return (
    <div className="mb-8 rounded-2xl border border-primary/50 bg-card/50 p-5">
      <h2 className="mb-2 text-lg font-bold">Por onde começar</h2>
      <ol className="grid max-w-[70ch] list-decimal gap-1 pl-5 text-muted-foreground">
        <li>Em Leaks do mês, suba os prints do HUD do mês.</li>
        <li>
          Use "Ler os prints com o Claude" (com a sua chave da API) ou digite em
          "Editar valores".
        </li>
        <li>Gere os leaks pelas metas e escolha os que vai trabalhar.</li>
        <li>
          Leve os escolhidos para o painel semanal e acompanhe semana a semana.
        </li>
      </ol>
      <p className="mt-3 max-w-[70ch] text-sm text-muted-foreground">
        Tudo fica só neste navegador. Para não perder nada ou trocar de
        aparelho, use "Exportar meus dados" e "Importar" no fim da página.
      </p>
      <Button className="mt-4 px-5 font-bold" onClick={aoComecar}>
        Começar pelos prints
      </Button>
    </div>
  )
}

export function MeusDados() {
  const [aviso, setAviso] = useState("")
  const [erro, setErro] = useState(false)

  async function importar(arquivo: File) {
    try {
      const n = await restaurarBackup(arquivo)
      setErro(false)
      setAviso(`Backup restaurado (${n} conjuntos de dados). Recarregando…`)
      setTimeout(() => window.location.reload(), 600)
    } catch (e) {
      setErro(true)
      setAviso(e instanceof Error ? e.message : "Não consegui importar.")
    }
  }

  return (
    <div className="mt-16 rounded-2xl border p-5">
      <h2 className="mb-1 font-bold">Meus dados</h2>
      <p className="mb-3 max-w-[70ch] text-sm text-muted-foreground">
        A Análise guarda tudo neste navegador: stats, leaks e painel. Exporte um
        arquivo de vez em quando; ele serve de backup e para abrir os mesmos
        dados em outro aparelho. A chave da API e os prints não entram no
        arquivo. Importar substitui os dados atuais.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" className="h-10 px-4" onClick={baixarBackup}>
          Exportar meus dados
        </Button>
        <label className="inline-flex h-10 cursor-pointer items-center rounded-lg border px-4 text-sm font-medium hover:bg-card">
          Importar
          <input
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void importar(f)
              e.target.value = ""
            }}
          />
        </label>
        <span
          role="status"
          className={erro ? "text-sm text-destructive" : "text-sm text-primary"}
        >
          {aviso}
        </span>
      </div>
    </div>
  )
}
