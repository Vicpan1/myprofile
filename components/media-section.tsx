import { siteConfig } from "@/lib/site-config"

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 15v2l1.5 1" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function BroadcastIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 8.5a6 6 0 0 0-12 0" />
      <path d="M21 5a9 9 0 0 0-18 0" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 13v8" />
      <path d="M9 21h6" />
    </svg>
  )
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  trophy: TrophyIcon,
  medal: MedalIcon,
  star: StarIcon,
  broadcast: BroadcastIcon,
}

export function MediaSection() {
  const { media } = siteConfig

  return (
    <section id="media" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {media.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {media.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
            {media.sectionDescription}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.highlights.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.id}
                className="flex gap-5 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-widest text-primary uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Social CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            追蹤我的社群，掌握最新賽事動態與訓練日誌
          </p>
          <a
            href="https://www.instagram.com/mingchoupan?igsh=MTNmcnV1MHpveDl5eg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @mingchoupan
          </a>
        </div>
      </div>
    </section>
  )
}
