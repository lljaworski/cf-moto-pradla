"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "CFORCE 625",
    image: "/cf-moto-pradla/cf-moto-cforce-625-atv-quad.jpg",
    specs: ["625cc", "4x4", "EPS"],
  },
  {
    name: "CFORCE 850",
    image: "/cf-moto-pradla/cf-moto-cforce-850-atv-quad.jpg",
    specs: ["850cc", "4x4", "EPS"],
  },
  {
    name: "CFORCE 1000",
    image: "/cf-moto-pradla/cf-moto-cforce-1000-atv-quad.jpg",
    specs: ["1000cc", "4x4", "EPS"],
  },
  {
    name: "UFORCE 1000",
    image: "/cf-moto-pradla/cf-moto-uforce-1000-utv-side-by-side.jpg",
    specs: ["1000cc", "UTV", "2-seater"],
  },
]

export function ProductShowcase() {
  return (
    <section id="modele" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Modele CF MOTO</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Wybierz model dopasowany do Twoich potrzeb</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={product.image || "/cf-moto-pradla/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                      <Button variant="secondary" className="w-full group/btn">
                        Dowiedz się więcej
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
