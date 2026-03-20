import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CFMotoSection } from "@/components/cfmoto-section"

export default function CFMotoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <CFMotoSection />
      </main>
      <Footer />
    </div>
  )
}
