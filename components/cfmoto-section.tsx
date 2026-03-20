"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    slug: "atv",
    name: "Quady ATV",
    description: "Wytrzymałe quady terenowe do rekreacji i pracy",
    image: "/cf-moto-pradla/cf-moto-cforce-625-atv-quad.jpg",
    count: "Szeroki wybór modeli",
  },
  {
    slug: "ssv",
    name: "Pojazdy SSV",
    description: "Sportowe pojazdy side-by-side do ekstremalnej jazdy",
    image: "/cf-moto-pradla/placeholder.svg",
    count: "Dostępne wkrótce",
  },
  {
    slug: "utv",
    name: "Pojazdy UTV",
    description: "Użytkowe pojazdy terenowe do pracy i transportu",
    image: "/cf-moto-pradla/cf-moto-uforce-1000-utv-side-by-side.jpg",
    count: "Sprawdź modele",
  },
  {
    slug: "motocykle",
    name: "Motocykle",
    description: "Motocykle terenowe i miejskie",
    image: "/cf-moto-pradla/placeholder.svg",
    count: "Dostępne wkrótce",
  },
]

export function CFMotoSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            CFmoto
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Poznaj pełną gamę pojazdów CFmoto - od quadów ATV, przez użytkowe UTV, po sportowe SSV i motocykle.
            Wybierz kategorię i znajdź model idealny dla siebie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/cfmoto/${category.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={category.image || "/cf-moto-pradla/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-sm text-white/90 mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/80">{category.count}</span>
                          <div className="flex items-center gap-2 text-sm font-medium">
                            Zobacz modele
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
