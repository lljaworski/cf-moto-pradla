"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    slug: "atv",
    name: "Quady ATV",
    description: "Niezawodne quady GOES do rekreacji i pracy w terenie",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/CFMOTO_GOES_Terrox-500-2.webp",
    count: "Szeroki wybór modeli",
  },
]

export function GoesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            GOES
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Odkryj wytrzymałe i niezawodne quady ATV marki GOES - idealne do pracy i rekreacji w każdych warunkach terenowych.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/goes/${category.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-96">
                      <img
                        src={category.image || "/cf-moto-pradla/placeholder.svg"}
                        alt={category.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                        <p className="text-base text-white/90 mb-4">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/80">{category.count}</span>
                          <div className="flex items-center gap-2 text-base font-medium">
                            Zobacz modele
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
