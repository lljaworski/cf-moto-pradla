"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-18 md:py-28 bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Odwiedź Nas w Pradle</h2>
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
                      <div className="flex flex-col gap-1">
                        <a href="tel:609309741" className="text-primary text-base font-semibold hover:underline">
                          609 309 741
                        </a>
                        <a href="tel:609309742" className="text-primary text-base font-semibold hover:underline">
                          609 309 742
                        </a>
                        <a href="tel:881639953" className="text-primary text-base font-semibold hover:underline">
                          881 639 953 <span className="text-muted-foreground font-normal text-sm ml-1">(serwis)</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Godziny otwarcia</h3>
                      <div className="text-muted-foreground text-[15px] grid grid-cols-[160px_1fr] gap-y-1 leading-relaxed mt-2">
                        <span>Poniedziałek - Piątek:</span>
                        <span className="font-medium text-foreground">7:00 - 20:00</span>
                        
                        <span>Sobota:</span>
                        <span className="font-medium text-foreground">8:00 - 16:00</span>
                        
                        <span>Niedziela:</span>
                        <span className="font-medium text-foreground">9:00 - 13:00</span>
                      </div>
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
