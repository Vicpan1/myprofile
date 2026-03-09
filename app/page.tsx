import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { PartnersSection } from "@/components/partners-section"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"
import { LineFloatButton } from "@/components/line-float-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <PartnersSection />
      <MediaSection />
      <Footer />
      <LineFloatButton />
    </main>
  )
}
