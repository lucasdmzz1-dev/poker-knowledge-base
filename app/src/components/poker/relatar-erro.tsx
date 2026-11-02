import { useState } from "react"
import { Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { enviarRelato, type Destino } from "@/lib/relatos"

// Botão pequeno do canto de baixo do card de resultado. Abre uma aba curta para o
// jogador contar o que achou errado na questão e enviar. Padrão de todos os temas.
export function RelatarErro({
  tema,
  questao,
  contexto,
}: {
  tema: string
  questao: string
  contexto: Record<string, string>
}) {
  const [aberto, setAberto] = useState(false)
  const [texto, setTexto] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState("")
  const [feito, setFeito] = useState<Destino | null>(null)

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    const comentario = texto.trim()
    if (!comentario) {
      setErro("Conte o que está errado na questão.")
      return
    }
    setErro("")
    setEnviando(true)
    try {
      setFeito(await enviarRelato({ tema, questao, comentario, contexto }))
    } catch (err) {
      setErro(
        err instanceof Error ? err.message : "Não deu certo. Tente de novo."
      )
    } finally {
      setEnviando(false)
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="self-end text-muted-foreground"
        aria-expanded={aberto}
        onClick={() => setAberto((v) => !v)}
      >
        <Flag aria-hidden="true" /> Relatar erro
      </Button>
      {aberto && (
        <div className="basis-full rounded-xl border bg-background/60 p-4">
          {feito ? (
            <p role="status" className="text-muted-foreground">
              Obrigado! O relato foi{" "}
              {feito === "nuvem"
                ? "enviado."
                : "salvo neste aparelho. Entre na sua conta para enviar."}
            </p>
          ) : (
            <form onSubmit={enviar} className="grid gap-3">
              <label htmlFor="relato-erro" className="font-medium">
                O que está errado nesta questão?
              </label>
              <textarea
                id="relato-erro"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                rows={3}
                maxLength={1000}
                placeholder="Conte o que você achou errado e qual seria a ação certa."
                className="w-full resize-y rounded-lg border bg-card p-3 text-base outline-none focus-visible:border-primary"
              />
              <p role="alert" className="min-h-5 text-sm text-destructive">
                {erro}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button type="submit" size="sm" disabled={enviando}>
                  {enviando ? "Enviando…" : "Enviar"}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => setAberto(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}
