import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryGrid } from "@/components/category-grid"
import { notFound } from "next/navigation"

const validCategories = ["atv"] as const
type Category = typeof validCategories[number]

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params
  
  if (!validCategories.includes(category as Category)) {
    return {}
  }

  const categoryNames: Record<Category, string> = {
    atv: "Quady ATV",
  }

  return {
    title: `GOES ${categoryNames[category as Category]} - QuadyPradła`,
    description: `Pełna oferta ${categoryNames[category as Category]} GOES. Sprawdź dostępne modele, ceny i specyfikacje.`,
  }
}

export default async function GoesCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params

  if (!validCategories.includes(category as Category)) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <CategoryGrid brand="goes" category={category as Category} />
      </main>
      <Footer />
    </div>
  )
}
