"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Modele CF MOTO</h2>
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group overflow-hidden shadow-md bg-background">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-xl mb-3">{product.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    Dowiedz się więcej
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
