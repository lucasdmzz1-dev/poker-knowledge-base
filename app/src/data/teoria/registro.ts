import type { ModuloTeoria } from "@/data/teoria/tipos"

// Todo arquivo em ./modulos/*.ts que exporta um ModuloTeoria por padrão entra
// aqui sozinho: criar um módulo novo não exige mexer em rota nem em índice.
const arquivos = import.meta.glob<{ default: ModuloTeoria }>("./modulos/*.ts", {
  eager: true,
})

export const modulos: ModuloTeoria[] = Object.values(arquivos).map(
  (m) => m.default
)

export const moduloPorSlug: Record<string, ModuloTeoria> = Object.fromEntries(
  modulos.map((m) => [m.slug, m])
)

export const slugPorTema: Record<string, string> = Object.fromEntries(
  modulos.map((m) => [m.tema, m.slug])
)
