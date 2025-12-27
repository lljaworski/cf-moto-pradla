"use client"

import { ShoppingCart, Wrench, Shirt } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: ShoppingCart,
    title: "Sprzedaż Quadów",
    description: "Nowe modele CF MOTO dostępne od ręki.",
    bgColor: "bg-[#2d5016]", // Deep Forest Green
    iconBg: "bg-[#4a7c2a]/20",
    iconColor: "text-[#6da83e]",
  },
  {
    icon: Wrench,
    title: "Autoryzowany Serwis ASO",
    description: "Profesjonalna diagnostyka i naprawy gwarancyjne.",
    bgColor: "bg-[#8b6f47]", // Warm Earthy Brown
    iconBg: "bg-[#b89968]/20",
    iconColor: "text-[#d4b483]",
  },
  {
    icon: Shirt,
    title: "Akcesoria i Odzież",
    description: "Wszystko, czego potrzebujesz: od kasków po profesjonalny ubiór off-road.",
    bgColor: "bg-[#5c6b3d]", // Moss Green
    iconBg: "bg-[#7d8f5a]/20",
    iconColor: "text-[#9fb876]",
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
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 border-2 shadow-md ${service.bgColor}`}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-lg ${service.iconBg} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-100 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
