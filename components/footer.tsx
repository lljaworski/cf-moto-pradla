export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ER-TECH</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              P.P.H.U. ER-TECH
              <br />
              ERNEST MAŚLANKA
              <br />
              Autoryzowany dealer CF MOTO
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>ul. Wyzwolenia 90</p>
              <p>42-425 Pradła</p>
              <p>Tel: 609 309 741</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Godziny otwarcia</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
              <p>Sobota: 9:00 - 14:00</p>
              <p>Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} P.P.H.U. ER-TECH ERNEST MAŚLANKA. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
