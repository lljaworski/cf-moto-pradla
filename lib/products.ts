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

// CFmoto SSV Products (placeholder - do uzupełnienia)
export const cfmotoSSVProducts: Product[] = [
  // Placeholder - dane SSV do dodania później
]

// CFmoto Motocykle (placeholder - do uzupełnienia)
export const cfmotoMotorcycleProducts: Product[] = [
  // Placeholder - dane motocykli do dodania później
]

// GOES ATV Products (placeholder - do uzupełnienia)
export const goesATVProducts: Product[] = [
  // Placeholder - dane GOES ATV do dodania później
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
