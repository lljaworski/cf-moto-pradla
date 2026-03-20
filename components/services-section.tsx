"use client"

import { ShoppingCart, Wrench, Shirt } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: ShoppingCart,
    title: "Sprzedaż Pojazdów",
    description: "Pełna oferta CFmoto i GOES - quady ATV, UTV, SSV i motocykle dostępne od ręki.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Wrench,
    title: "Autoryzowany Serwis ASO",
    description: "Profesjonalna diagnostyka, naprawy gwarancyjne i konserwacja pojazdów terenowych.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Shirt,
    title: "Akcesoria i Wyposażenie",
    description: "Kompleksowy asortyment: od kasków i odzieży po przyczepki i wyposażenie robocze.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
]

export function ServicesSection() {
  return (
    <section id="serwis" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kompleksowe Wsparcie dla Pasjonatów
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Od sprzedaży po serwis – wszystko w jednym miejscu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 shadow-md bg-background">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-lg ${service.iconBg} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
