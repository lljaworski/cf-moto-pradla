"use client"

import { motion } from "framer-motion"
import { CategoryGrid } from "@/components/category-grid"

const categories = ["atv"] as const

export function GoesSection() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              GOES
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Odkryj wytrzymałe i niezawodne quady ATV marki GOES - idealne do pracy i rekreacji w każdych warunkach terenowych.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((category) => (
        <CategoryGrid key={category} brand="goes" category={category} />
      ))}
    </>
  )
}
