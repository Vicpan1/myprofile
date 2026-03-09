import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

function LineSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

function InstagramSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const socialIconMap: Record<string, React.FC<{ className?: string }>> = {
  line: LineSvg,
  instagram: InstagramSvg,
}

export function AboutSection() {
  const { about, profileImage, socialLinks, brand } = siteConfig

  return (
    <section id="about" className="min-h-screen">
      {/* Profile Image -- full-width hero-style banner */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={profileImage.src}
          alt={profileImage.alt}
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient fade into the content below */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Name overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              {brand.copyright}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform]
                if (!Icon) return null
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Section Label */}
        <div className="mb-10">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {about.sectionLabel}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {about.sectionTitle}
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
        </div>

        {/* Introduction */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-14">
          {about.introduction}
        </p>

        {/* Personal Best Records */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-5">
            {about.recordsTitle}
          </h3>
          <div className="flex flex-col gap-3">
            {about.records.map((record) => (
              <div
                key={record.label}
                className="flex items-center justify-between p-5 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="flex items-center gap-4">
                  <p className="text-sm font-medium text-muted-foreground w-24 md:w-28 tracking-wide">
                    {record.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {record.value}
                  </p>
                </div>
                {record.tag && (
                  <span className="text-[10px] font-bold tracking-wider bg-primary/20 text-primary px-2.5 py-1 rounded-full">
                    {record.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
