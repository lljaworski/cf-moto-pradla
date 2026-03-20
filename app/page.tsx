import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BrandsGateway } from "@/components/brands-gateway"
import { AccesoriesSection } from "@/components/accesories-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrandsGateway />
        <AccesoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
