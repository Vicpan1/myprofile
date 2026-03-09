import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  const { hero } = siteConfig

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20">
        <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
          {hero.greeting}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-6">
          {hero.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-8">
          {hero.subtitle}
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          {hero.description}
        </p>
        <a
          href={hero.ctaHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          {hero.ctaText}
          <ArrowDown size={16} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
