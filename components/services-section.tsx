"use client"

import { ShoppingCart, Wrench, Shirt, Bike, Award, Clock, MapPin, Headphones, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: ShoppingCart,
    title: "Sprzedaż Pojazdów",
    description: "Pełna oferta CFmoto i GOES - quady ATV, UTV, SSV i motocykle dostępne od ręki.",
    gradient: "from-orange-500/10 via-red-500/10 to-orange-500/10",
    iconGradient: "from-orange-500 to-red-600",
    features: [
      { icon: Bike, text: "Pojazdy od ręki" },
      { icon: Award, text: "Gwarancja 2 lata" },
      { icon: MapPin, text: "Jazdy testowe" },
    ],
  },
  {
    icon: Wrench,
    title: "Autoryzowany Serwis ASO",
    description: "Profesjonalna diagnostyka, naprawy gwarancyjne i konserwacja pojazdów terenowych.",
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    iconGradient: "from-blue-500 to-cyan-600",
    features: [
      { icon: Award, text: "Serwis ASO" },
      { icon: Wrench, text: "Oryginalne części" },
      { icon: Clock, text: "Szybka realizacja" },
    ],
  },
  {
    icon: Shirt,
    title: "Akcesoria i Wyposażenie",
    description: "Kompleksowy asortyment: od kasków i odzieży po przyczepki i wyposażenie robocze.",
    gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    iconGradient: "from-green-500 to-emerald-600",
    features: [
      { icon: CheckCircle2, text: "Pełne wyposażenie" },
      { icon: Award, text: "Sprawdzone marki" },
      { icon: Headphones, text: "Doradztwo fachowe" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="serwis" className="py-18 md:py-28 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Twój Partner Off-Road
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kompleksowe Wsparcie dla Pasjonatów
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Od sprzedaży po serwis – wszystko w jednym miejscu. Twoja przygoda zaczyna się tutaj.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br ${service.gradient} backdrop-blur-sm relative overflow-hidden flex flex-col`}>
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <CardContent className="p-8 relative flex flex-col flex-1">
                  {/* Icon with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.iconGradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-background/95 flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-border/50 mt-auto">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm group/item"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.iconGradient} p-0.5 group-hover/item:scale-110 transition-transform`}>
                          <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                            <feature.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                          </div>
                        </div>
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">
              Ponad 10 lat doświadczenia w branży off-road
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
