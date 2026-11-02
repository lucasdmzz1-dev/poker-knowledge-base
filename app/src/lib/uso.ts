import { enviarEvento, nuvemAtiva } from "@/lib/nuvem"

// Registra qual área o jogador abriu (início, teoria, prática ou análise), sem
// conteúdo nenhum. O administrador vê só as contagens, na página /admin.
const AREAS = ["teoria", "pratica", "analise"] as const
const REPETICAO_MS = 30_000

function areaDoEndereco(): string | null {
  const caminho = window.location.hash.replace(/^#\/?/, "").split("/")[0]
  if (caminho === "") return "inicio"
  if ((AREAS as readonly string[]).includes(caminho)) return caminho
  return null
}

export function comecarRegistroDeUso(): () => void {
  if (!nuvemAtiva) return () => {}
  let ultima = ""
  let quando = 0
  const registrar = () => {
    const area = areaDoEndereco()
    if (!area) return
    const agora = Date.now()
    if (area === ultima && agora - quando < REPETICAO_MS) return
    ultima = area
    quando = agora
    void enviarEvento(area).catch(() => {})
  }
  registrar()
  window.addEventListener("hashchange", registrar)
  return () => window.removeEventListener("hashchange", registrar)
}
