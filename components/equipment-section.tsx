import { siteConfig } from "@/lib/site-config"

const categoryIconMap: Record<string, React.ReactNode> = {
  潛水衣: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  蛙鞋: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  ),
  個人行銷: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
}

export function EquipmentSection() {
  const { equipment } = siteConfig

  return (
    <section id="equipment" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {equipment.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {equipment.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
            {equipment.sectionDescription}
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {equipment.partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {categoryIconMap[partner.category] ?? null}
                </div>
                <span className="text-xs font-medium tracking-widest text-primary uppercase">
                  {partner.category}
                </span>
              </div>

              {/* Brand Name */}
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {partner.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {partner.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Partner Tag */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground">
                  官方合作夥伴
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
