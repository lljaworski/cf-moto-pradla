"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Autoryzowany dealer CFmoto i GOES",
  "Profesjonalny serwis ASO",
  "Pełne doradztwo i konfiguracja",
  "Wsparcie po zakupie",
  "Specjalne konfiguracje (służby, leśnictwo)",
  "Rodzinna atmosfera",
]

export function AboutSection() {
  return (
    <section id="o-nas" className="py-18 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              O Nas
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                QuadyPradła to rodzinna firma powstała z pasji do motoryzacji terenowej i aktywnego spędzania czasu
                na świeżym powietrzu. Jesteśmy autoryzowanym dealerem marek CFmoto oraz GOES, oferując sprzedaż
                pojazdów ATV, UTV oraz motocykli, a także profesjonalny serwis i doradztwo w zakresie ich użytkowania
                oraz doposażenia.
              </p>
              <p>
                W naszej działalności stawiamy przede wszystkim na indywidualne podejście do klienta, rzetelne
                doradztwo oraz pełne zaangażowanie na każdym etapie - od wyboru odpowiedniego modelu, przez
                konfigurację wyposażenia, aż po obsługę serwisową.
              </p>
              <p>
                W naszym salonie można obejrzeć różne modele quadów, pojazdów użytkowych oraz motocykli, porównać ich
                konfiguracje i spokojnie wybrać sprzęt najlepiej dopasowany do swoich potrzeb - zarówno do rekreacji,
                pracy w terenie, jak i codziennej jazdy.
              </p>
              <p>
                Przygotowujemy również pojazdy w specjalnych konfiguracjach, m.in. dla służb ratowniczych, leśnictwa
                czy firm wykorzystujących pojazdy w trudnym terenie. Jako firma rodzinna dbamy o to, aby każdy klient
                czuł się u nas swobodnie i miał pewność, że otrzyma sprawdzony sprzęt, fachową pomoc oraz wsparcie
                także po zakupie pojazdu.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Dlaczego My?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
