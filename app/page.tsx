import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { EquipmentSection } from "@/components/equipment-section"
import { MediaSection } from "@/components/media-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutSection />
      <CoursesSection />
      <EquipmentSection />
      <MediaSection />
      <Footer />
    </main>
  )
}
