import { Trophy, Briefcase, Newspaper } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const typeIconMap = {
  competition: Trophy,
  brand: Briefcase,
  media: Newspaper,
}

const typeLabelMap = {
  competition: "賽事",
  brand: "品牌合作",
  media: "媒體報導",
}

export function MediaSection() {
  const { media } = siteConfig

  return (
    <section id="media" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {media.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {media.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {media.sectionDescription}
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {media.items.map((item, idx) => {
            const Icon = typeIconMap[item.type]
            const label = typeLabelMap[item.type]

            return (
              <div
                key={idx}
                className="group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded-full">
                      {label}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
