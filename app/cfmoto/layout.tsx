import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CFmoto - QuadyPradła | ATV, SSV, UTV, Motocykle",
  description:
    "Pełna oferta pojazdów CFmoto: quady ATV (CFORCE), pojazdy UTV, SSV oraz motocykle. Autoryzowany dealer CFmoto w Pradłach. Sprawdź dostępne modele i konfiguracje.",
  keywords: "CFmoto, CFORCE, UFORCE, ATV, UTV, SSV, motocykle, quady, dealer CFmoto, Pradła",
}

export default function CFMotoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
