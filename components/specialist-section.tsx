"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function SpecialistSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sprzęt do Zadań Specjalnych
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              W naszej ofercie znajdziesz nie tylko quady, ale również wytrzymałe przyczepki oraz specjalistyczne
              akcesoria ogrodnicze, które zamienią Twojego quada w wielozadaniowe narzędzie pracy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Przyczepki</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Akcesoria ogrodnicze</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">Narzędzia robocze</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-2 shadow-lg rounded-lg">
              <CardContent className="p-0">
                <img
                  src="/atv-quad-with-trailer-work-equipment.jpg"
                  alt="Quad z przyczepką"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
