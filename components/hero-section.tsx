import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image -- swap by changing hero.backgroundImage in site-config.ts */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            {hero.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            {hero.titleLine1}
            <br />
            <span className="text-primary">{hero.titleLine2}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              了解更多
            </a>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
            >
              閱讀文章
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="向下捲動">
          <ChevronDown className="text-muted-foreground" size={28} />
        </a>
      </div>
    </section>
  )
}
