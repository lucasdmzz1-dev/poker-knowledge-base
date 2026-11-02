export function Secao({
  titulo,
  lead,
  children,
}: {
  titulo: string
  lead?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] leading-tight font-bold tracking-tight">
        {titulo}
      </h2>
      {lead && (
        <p className="mt-2 mb-5 max-w-[62ch] text-muted-foreground">{lead}</p>
      )}
      {!lead && <div className="mb-4" />}
      {children}
    </section>
  )
}

export const CAMPO =
  "h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none transition-colors focus-visible:border-primary"
