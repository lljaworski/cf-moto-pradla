"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getProductsByBrandAndCategory, type Brand, type Category } from "@/lib/products"

interface CategoryGridProps {
  brand: Brand
  category: string
}

// Temporary placeholder data - will be replaced with real data from lib/products.ts
const getCategoryTitle = (brand: string, category: string) => {
  const titles: Record<string, Record<string, string>> = {
    cfmoto: {
      atv: "Quady ATV CFmoto",
      ssv: "Pojazdy SSV CFmoto",
      utv: "Pojazdy UTV CFmoto",
      motocykle: "Motocykle CFmoto",
    },
    goes: {
      atv: "Quady ATV GOES",
    },
  }
  return titles[brand]?.[category] || "Produkty"
}

const getCategoryDescription = (brand: string, category: string) => {
  const descriptions: Record<string, Record<string, string>> = {
    cfmoto: {
      atv: "Niezawodne quady ATV do rekreacji i pracy. Seria CFORCE łączy moc, wytrzymałość i nowoczesne technologie.",
      ssv: "Sportowe pojazdy side-by-side zaprojektowane do ekstremalnej jazdy terenowej.",
      utv: "Użytkowe pojazdy terenowe idealne do pracy, transportu i rekreacji. Seria UFORCE to gwarancja niezawodności.",
      motocykle: "Motocykle terenowe i miejskie CFmoto - nowoczesna technologia w przystępnej cenie.",
    },
    goes: {
      atv: "Wytrzymałe quady ATV marki GOES - niezawodne pojazdy do pracy i rekreacji w każdych warunkach.",
    },
  }
  return descriptions[brand]?.[category] || ""
}

export function CategoryGrid({ brand, category }: CategoryGridProps) {
  const title = getCategoryTitle(brand, category)
  const description = getCategoryDescription(brand, category)
  const backUrl = brand === "cfmoto" ? "/cfmoto" : "/goes"
  
  // Get real products from lib/products.ts
  const products = getProductsByBrandAndCategory(brand, category as Category)
  
  // If no products available, show placeholder
  const displayProducts = products.length > 0 ? products : [
    {
      id: "placeholder",
      name: "Model dostępny wkrótce",
      image: "/cf-moto-pradla/placeholder.svg",
      description: "Szczegóły produktu będą dostępne wkrótce. Skontaktuj się z nami, aby uzyskać więcej informacji.",
      specs: [],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href={backUrl}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Powrót do {brand.toUpperCase()}
          </Link>

          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group overflow-hidden shadow-md bg-background p-0">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 block"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-xl mb-3">{product.name}</CardTitle>
                    {product.description && (
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    )}
                    {"specs" in product && product.specs && product.specs.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.specs.map((spec) => (
                          <span
                            key={typeof spec === "string" ? spec : spec.label}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {typeof spec === "string" ? spec : `${spec.label}: ${spec.value}`}
                          </span>
                        ))}
                      </div>
                    )}
                    <Button variant="ghost" className="w-full group/btn">
                      Zapytaj o dostępność
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Zainteresowany? Odwiedź nasz salon lub skontaktuj się z nami, aby poznać szczegóły i umówić jazdę próbną.
          </p>
          <Button size="lg" asChild>
            <a href="/cf-moto-pradla/#kontakt">Skontaktuj się z nami</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
