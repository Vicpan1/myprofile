import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function AboutSection() {
  const { about, profileImage } = siteConfig

  return (
    <section id="about" className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {about.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {about.sectionTitle}
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Profile Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            {/* Introduction */}
            <div className="flex flex-col gap-4">
              {about.introduction.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                {about.philosophy.title}
              </h3>
              <div className="flex flex-col gap-3">
                {about.philosophy.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border"
                  >
                    <span className="text-primary font-bold text-lg">{item.label}</span>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                {about.experience.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {about.experience.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Records Section */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            {about.recordsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {about.records.map((record) => (
              <div
                key={record.label}
                className="relative flex flex-col items-center p-8 rounded-xl bg-card border border-border"
              >
                {record.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                    {record.tag}
                  </span>
                )}
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {record.value}
                </p>
                <p className="text-sm text-muted-foreground tracking-wider">
                  {record.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
