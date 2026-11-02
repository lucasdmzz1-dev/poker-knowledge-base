export function PageHeader({
  title,
  lead,
  topo,
  children,
}: {
  title: string
  lead?: string
  topo?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <header className="enter mx-auto flex max-w-[1080px] flex-col items-center px-5 pt-14 pb-10 text-center md:pt-20">
      {topo && <div className="mb-5 text-muted-foreground">{topo}</div>}
      <h1 className="max-w-[18ch] text-[clamp(2.4rem,6.4vw,5rem)] leading-[0.98] font-bold tracking-[-0.035em] text-balance">
        {title}
      </h1>
      {lead && (
        <p className="mt-5 max-w-[52ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-snug text-muted-foreground">
          {lead}
        </p>
      )}
      {children}
    </header>
  )
}
