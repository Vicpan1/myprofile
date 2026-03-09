import { siteConfig } from "@/lib/site-config"

export function PartnersSection() {
  const { partners } = siteConfig

  return (
    <section id="partners" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {partners.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {partners.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {partners.sectionDescription}
          </p>
          <div className="w-12 h-1 bg-primary mt-6 rounded-full mx-auto" />
        </div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {partners.items.map((partner, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card/50 border border-border transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              {/* Logo Placeholder - designed for future logo integration */}
              <div className="w-20 h-20 rounded-full bg-secondary/50 border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                <span className="text-2xl font-bold text-primary">
                  {partner.name.charAt(0)}
                </span>
              </div>

              {/* Partner Info */}
              <div>
                <span className="inline-block text-xs font-medium text-primary tracking-wider uppercase mb-2">
                  {partner.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
