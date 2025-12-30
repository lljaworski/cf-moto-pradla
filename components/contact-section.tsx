"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Odwiedź Nas w Pradle</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Zapraszamy do naszego salonu i serwisu</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Adres</h3>
                      <p className="text-muted-foreground">
                        Wyzwolenia 90
                        <br />
                        42-425 Pradła
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                      <a href="tel:609309741" className="text-primary text-lg font-semibold hover:underline">
                        609 309 741
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Zaufanie klientów</h3>
                      <p className="text-muted-foreground">
                        Średnia ocena <span className="font-bold text-foreground">4.6/5</span>
                        <br />
                        Ponad <span className="font-bold text-foreground">4600 opinii</span>
                      </p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full mt-6">
                    Umów wizytę
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-2 shadow-lg p-0">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=Wyzwolenia+90,+42-425+Pradła,+Poland&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji CF MOTO Pradła"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
