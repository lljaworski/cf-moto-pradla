"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const brands = [
  {
    name: "CFmoto",
    slug: "cfmoto",
    description: "ATV, SSV, UTV, Motocykle",
    tagline: "Poznaj pełną gamę pojazdów CFmoto",
    image: "/cf-moto-pradla/cf-moto-cforce-625-atv-quad.jpg",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    name: "GOES",
    slug: "goes",
    description: "Quady ATV",
    tagline: "Niezawodne quady do pracy i rekreacji",
    image: "/cf-moto-pradla/placeholder.svg",
    bgColor: "from-secondary/20 to-secondary/5",
  },
]

export function BrandsGateway() {
  return (
    <section id="marki" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Nasze Marki</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wybierz markę i poznaj dostępne modele pojazdów terenowych
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link href={`/${brand.slug}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 group overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-80">
                      <img
                        src={brand.image || "/cf-moto-pradla/placeholder.svg"}
                        alt={brand.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-5xl font-bold mb-3 drop-shadow-lg">{brand.name}</h3>
                          <p className="text-lg text-white/90 mb-2 font-medium">{brand.description}</p>
                          <p className="text-sm text-white/80 mb-6">{brand.tagline}</p>
                          <div className="inline-flex items-center gap-2 text-base font-semibold bg-primary/90 hover:bg-primary px-6 py-3 rounded-lg transition-colors group-hover:scale-105 transform duration-300">
                            Poznaj ofertę
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
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
