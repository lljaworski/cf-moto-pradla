"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Shirt, Wrench, Package } from "lucide-react"

const accessories = [
  {
    icon: Shield,
    title: "Kaski i Ochrona",
    description: "Profesjonalne kaski i ochraniacze dla maksymalnego bezpieczeństwa",
    items: ["Kaski motocyklowe", "Ochraniacze", "Gogle i okulary"],
  },
  {
    icon: Shirt,
    title: "Odzież Off-Road",
    description: "Wysokiej jakości odzież do jazdy terenowej w każdych warunkach",
    items: ["Kurtki i spodnie", "Rękawice", "Buty terenowe"],
  },
  {
    icon: Wrench,
    title: "Części Zamienne",
    description: "Oryginalne części i komponenty do pojazdów CFmoto i GOES",
    items: ["Filtry i oleje", "Hamulce", "Zawieszenie"],
  },
  {
    icon: Package,
    title: "Akcesoria Dodatkowe",
    description: "Przyczepki, pługi śnieżne i inne wyposażenie robocze",
    items: ["Przyczepki", "Pługi i lemiesze", "Wciągarki"],
  },
]

export function AccesoriesSection() {
  return (
    <section id="akcesoria" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Akcesoria i Wyposażenie
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kompleksowe wyposażenie do Twojego pojazdu - od odzieży ochronnej po specjalistyczne akcesoria robocze
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <accessory.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{accessory.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{accessory.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {accessory.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn">
                    Zapytaj o dostępność
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Nie znalazłeś tego, czego szukasz? Skontaktuj się z nami - pomożemy dobrać odpowiednie akcesoria.
          </p>
          <Button size="lg" asChild>
            <a href="#kontakt">Skontaktuj się z nami</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
