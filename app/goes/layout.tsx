import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GOES - QuadyPradła | Quady ATV",
  description:
    "Pełna oferta quadów ATV marki GOES. Autoryzowany dealer GOES w Pradłach. Sprawdź dostępne modele, ceny i konfiguracje.",
  keywords: "GOES, ATV, quady, quad, dealer GOES, Pradła",
}

export default function GoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
