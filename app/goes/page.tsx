import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoesSection } from "@/components/goes-section"

export default function GoesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <GoesSection />
      </main>
      <Footer />
    </div>
  )
}
