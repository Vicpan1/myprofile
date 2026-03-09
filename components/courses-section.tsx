import { Check, Star, Quote, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function CoursesSection() {
  const { courses, socialLinks } = siteConfig
  const lineLink = socialLinks.find((l) => l.platform === "line")?.url || "#"

  return (
    <section id="courses" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
            {courses.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {courses.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {courses.sectionDescription}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {courses.categories.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col p-6 rounded-2xl bg-card border ${
                course.popular ? "border-primary" : "border-border"
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Star size={12} fill="currentColor" />
                    熱門課程
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{course.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                </div>
                {"priceAlt" in course && course.priceAlt && (
                  <p className="text-sm text-primary mt-1">{course.priceAlt}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">{course.duration}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {"note" in course && course.note && (
                <p className="text-xs text-muted-foreground italic mb-4 px-2 py-2 bg-secondary/50 rounded-lg">
                  {course.note}
                </p>
              )}

              {"hasDetailLink" in course && course.hasDetailLink && courses.detailsLink && (
                <a
                  href={courses.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 mb-3 text-sm text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink size={14} />
                  {courses.detailsLinkText}
                </a>
              )}

              <a
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 text-center font-medium rounded-lg transition-colors ${
                  course.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                立即報名
              </a>
            </div>
          ))}
        </div>

        {/* Details Link */}
        {courses.detailsLink && (
          <div className="text-center mb-20">
            <a
              href={courses.detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink size={16} />
              {courses.detailsLinkText}
            </a>
          </div>
        )}

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            {courses.testimonials.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.testimonials.items.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-card border border-border"
              >
                <Quote size={24} className="text-primary/20 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
