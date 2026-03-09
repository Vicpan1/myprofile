import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { EquipmentSection } from "@/components/equipment-section"
import { MediaSection } from "@/components/media-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { LineFloatButton } from "@/components/line-float-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <EquipmentSection />
      <MediaSection />
      <BlogSection />
      <Footer />
      <LineFloatButton />
    </main>
  )
}
