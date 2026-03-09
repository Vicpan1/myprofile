import { Check, ExternalLink, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function CoursesSection() {
  const { courses } = siteConfig

  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {courses.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {courses.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
            {courses.sectionDescription}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {courses.items.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                course.highlight
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {/* Highlight Badge */}
              {course.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                    推薦
                  </span>
                </div>
              )}

              {/* Type Badge */}
              <div className="mb-5">
                <span className="text-xs font-medium tracking-widest text-primary uppercase">
                  {course.typeEn}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">
                  {course.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-2xl font-bold text-foreground">
                  {course.price}
                </p>
                {"priceSub" in course && course.priceSub && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {course.priceSub}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  {course.duration}
                </p>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {"note" in course && course.note && (
                <p className="text-xs text-muted-foreground italic mb-4">
                  * {course.note}
                </p>
              )}

              {/* CTA */}
              <a
                href={course.ctaHref}
                target={course.ctaExternal ? "_blank" : undefined}
                rel={course.ctaExternal ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  course.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {course.id === "specialty" ? (
                  <MessageCircle size={16} />
                ) : course.ctaExternal ? (
                  <ExternalLink size={16} />
                ) : null}
                {course.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
