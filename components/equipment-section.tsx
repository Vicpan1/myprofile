import { siteConfig } from "@/lib/site-config"

export function EquipmentSection() {
  const { equipment } = siteConfig

  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {equipment.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {equipment.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {equipment.sectionDescription}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {equipment.partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors inline-block mb-1"
              >
                {partner.brand}
              </a>
              <p className="text-primary font-medium text-sm mb-3">
                {partner.subtitle}
              </p>
              <p className="text-muted-foreground text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-secondary/50 inline-block px-6 py-3 rounded-full">
            {equipment.partnerNote}
          </p>
        </div>
      </div>
    </section>
  )
}
