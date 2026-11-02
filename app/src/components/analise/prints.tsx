import { useCallback, useEffect, useState } from "react"
import {
  adicionarPrint,
  listarPrints,
  removerPrint,
  type Print,
} from "@/lib/prints"
import { rotuloMes } from "@/lib/analise"
import { cn } from "@/lib/utils"

interface Item {
  print: Print
  url: string
}

export function PrintsDoMes({ mes }: { mes: string }) {
  const [itens, setItens] = useState<Item[]>([])
  const [aberta, setAberta] = useState<Item | null>(null)
  const [arrastando, setArrastando] = useState(false)
  const [erro, setErro] = useState("")

  const carregar = useCallback(async () => {
    try {
      const lista = await listarPrints(mes)
      setItens((antigos) => {
        antigos.forEach((i) => URL.revokeObjectURL(i.url))
        return lista.map((p) => ({
          print: p,
          url: URL.createObjectURL(p.blob),
        }))
      })
      setErro("")
    } catch {
      setErro(
        "Este navegador não deixou guardar imagens. Os prints não vão ficar salvos."
      )
    }
  }, [mes])

  useEffect(() => {
    void carregar()
  }, [carregar])

  useEffect(() => {
    if (!aberta) return
    const fecha = (e: KeyboardEvent) => e.key === "Escape" && setAberta(null)
    document.addEventListener("keydown", fecha)
    return () => document.removeEventListener("keydown", fecha)
  }, [aberta])

  async function receber(arquivos: FileList | File[]) {
    const imagens = Array.from(arquivos).filter((a) =>
      a.type.startsWith("image/")
    )
    if (imagens.length === 0) {
      setErro("Escolha arquivos de imagem (PNG, JPG ou WEBP).")
      return
    }
    try {
      for (const img of imagens) await adicionarPrint(mes, img)
      await carregar()
    } catch {
      setErro("Não consegui guardar o print. Tente de novo.")
    }
  }

  async function remover(id: string) {
    try {
      await removerPrint(id)
      setAberta(null)
      await carregar()
    } catch {
      setErro("Não consegui remover o print.")
    }
  }

  return (
    <div className="mb-8">
      <h3 className="mb-2 font-bold">Prints de {rotuloMes(mes)}</h3>
      <label
        onDragOver={(e) => {
          e.preventDefault()
          setArrastando(true)
        }}
        onDragLeave={() => setArrastando(false)}
        onDrop={(e) => {
          e.preventDefault()
          setArrastando(false)
          void receber(e.dataTransfer.files)
        }}
        className={cn(
          "grid cursor-pointer place-items-center gap-1 rounded-2xl border border-dashed px-5 py-7 text-center transition-colors duration-150",
          arrastando ? "border-primary bg-secondary" : "hover:border-primary"
        )}
      >
        <span className="font-medium">
          Arraste os prints do mês até aqui ou clique para escolher
        </span>
        <span className="text-sm text-muted-foreground">
          Ficam guardados só neste navegador. Para extrair os números, use "Ler
          os prints com o Claude" logo abaixo.
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => {
            if (e.target.files) void receber(e.target.files)
            e.target.value = ""
          }}
        />
      </label>
      <p role="alert" className="mt-2 min-h-5 text-sm text-destructive">
        {erro}
      </p>

      {itens.length > 0 && (
        <ul className="mt-2 grid [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))] gap-3">
          {itens.map((i) => (
            <li key={i.print.id}>
              <button
                type="button"
                onClick={() => setAberta(i)}
                aria-label={`Abrir o print ${i.print.nome}`}
                className="block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl border bg-card transition-[border-color,transform] duration-150 hover:border-primary active:scale-[0.98]"
              >
                <img
                  src={i.url}
                  alt={i.print.nome}
                  className="size-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {aberta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Print ${aberta.print.nome}`}
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
          onClick={() => setAberta(null)}
        >
          <div
            className="grid max-h-full max-w-full gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={aberta.url}
              alt={aberta.print.nome}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            <div className="flex justify-center gap-3">
              <button
                type="button"
                autoFocus
                className="cursor-pointer rounded-full border bg-card px-5 py-2 text-sm font-medium"
                onClick={() => setAberta(null)}
              >
                Fechar
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full border border-destructive bg-card px-5 py-2 text-sm font-medium text-destructive"
                onClick={() => void remover(aberta.print.id)}
              >
                Remover print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
