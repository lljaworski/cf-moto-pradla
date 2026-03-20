import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QuadyPradła - Autoryzowany Dealer CFmoto i GOES | ATV, UTV, SSV, Motocykle",
  description:
    "QuadyPradła to rodzinna firma - autoryzowany dealer CFmoto i GOES. Sprzedaż quadów ATV, UTV, SSV, motocykli oraz profesjonalny serwis ASO w Pradłach. Kompleksowe doradztwo i akcesoria.",
  keywords: "CFmoto, GOES, ATV, UTV, SSV, quad, quady, motocykle, Pradła, dealer, serwis ASO, akcesoria, CFORCE, UFORCE",
  generator: "v0.app",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon-light-32x32.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon-dark-32x32.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: "/apple-icon.png",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
