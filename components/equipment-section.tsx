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

        {/* Equipment Categories */}
        <div className="flex flex-col gap-12">
          {equipment.categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-primary font-medium text-sm">{item.brand}</p>
                        <h4 className="text-lg font-bold text-foreground">{item.model}</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
