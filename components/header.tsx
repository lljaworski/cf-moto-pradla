"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">ER-TECH</div>
            <div className="hidden sm:block text-xs text-muted-foreground">Pradła</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#oferta" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Oferta
            </a>
            <a href="#serwis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serwis
            </a>
            <a href="#modele" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Modele
            </a>
            <a href="#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">609 309 741</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#oferta" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Oferta
              </a>
              <a href="#serwis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Serwis
              </a>
              <a href="#modele" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Modele
              </a>
              <a href="#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
