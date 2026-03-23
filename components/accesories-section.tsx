"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Shirt, 
  Wrench, 
  Package, 
  Zap, 
  Mountain, 
  Droplets, 
  Wind,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react"

const accessories = [
  {
    icon: Shield,
    title: "Kaski i Ochrona",
    description: "Profesjonalne kaski i ochraniacze dla maksymalnego bezpieczeństwa",
    gradient: "from-red-500 to-orange-600",
    bgGradient: "from-red-500/10 via-orange-500/10 to-red-500/5",
    items: [
      { icon: CheckCircle2, text: "Kaski motocyklowe" },
      { icon: CheckCircle2, text: "Ochraniacze korpusu" },
      { icon: CheckCircle2, text: "Gogle i okulary" }
    ],
    badge: "Bezpieczeństwo",
    badgeIcon: Shield,
  },
  {
    icon: Shirt,
    title: "Odzież Off-Road",
    description: "Wysokiej jakości odzież do jazdy terenowej w każdych warunkach",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/5",
    items: [
      { icon: Wind, text: "Kurtki i spodnie" },
      { icon: Mountain, text: "Rękawice terenowe" },
      { icon: Droplets, text: "Buty wodoodporne" }
    ],
    badge: "Komfort",
    badgeIcon: Wind,
  },
  {
    icon: Wrench,
    title: "Części Zamienne",
    description: "Oryginalne części i komponenty do pojazdów CFmoto i GOES",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 via-emerald-500/10 to-green-500/5",
    items: [
      { icon: Zap, text: "Filtry i oleje" },
      { icon: CheckCircle2, text: "Hamulce" },
      { icon: CheckCircle2, text: "Zawieszenie" }
    ],
    badge: "Jakość",
    badgeIcon: Sparkles,
  },
  {
    icon: Package,
    title: "Akcesoria Dodatkowe",
    description: "Przyczepki, pługi śnieżne i inne wyposażenie robocze",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-purple-500/5",
    items: [
      { icon: CheckCircle2, text: "Przyczepki robocze" },
      { icon: Mountain, text: "Pługi i lemiesze" },
      { icon: Zap, text: "Wciągarki" }
    ],
    badge: "Funkcjonalność",
    badgeIcon: Mountain,
  },
]

export function AccesoriesSection() {
  return (
    <section id="akcesoria" className="py-18 md:py-28 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500" />
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
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-orange-500/20 text-primary text-sm font-semibold tracking-wide uppercase border border-primary/20">
              Pełne wyposażenie quad & ATV
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Akcesoria i Wyposażenie
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompleksowe wyposażenie do Twojego pojazdu - od odzieży ochronnej po specjalistyczne akcesoria robocze
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br ${accessory.bgGradient} backdrop-blur-sm relative overflow-hidden group-hover:scale-[1.02] flex flex-col`}>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${accessory.gradient} text-white text-xs font-semibold shadow-lg`}>
                    <accessory.badgeIcon className="w-3 h-3" />
                    <span>{accessory.badge}</span>
                  </div>
                </div>

                <CardHeader className="relative pb-4">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${accessory.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-background/95 flex items-center justify-center">
                      <accessory.icon className="w-8 h-8 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {accessory.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {accessory.description}
                  </p>
                </CardHeader>

                <CardContent className="relative pt-0 flex flex-col flex-1">
                  {/* Items list with icons */}
                  <ul className="space-y-3 mb-6">
                    {accessory.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground flex items-center gap-3 group/item"
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${accessory.gradient} p-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                          <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                            <item.icon className="w-3 h-3 text-primary" strokeWidth={2.5} />
                          </div>
                        </div>
                        <span className="text-foreground font-medium">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button 
                    variant="outline" 
                    className={`w-full group/btn border-2 hover:border-primary/50 hover:bg-gradient-to-r ${accessory.gradient} hover:text-white transition-all duration-300 mt-auto`}
                  >
                    <span>Zapytaj o dostępność</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  Nie znalazłeś tego, czego szukasz?
                </p>
                <p className="text-xs text-muted-foreground">
                  Pomożemy dobrać odpowiednie akcesoria
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 shadow-lg" asChild>
              <a href="#kontakt" className="flex items-center gap-2">
                Skontaktuj się z nami
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
