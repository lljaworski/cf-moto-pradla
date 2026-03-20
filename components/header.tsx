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
          <a href="/cf-moto-pradla/" className="flex items-center gap-2 md:gap-3">
            <img src="/cf-moto-pradla/images/logo.jpg" alt="QuadyPradła Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-bold text-foreground">QuadyPradła</div>
              <div className="hidden sm:block text-[10px] md:text-xs text-muted-foreground -mt-1">Autoryzowany Dealer CFmoto & GOES</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/cf-moto-pradla/#o-nas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              O Nas
            </a>
            <a href="/cf-moto-pradla/cfmoto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              CFmoto
            </a>
            <a href="/cf-moto-pradla/goes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              GOES
            </a>
            <a href="/cf-moto-pradla/#serwis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serwis
            </a>
            <a href="/cf-moto-pradla/#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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
              <a href="/cf-moto-pradla/#o-nas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                O Nas
              </a>
              <a href="/cf-moto-pradla/cfmoto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                CFmoto
              </a>
              <a href="/cf-moto-pradla/goes" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                GOES
              </a>
              <a href="/cf-moto-pradla/#serwis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Serwis
              </a>
              <a href="/cf-moto-pradla/#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
