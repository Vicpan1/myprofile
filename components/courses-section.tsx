import { Check, ExternalLink, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function CoursesSection() {
  const { courses, socialLinks } = siteConfig
  const lineLink = socialLinks.find((l) => l.platform === "line")?.url

  return (
    <section id="courses" className="py-20 md:py-28 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {courses.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {courses.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {courses.sectionDescription}
          </p>
          <div className="w-12 h-1 bg-primary mt-6 rounded-full mx-auto" />
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.items.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:border-primary/50 ${
                course.highlight
                  ? "bg-card border-primary shadow-lg shadow-primary/10"
                  : "bg-card/50 border-border"
              }`}
            >
              {/* Highlight Badge */}
              {course.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    推薦課程
                  </span>
                </div>
              )}

              {/* Course Title & Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary">{course.price}</p>
                {"priceAlt" in course && course.priceAlt && (
                  <p className="text-sm text-muted-foreground mt-1">
                    或 {course.priceAlt}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  {course.duration}
                </p>
              </div>

              {/* Includes */}
              <div className="flex-1 mb-6">
                <p className="text-sm font-medium text-foreground mb-3">
                  課程包含：
                </p>
                <ul className="space-y-2">
                  {course.includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {"note" in course && course.note && (
                <p className="text-xs text-muted-foreground mb-4 italic">
                  * {course.note}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 mt-auto">
                {lineLink && (
                  <a
                    href={lineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      course.highlight
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    立即諮詢報名
                  </a>
                )}
                {"link" in course && course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    查看課程詳情
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
