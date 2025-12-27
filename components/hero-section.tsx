"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-secondary pt-16 md:pt-20">
      {/* Background: Sand mountain/dune landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gemini-generated-image-3cinuh3cinuh3cin.jpeg"
          alt="CF MOTO quad riding up sand dune at sunset"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main title with character-by-character reveal */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight text-balance"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="block"
            >
              ER-TECH Pradła
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
            >
              Twoje Centrum Przygody
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              i Profesjonalizmu
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 max-w-2xl leading-relaxed text-pretty"
          >
            Autoryzowany dealer i serwis quadów CF MOTO. Wybierz maszynę, która nie zna kompromisów.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl">
              Sprawdź ofertę
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground shadow-xl"
            >
              609 309 741
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-background rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
