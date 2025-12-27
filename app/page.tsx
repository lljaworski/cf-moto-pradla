import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SpecialistSection } from "@/components/specialist-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SpecialistSection />
        <ProductShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
