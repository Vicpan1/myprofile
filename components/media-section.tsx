import { Trophy, Award, Handshake } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "賽事成就": Trophy,
  "賽事經歷": Award,
  "品牌代言": Handshake,
}

export function MediaSection() {
  const { media } = siteConfig

  return (
    <section id="media" className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {media.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {media.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {media.sectionDescription}
          </p>
          <div className="w-12 h-1 bg-primary mt-6 rounded-full mx-auto" />
        </div>

        {/* Media Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {media.items.map((item, index) => {
            const Icon = iconMap[item.type] || Trophy
            return (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-card/50 border border-border transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <span className="inline-block text-xs font-medium text-primary tracking-wider uppercase mb-2">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
