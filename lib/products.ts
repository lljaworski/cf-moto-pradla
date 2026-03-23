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
    id: "cforce-110",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 110",
    model: "CFORCE 110",
    image: "https://cfmoto.pl/static/a7691deb3127f12184178309dea8abae/6aa54/CFORCE-110_packshot_blue.webp",
    description: "Quad ATV dla dzieci z silnikiem 110cc. Bezpieczny i łatwy w obsłudze pojazd dla młodych użytkowników.",
    specs: [
      { label: "Silnik", value: "110cc" },
      { label: "Napęd", value: "Tylny" },
      { label: "Wiek", value: "Od 6 lat" },
      { label: "Automatyczna skrzynia", value: "CVT" },
    ],
    price: "od 11 900 zł",
    featured: false,
  },
  {
    id: "cforce-450",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 450",
    model: "CFORCE 450",
    image: "https://cfmoto.pl/static/cd4367a89c2dd1037b82bc0a0e5dcd7d/ebb25/ATV450Short-packshot.webp",
    description: "Kompaktowy quad z silnikiem 450cc. Doskonała równowaga między mocą a zwrotnością.",
    specs: [
      { label: "Silnik", value: "450cc" },
      { label: "Napęd", value: "2x4 / 4x4" },
      { label: "Moc", value: "~38 KM" },
      { label: "Typ", value: "Nowość 2026" },
    ],
    price: "od 23 900 zł",
    featured: true,
  },
  {
    id: "cforce-520",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 520",
    model: "CFORCE 520 EPS",
    image: "https://cfmoto.pl/static/118f3b4eeb73c75a05968f0ad4ee1653/ebb25/ATV520ShortEPS-orange-packshot.webp",
    description: "Wszechstronny quad z silnikiem 520cc i wspomaganiem kierownicy EPS. Idealny do pracy i rekreacji.",
    specs: [
      { label: "Silnik", value: "520cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~40 KM" },
    ],
    price: "od 28 900 zł",
    featured: false,
  },
  {
    id: "cforce-520-black",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 520 L Black",
    model: "CFORCE 520 L Black",
    image: "https://cfmoto.pl/static/118f3b4eeb73c75a05968f0ad4ee1653/ebb25/ATV520ShortEPS-orange-packshot.webp",
    description: "Wersja Black Edition z długim siedzeniem i czarnym wykończeniem. Promocyjna cena wyprzedaży rocznika.",
    specs: [
      { label: "Silnik", value: "520cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Promocja", value: "Do 16.03.2026" },
    ],
    price: "od 24 900 zł",
    featured: true,
  },
  {
    id: "cforce-625",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 625 L-EPS",
    model: "CFORCE 625 L-EPS",
    image: "https://cfmoto.pl/static/37560fc3f4c2100346b96f307509de23/faa6d/CFORCE-625-L-EPS-Velocity-Grey.webp",
    description: "Wszechstronny quad ATV z silnikiem 625cc, napędem 4x4 i elektrycznym wspomaganiem kierownicy. Idealny do pracy i rekreacji.",
    specs: [
      { label: "Silnik", value: "625cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~50 KM" },
    ],
    price: "od 34 900 zł",
    featured: true,
  },
  {
    id: "cforce-625-black",
    brand: "cfmoto",
    category: "atv",
    name: "625 Black Edition Limited",
    model: "625 Black Edition Limited EPS",
    image: "https://cfmoto.pl/static/1ce3d47dee82c9544d548d14acc83856/faa6d/CFORCE-625-L-EPS-Nebula-Black.webp",
    description: "Limitowana edycja Black z silnikiem 625cc. Cena ważna do wyczerpania zapasów.",
    specs: [
      { label: "Silnik", value: "625cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Edycja", value: "Limitowana" },
    ],
    price: "od 29 900 zł",
    featured: false,
  },
  {
    id: "cforce-625-overland",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 625 Overland",
    model: "CFORCE 625 Overland",
    image: "https://cfmoto.pl/static/37560fc3f4c2100346b96f307509de23/faa6d/CFORCE-625-L-EPS-Velocity-Grey.webp",
    description: "Wersja Overland z dodatkowymi akcesoriami terenowymi. Przygotowana do długich wypraw.",
    specs: [
      { label: "Silnik", value: "625cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Typ", value: "Overland" },
    ],
    price: "od 36 900 zł",
    featured: false,
  },
  {
    id: "cforce-850-black",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 850 Touring Black",
    model: "CFORCE 850 Touring Black GEN3",
    image: "https://cfmoto.pl/static/366f6ccbefd8d2df7308ce4a4927fe83/25a42/CFORCE-850-TOURING-GEN3-Lava-Orange.webp",
    description: "Czarna edycja CFORCE 850 GEN3 z wyposażeniem turystycznym. Doskonały do długich tras.",
    specs: [
      { label: "Silnik", value: "850cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Generacja", value: "GEN3" },
    ],
    price: "od 42 900 zł",
    featured: false,
  },
  {
    id: "cforce-850",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 850 Touring",
    model: "CFORCE 850 Touring GEN3",
    image: "https://cfmoto.pl/static/366f6ccbefd8d2df7308ce4a4927fe83/25a42/CFORCE-850-TOURING-GEN3-Lava-Orange.webp",
    description: "Mocny quad z silnikiem 850cc GEN3. Doskonała wydajność w trudnym terenie i przy ciężkiej pracy.",
    specs: [
      { label: "Silnik", value: "850cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~60 KM" },
    ],
    price: "od 46 900 zł",
    featured: true,
  },
  {
    id: "cforce-1000-touring",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000 Touring",
    model: "CFORCE 1000 Touring",
    image: "https://cfmoto.pl/static/3af7a48f8894e55acb2ab0dd4c9ef037/ed667/CFMOTO_CFORCE-1000-Touring_lava-orange.webp",
    description: "Polecany model na 2026 rok. Flagowy quad z silnikiem 1000cc i wyposażeniem turystycznym.",
    specs: [
      { label: "Silnik", value: "1000cc V-Twin" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~80 KM" },
    ],
    price: "od 53 900 zł",
    featured: true,
  },
  {
    id: "cforce-1000-premium",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000 Premium HO",
    model: "CFORCE 1000 Premium HO",
    image: "https://cfmoto.pl/static/3af7a48f8894e55acb2ab0dd4c9ef037/ed667/CFMOTO_CFORCE-1000-Touring_lava-orange.webp",
    description: "Wersja Premium z silnikiem High Output. Wyprzedaż do wyczerpania zapasu.",
    specs: [
      { label: "Silnik", value: "1000cc HO" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Wyprzedaż", value: "Do wyczerpania" },
    ],
    price: "od 56 900 zł",
    featured: false,
  },
  {
    id: "cforce-1000-abs",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000 Premium ABS",
    model: "CFORCE 1000 Premium ABS",
    image: "https://cfmoto.pl/static/3af7a48f8894e55acb2ab0dd4c9ef037/ed667/CFMOTO_CFORCE-1000-Touring_lava-orange.webp",
    description: "Wersja Premium z systemem ABS. Maksymalne bezpieczeństwo i kontrola.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "ABS", value: "System hamulcowy" },
      { label: "Wyprzedaż", value: "Do wyczerpania" },
    ],
    price: "od 58 900 zł",
    featured: false,
  },
  {
    id: "cforce-1000-mv",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000 MV",
    model: "CFORCE 1000 MV",
    image: "https://cfmoto.pl/static/3af7a48f8894e55acb2ab0dd4c9ef037/ed667/CFMOTO_CFORCE-1000-Touring_lava-orange.webp",
    description: "Wersja MV (Multi-Vehicle) z rozszerzonymi możliwościami terenowymi.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Typ", value: "MV" },
    ],
    price: "od 59 900 zł",
    featured: false,
  },
  {
    id: "cforce-1000",
    brand: "cfmoto",
    category: "atv",
    name: "CFORCE 1000 Overland",
    model: "CFORCE 1000 Overland",
    image: "https://cfmoto.pl/static/b4ec78809235a5077fdbf4f0d65bc9be/790b4/CFORCE-1000-OVERLAND-_Desert-Tan.webp",
    description: "Flagowy model Overland z silnikiem 1000cc. Maksymalna moc i możliwości dla wymagających użytkowników.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "EPS", value: "Elektryczne wspomaganie" },
      { label: "Moc", value: "~80 KM" },
    ],
    price: "od 62 900 zł",
    featured: true,
  },
]

// CFmoto UTV Products
export const cfmotoUTVProducts: Product[] = [
  {
    id: "uforce-600",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE 600",
    model: "UFORCE 600",
    image: "https://cfmoto.pl/static/0292a849160c20c1ac81cc4d915145a2/ebb25/UTV_UFORCE-600.webp",
    description: "Kompaktowy i wydajny pojazd UTV zaprojektowany dla osób, które cenią sobie wygodę i niezawodność w trudnym terenie. Idealny do gospodarstw rolnych.",
    specs: [
      { label: "Silnik", value: "580cc jednocylindrowy, 41 KM" },
      { label: "Miejsca", value: "2-osobowy" },
      { label: "Napęd", value: "4x4 z blokadą" },
      { label: "Przekładnia", value: "CVT P/R/N/H/L" },
    ],
    price: "od 54 900 zł",
    featured: false,
  },
  {
    id: "uforce-1000",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE 1000",
    model: "UFORCE 1000 EPS",
    image: "https://cfmoto.pl/static/5038bf896a8f96f995acf07792554144/ebb25/UTV_UFORCE-1000-.webp",
    description: "Pełnowymiarowy wół roboczy. Mocny i niezawodny pojazd UTV z silnikiem V-Twin. Doskonałe możliwości holowania i transportu.",
    specs: [
      { label: "Silnik", value: "963cc V-Twin, 79 KM" },
      { label: "Miejsca", value: "2-osobowy" },
      { label: "Holowanie", value: "do 1133 kg" },
      { label: "Ładowność", value: "350 kg" },
    ],
    price: "od 73 900 zł",
    featured: true,
  },
  {
    id: "uforce-1000-xl",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE 1000 XL",
    model: "UFORCE 1000 XL",
    image: "https://cfmoto.pl/static/380fe902d48c939e49ecb0894d51a8e3/ebb25/UTV_UFORCE-1000-XL.webp",
    description: "Stworzony do niemożliwego. 6-miejscowy pojazd side-by-side z mocnym silnikiem V-Twin. Idealny do pracy i zabawy z całą rodziną.",
    specs: [
      { label: "Silnik", value: "963cc V-Twin, 72 KM" },
      { label: "Miejsca", value: "6-osobowy" },
      { label: "Holowanie", value: "do 1133 kg" },
      { label: "Ładowność", value: "350 kg" },
    ],
    price: "od 79 900 zł",
    featured: false,
  },
  {
    id: "uforce-u10-pro-highland",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE U10 PRO HIGHLAND",
    model: "UFORCE U10 PRO HIGHLAND",
    image: "https://cfmoto.pl/static/3752f8c40b8550a5a8663e959802105e/ebb25/U10PROHIGHLAND_BordeauxRed_Right_eu.webp",
    description: "Premium UTV z trzycylindrowym silnikiem i całkowicie zamkniętą kabiną HIGHLAND. Klimatyzacja, 8-calowy ekran dotykowy, elektryczne szyby.",
    specs: [
      { label: "Silnik", value: "998cc 3-cylindrowy, 90 KM" },
      { label: "Holowanie", value: "do 1134 kg" },
      { label: "Ładowność", value: "454 kg" },
      { label: "Kabina", value: "Premium z klimatyzacją" },
    ],
    price: "od 89 900 zł",
    featured: false,
  },
  {
    id: "uforce-u10-pro-highland-abs",
    brand: "cfmoto",
    category: "utv",
    name: "UFORCE U10 PRO HIGHLAND ABS",
    model: "UFORCE U10 PRO HIGHLAND ABS",
    image: "https://cfmoto.pl/static/6b6104f275f70073c80b9f7e66f0d520/ebb25/U10PROHIGHLAND_ForestGreen_Right.webp",
    description: "Topowy model UTV z systemem ABS i zaawansowanym wyposażeniem. Całkowicie zamknięta kabina Premium z systemem HVAC i 8-calowym MMI.",
    specs: [
      { label: "Silnik", value: "998cc 3-cylindrowy, 90 KM" },
      { label: "ABS", value: "Tak" },
      { label: "Holowanie", value: "do 1134 kg" },
      { label: "Ładowność", value: "454 kg" },
      { label: "Prześwit", value: "330 mm" },
    ],
    price: "od 91 900 zł",
    featured: false,
  },
]

// CFmoto SSV Products
export const cfmotoSSVProducts: Product[] = [
  {
    id: "zforce-950-sport",
    brand: "cfmoto",
    category: "ssv",
    name: "ZFORCE 950 SPORT",
    model: "ZFORCE 950 SPORT",
    image: "https://cfmoto.pl/static/4daf2c3ff33444b929ee8f5ca1017d01/ebb25/CFMOTO_ZFORCE-950_packshot-red.webp",
    description: "Sportowy pojazd SSV z silnikiem V-Twin 963cc. Dynamiczna jazda terenowa dla dwóch osób.",
    specs: [
      { label: "Silnik", value: "963cc V-Twin" },
      { label: "Miejsca", value: "2-osobowy" },
      { label: "Moc", value: "85 KM" },
      { label: "EPS", value: "Dwutrybowe wspomaganie" },
    ],
    price: "od 73 900 zł",
    featured: true,
  },
  {
    id: "zforce-950-sport-4",
    brand: "cfmoto",
    category: "ssv",
    name: "ZFORCE 950 SPORT-4",
    model: "ZFORCE 950 SPORT-4",
    image: "https://cfmoto.pl/static/15c1604dcfee2055c15abcc9ab51666b/25a42/ZFORCE-950-SPORT-4_Nebula-Black_Right.webp",
    description: "Wersja 4-osobowa ZFORCE 950. Przestrzeń dla całej rodziny z zachowaniem sportowego charakteru.",
    specs: [
      { label: "Silnik", value: "963cc V-Twin" },
      { label: "Miejsca", value: "4-osobowy" },
      { label: "Moc", value: "85 KM" },
      { label: "Drzwi", value: "W stylu wagonu" },
    ],
    price: "od 75 900 zł",
    featured: true,
  },
  {
    id: "zforce-1000-sport-r",
    brand: "cfmoto",
    category: "ssv",
    name: "ZFORCE 1000 SPORT R",
    model: "ZFORCE 1000 SPORT R",
    image: "https://cfmoto.pl/static/c23a53f4ab2696fb5831d91211e9e55f/ebb25/CFMOTO_zforce-1000-sport-r_blue.webp",
    description: "Topowy model z silnikiem 963cc rozwijającym 89 KM. Maksymalne osiągi i sportowa stylistyka.",
    specs: [
      { label: "Silnik", value: "963cc V-Twin" },
      { label: "Moc", value: "89 KM" },
      { label: "Opony", value: "27 cali terenowe" },
      { label: "Promień skrętu", value: "6,125 m" },
    ],
    price: "od 79 900 zł",
    featured: true,
  },
]

// CFmoto Motocykle
export const cfmotoMotorcycleProducts: Product[] = [
  {
    id: "125nk",
    brand: "cfmoto",
    category: "motocykle",
    name: "125 NK",
    model: "125 NK",
    image: "https://cfmoto.pl/static/fbae037855fb78e55b7380ef9217731c/790b4/CFMOTO-NK125-Gem-Black.webp",
    description: "Sportowy naked bike z silnikiem 125cc. Idealny motocykl dla początkujących kierowców. Dostępny na prawo jazdy kategorii B.",
    specs: [
      { label: "Silnik", value: "124.9cc jednocylindrowy, 14 KM" },
      { label: "Masa", value: "142 kg" },
      { label: "Ekran", value: "5\" TFT z nawigacją" },
      { label: "Prawo jazdy", value: "A1/B" },
    ],
    price: "od 12 900 zł",
    featured: true,
  },
  {
    id: "450nk",
    brand: "cfmoto",
    category: "motocykle",
    name: "450 NK",
    model: "450 NK",
    image: "https://cfmoto.pl/static/208606d58d6afe4e91fb3d67eb873be2/25a42/NK450_Nebula-Black.webp",
    description: "Dynamiczny naked bike z rzędowym silnikiem 2-cylindrowym. Design inspirowany koncepcją NK-C22. Masa tylko 173 kg.",
    specs: [
      { label: "Silnik", value: "449.5cc 2-cyl. rzędowy, 49.6 KM" },
      { label: "Masa", value: "173 kg" },
      { label: "ABS", value: "Tak" },
      { label: "Kontrola trakcji", value: "Tak" },
    ],
    price: "od 20 900 zł",
    featured: false,
  },
  {
    id: "450mt",
    brand: "cfmoto",
    category: "motocykle",
    name: "450 MT",
    model: "450 MT",
    image: "https://cfmoto.pl/static/a72b705a01b91b2dd34653f37e6c7c98/ed667/CFMOTO_450-MT_zephir-blue.webp",
    description: "Motocykl adventure z silnikiem 2-cylindrowym średniej wielkości. Koła cross-spoke 21\"/18\". Idealny do jazdy w terenie i na trasie.",
    specs: [
      { label: "Silnik", value: "449.5cc 2-cyl., 44 KM" },
      { label: "Typ", value: "Adventure" },
      { label: "Koła", value: "21\" przód / 18\" tył" },
      { label: "Aplikacja", value: "CFMOTO Ride" },
    ],
    price: "od 28 700 zł",
    featured: true,
  },
  {
    id: "700mt-2025",
    brand: "cfmoto",
    category: "motocykle",
    name: "700 MT 2025",
    model: "700 MT 2025 gen2",
    image: "https://cfmoto.pl/static/0c3bed00a39820b4322b6408d4aa64b9/790b4/700MT_Nebula-White.webp",
    description: "Świetny motocykl turystyczny na duże odległości. 20-litrowy zbiornik paliwa. Zasięg ponad 400 km.",
    specs: [
      { label: "Silnik", value: "693cc 2-cyl., 68 KM" },
      { label: "Zbiornik", value: "20 litrów" },
      { label: "Koła", value: "19\" / 17\" aluminium" },
      { label: "Zasięg", value: "400+ km" },
    ],
    price: "od 26 900 zł",
    featured: false,
  },
  {
    id: "800mt-touring",
    brand: "cfmoto",
    category: "motocykle",
    name: "800 MT TOURING",
    model: "800 MT TOURING",
    image: "https://cfmoto.pl/static/373264fa111444b4b806a52f80d722a5/ebb25/Motycykl_850MT-TOURING.webp",
    description: "Wyjątkowy pojazd dla miłośników dalekich podróży. Silnik LC8c znanym z KTM 790. System bezkluczykowy. 6 trybów jazdy.",
    specs: [
      { label: "Silnik", value: "799cc 2-cyl., 91 KM" },
      { label: "Tryby jazdy", value: "6 trybów" },
      { label: "IMU", value: "6-osiowy Bosch" },
      { label: "Quickshifter", value: "Tak" },
    ],
    price: "od 39 900 zł",
    featured: false,
  },
  {
    id: "800mt-sport",
    brand: "cfmoto",
    category: "motocykle",
    name: "800 MT SPORT",
    model: "800 MT SPORT",
    image: "https://cfmoto.pl/static/9cb2ea156b9a96550ee17a2d42c6daa4/ebb25/Motycykl_850MT-SPORT.webp",
    description: "Połączenie wyjątkowej wydajności i sportowego stylu. Lekka rama (16 kg) i wahacz (6.9 kg). Masa własna ≤231 kg.",
    specs: [
      { label: "Silnik", value: "799cc 2-cyl., 91 KM" },
      { label: "Masa", value: "≤231 kg" },
      { label: "ABS", value: "Doświetlanie zakrętów" },
      { label: "Tryby", value: "Sport/Deszcz" },
    ],
    price: "od 42 900 zł",
    featured: true,
  },
  {
    id: "800mt-explore",
    brand: "cfmoto",
    category: "motocykle",
    name: "800 MT EXPLORE",
    model: "800 MT EXPLORE",
    image: "https://cfmoto.pl/static/d10d3d4070898e673e8abdc5bd04756a/ed667/CFMOTO_800-MT-Explore_black.webp",
    description: "Zaktualizowana i ulepszona wersja 800MT. 8-calowy wyświetlacz MMI, tylny radar RDS, opony Michelin.",
    specs: [
      { label: "Silnik", value: "799cc 2-cyl., 95 KM" },
      { label: "Ekran", value: "8\" MMI" },
      { label: "Radar", value: "RDS tylny" },
      { label: "Tryby", value: "Sport/Deszcz/Teren/Wszechstronny" },
    ],
    price: "od 43 900 zł",
    featured: false,
  },
  {
    id: "800mt-explorer-es",
    brand: "cfmoto",
    category: "motocykle",
    name: "800 MT EXPLORER ES",
    model: "800 MT EXPLORER ES",
    image: "https://cfmoto.pl/static/d1e5aba10814753efc4c0f4aa2b4c7d4/790b4/800MT-ES_Neptune-Blue_right.webp",
    description: "Flagowy motocykl adventure z elektronicznie sterowanym zawieszeniem KYB. Komfort i stabilność na najwyższym poziomie.",
    specs: [
      { label: "Silnik", value: "799cc 2-cyl., 91 KM" },
      { label: "Zawieszenie", value: "Elektroniczne KYB" },
      { label: "Skok", value: "160mm przód / 150mm tył" },
      { label: "Quickshifter", value: "Tak" },
    ],
    price: "od 47 400 zł",
    featured: true,
  },
]

// GOES ATV Products
export const goesATVProducts: Product[] = [
  {
    id: "goes-terrox-1000-pro",
    brand: "goes",
    category: "atv",
    name: "GOES Terrox 1000 Pro",
    model: "Terrox 1000 Pro",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/Projekt-bez-nazwy-15-1.png",
    description: "Flagowy quad GOES z silnikiem 1000cc. Maksymalna moc i możliwości dla wymagających użytkowników. 3 lata gwarancji.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4" },
      { label: "Masa", value: "486 kg" },
      { label: "Wymiary", value: "2640 x 1288 x 1440 mm" },
    ],
    price: "od 45 900 zł",
    featured: true,
  },
  {
    id: "goes-terrox-1000-highlander",
    brand: "goes",
    category: "atv",
    name: "GOES Terrox 1000 Highlander",
    model: "Terrox 1000 Highlander",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/GOES-TERROX-1000-1.webp",
    description: "Wersja limitowana quada GOES z silnikiem 1000cc. Doskonałe wyposażenie i możliwości terenowe. 3 lata gwarancji.",
    specs: [
      { label: "Silnik", value: "1000cc" },
      { label: "Napęd", value: "4x4" },
      { label: "Masa", value: "486 kg" },
      { label: "Wymiary", value: "2640 x 1288 x 1440 mm" },
    ],
    price: "od 49 900 zł",
    featured: true,
  },
  {
    id: "goes-terrox-500-eps",
    brand: "goes",
    category: "atv",
    name: "GOES Terrox 500 EPS",
    model: "Terrox 500 EPS",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/CFMOTO_GOES_Terrox-500-2.webp",
    description: "Wszechstronny quad GOES z silnikiem 495cc i elektrycznym wspomaganiem kierownicy. Idealny do pracy i rekreacji. 3 lata gwarancji.",
    specs: [
      { label: "Silnik", value: "495cc" },
      { label: "Moc", value: "38 KM" },
      { label: "Napęd", value: "4x4" },
      { label: "Wymiary", value: "2390 x 1100 x 1435 mm" },
    ],
    price: "od 24 900 zł",
    featured: true,
  },
  {
    id: "goes-terrox-500",
    brand: "goes",
    category: "atv",
    name: "GOES Terrox 500",
    model: "Terrox 500",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/CFMOTO_GOES_Terrox-500-1.webp",
    description: "Niezawodny quad GOES z silnikiem 495cc. Doskonały stosunek jakości do ceny. 3 lata gwarancji.",
    specs: [
      { label: "Silnik", value: "495cc" },
      { label: "Moc", value: "38 KM" },
      { label: "Napęd", value: "4x4" },
      { label: "Wymiary", value: "2390 x 1100 x 1435 mm" },
    ],
    price: "od 22 900 zł",
    featured: true,
  },
  {
    id: "goes-terrox-400",
    brand: "goes",
    category: "atv",
    name: "GOES Terrox 400",
    model: "Terrox 400",
    image: "https://cms.goes.pl/wp-content/uploads/2025/09/CFMOTO_GOES_Terrox-400-1.webp",
    description: "Kompaktowy quad GOES z silnikiem 400cc. Ekonomiczny i niezawodny pojazd terenowy. 3 lata gwarancji.",
    specs: [
      { label: "Silnik", value: "400cc" },
      { label: "Moc", value: "29 KM" },
      { label: "Napęd", value: "4x4" },
      { label: "Wymiary", value: "2390 x 1100 x 1435 mm" },
    ],
    price: "od 20 900 zł",
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
