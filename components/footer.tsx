export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12 border-t border-primary-foreground/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:border-r md:border-primary-foreground/30 md:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <img src="/cf-moto-pradla/images/logo.png" alt="QuadyPradła Logo" className="h-20 w-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">QuadyPradła</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Autoryzowany dealer CFmoto i GOES
              <br />
              Sprzedaż, Serwis ASO, Akcesoria
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Marki</h4>
            <div className="space-y-2 text-sm">
              <a href="/cf-moto-pradla/cfmoto" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                CFmoto
              </a>
              <a href="/cf-moto-pradla/goes" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                GOES
              </a>
              <a href="/cf-moto-pradla/#akcesoria" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Akcesoria
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>ul. Wyzwolenia 90</p>
              <p>42-425 Pradła</p>
              <a href="tel:609309741" className="block hover:text-primary-foreground transition-colors pt-2">
                Tel: 609 309 741
              </a>
              <a href="tel:609309742" className="block hover:text-primary-foreground transition-colors">
                Tel: 609 309 742
              </a>
              <a href="tel:881639953" className="block hover:text-primary-foreground transition-colors font-medium">
                Tel: 881 639 953 (serwis)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Godziny otwarcia</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Poniedziałek - Piątek: 7:00 - 20:00</p>
              <p>Sobota: 8:00 - 16:00</p>
              <p>Niedziela: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/30 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} QuadyPradła. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
