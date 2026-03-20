// Product data structure for CFmoto and GOES vehicles

export type Brand = "cfmoto" | "goes"
export type Category = "atv" | "ssv" | "utv" | "motocykle"

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  brand: Brand
  category: Category
  name: string
  model: string
  image: string
  description: string
  specs: ProductSpec[]
  price?: string // Optional - może być "Zapytaj o cenę"
  featured?: boolean
}

// CFmoto ATV Products
export const cfmotoATVProducts: Product[] = [
  {
    id: "cforce-625",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 625",
    model: "CFORCE 625 Touring",
    image: "/cf-moto-pradla/cf-moto-cforce-625-atv-quad.jpg",
    description: "Wszechstronny quad ATV z silnikiem 625cc, napędem 4x4 i elektrycznym wspomaganiem kierownicy. Idealny do pracy i rekreacji.",
    specs: [
      { label: "Silnik", value: "625cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~50 KM" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
  {
    id: "cforce-850",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 850",
    model: "CFORCE 850 XC",
    image: "/cf-moto-pradla/cf-moto-cforce-850-atv-quad.jpg",
    description: "Mocny quad z silnikiem 850cc. Doskonała wydajność w trudnym terenie i przy ciężkiej pracy.",
    specs: [
      { label: "Silnik", value: "850cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~60 KM" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
  {
    id: "cforce-1000",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000",
    model: "CFORCE 1000 Overland",
    image: "/cf-moto-pradla/cf-moto-cforce-1000-atv-quad.jpg",
    description: "Flagowy model z silnikiem 1000cc. Maksymalna moc i możliwości dla wymagających użytkowników.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~80 KM" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
]

// CFmoto UTV Products
export const cfmotoUTVProducts: Product[] = [
  {
    id: "uforce-1000",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE 1000",
    model: "UFORCE 1000 EPS",
    image: "/cf-moto-pradla/cf-moto-uforce-1000-utv-side-by-side.jpg",
    description: "Użytkowy pojazd UTV z silnikiem 1000cc. Idealny do transportu, pracy w terenie i rekreacji. Duża przestrzeń ładunkowa.",
    specs: [
      { label: "Silnik", value: "1000cc V-Twin" },
      { label: "Miejsca", value: "2-osobowy" },
      { label: "Ładowność", value: "~600 kg" },
      { label: "Napęd", value: "4x4 z blokadą" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
]

// CFmoto SSV Products
export const cfmotoSSVProducts: Product[] = [
  {
    id: "zforce-950",
    brand: "cfmoto",
    category: "ssv",
    name: "ZFORCE 950",
    model: "ZFORCE 950 Sport",
    image: "/cf-moto-pradla/cf-moto-zforce-950-ssv-side-by-side.jpg",
    description: "Sportowy pojazd SSV z silnikiem 950cc. Doskonała wydajność w terenie, komfort i bezpieczeństwo.",
    specs: [
      { label: "Silnik", value: "950cc V-Twin" },
      { label: "Miejsca", value: "2-osobowy" },
      { label: "Moc", value: "~95 KM" },
      { label: "Zawieszenie", value: "Regulowane amortyzatory" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
]

// CFmoto Motocykle
export const cfmotoMotorcycleProducts: Product[] = [
  {
    id: "300nk",
    brand: "cfmoto",
    category: "motocykle",
    name: "300NK",
    model: "300NK",
    image: "/cf-moto-pradla/cf-moto-300nk-motocykl.jpg",
    description: "Sportowy naked bike z silnikiem 300cc. Idealny motocykl dla początkujących i średnio zaawansowanych kierowców.",
    specs: [
      { label: "Silnik", value: "300cc 1-cylindrowy" },
      { label: "Moc", value: "~30 KM" },
      { label: "Typ", value: "Naked bike" },
      { label: "Prawo jazdy", value: "A2" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
  {
    id: "450mt",
    brand: "cfmoto",
    category: "motocykle",
    name: "450MT",
    model: "450MT",
    image: "/cf-moto-pradla/cf-moto-450mt-motocykl.jpg",
    description: "Motocykl adventure z silnikiem 450cc. Doskonały do jazdy w terenie i na drodze.",
    specs: [
      { label: "Silnik", value: "450cc 2-cylindrowy" },
      { label: "Moc", value: "~45 KM" },
      { label: "Typ", value: "Adventure" },
      { label: "Prawo jazdy", value: "A2" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
  {
    id: "800mt",
    brand: "cfmoto",
    category: "motocykle",
    name: "800MT",
    model: "800MT",
    image: "/cf-moto-pradla/cf-moto-800mt-motocykl.jpg",
    description: "Flagowy motocykl adventure z silnikiem 800cc. Komfort, moc i wszechstronność w jednym.",
    specs: [
      { label: "Silnik", value: "800cc 2-cylindrowy" },
      { label: "Moc", value: "~90 KM" },
      { label: "Typ", value: "Adventure touring" },
      { label: "Prawo jazdy", value: "A" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
]

// GOES ATV Products
export const goesATVProducts: Product[] = [
  {
    id: "goes-cobalt",
    brand: "goes",
    category: "atv",
    name: "GOES Cobalt",
    model: "Cobalt 550",
    image: "/cf-moto-pradla/goes-cobalt-550-atv-quad.jpg",
    description: "Nowoczesny quad GOES z silnikiem 550cc. Doskonały stosunek jakości do ceny, niezawodność i komfort.",
    specs: [
      { label: "Silnik", value: "550cc" },
      { label: "Napęd", value: "4x4" },
      { label: "Moc", value: "~45 KM" },
      { label: "Typ", value: "Rekreacyjny/Użytkowy" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
  {
    id: "goes-iron",
    brand: "goes",
    category: "atv",
    name: "GOES Iron",
    model: "Iron 650",
    image: "/cf-moto-pradla/goes-iron-650-atv-quad.jpg",
    description: "Wytrzymały quad użytkowy GOES z silnikiem 650cc. Stworzony do ciężkiej pracy w każdych warunkach.",
    specs: [
      { label: "Silnik", value: "650cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "Moc", value: "~50 KM" },
      { label: "Typ", value: "Użytkowy" },
    ],
    price: "Zapytaj o cenę",
    featured: true,
  },
]

// Helper functions to get products by brand and category
export function getProductsByBrandAndCategory(brand: Brand, category: Category): Product[] {
  if (brand === "cfmoto") {
    switch (category) {
      case "atv":
        return cfmotoATVProducts
      case "utv":
        return cfmotoUTVProducts
      case "ssv":
        return cfmotoSSVProducts
      case "motocykle":
        return cfmotoMotorcycleProducts
      default:
        return []
    }
  } else if (brand === "goes") {
    switch (category) {
      case "atv":
        return goesATVProducts
      default:
        return []
    }
  }
  return []
}

export function getAllCFmotoProducts(): Product[] {
  return [
    ...cfmotoATVProducts,
    ...cfmotoUTVProducts,
    ...cfmotoSSVProducts,
    ...cfmotoMotorcycleProducts,
  ]
}

export function getAllGoesProducts(): Product[] {
  return goesATVProducts
}

export function getFeaturedProducts(): Product[] {
  const allProducts = [...getAllCFmotoProducts(), ...getAllGoesProducts()]
  return allProducts.filter((product) => product.featured)
}
