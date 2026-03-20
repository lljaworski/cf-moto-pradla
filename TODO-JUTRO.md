# QuadyPradła - Status Projektu i Plan Działania (20.03.2026)

## ✅ Status Aktualny

### Rzeczy Które Działają
- ✅ Serwer deweloperski działa: `http://localhost:3000/cf-moto-pradla/`
- ✅ Build produkcyjny działa: `pnpm build` przechodzi pomyślnie
- ✅ Wszystkie strony renderują się (200 OK):
  - `/` - Strona główna
  - `/cfmoto` - Landing page CFmoto
  - `/cfmoto/atv` - Kategoria ATV CFmoto
  - `/cfmoto/ssv` - Kategoria SSV CFmoto
  - `/cfmoto/utv` - Kategoria UTV CFmoto
  - `/cfmoto/motocykle` - Kategoria Motocykle CFmoto
  - `/goes` - Landing page GOES
  - `/goes/atv` - Kategoria ATV GOES

### Kolorystyka
- ✅ Zmieniono z zielonej na pomarańczową (#E84C3D primary, #FF6B35 secondary)
- ✅ Palette OKLCH w globals.css zaktualizowana
- ✅ Header, Footer, wszystkie sekcje używają nowych kolorów

### Branding
- ✅ Zmieniono nazwę z "ER-TECH" na "QuadyPradła"
- ✅ Logo zintegrowane w header i footer
- ✅ Meta tagi SEO zaktualizowane
- ✅ Wszystkie teksty rebrandowane

### Struktura Strony
- ✅ Utworzono oddzielne podstrony dla CFmoto i GOES
- ✅ Dynamic routing z [category] dla ATV/SSV/UTV/Motocykle
- ✅ Dodano sekcję "O nas" z tekstem klienta
- ✅ Dodano sekcję "Akcesoria"
- ✅ Usunięto funkcjonalność e-commerce (tylko display)

### Dane Produktowe
- ✅ Stworzono lib/products.ts z typami TypeScript
- ✅ Dodano dane przykładowe:
  - CFORCE 625, 850, 1000 (CFmoto ATV)
  - UFORCE 1000 (CFmoto UTV)
- ✅ Komponent CategoryGrid pobiera dane z products.ts

---

## ⚠️ Znane Problemy

### Problem 1: Błędy TypeScript Language Server (NIE KRYTYCZNE)
**Status:** Nie blokuje działania, tylko cache edytora
```
Cannot find module '@/components/category-grid'
```
**Lokalizacja:** 
- `app/cfmoto/[category]/page.tsx`
- `app/goes/[category]/page.tsx`

**Dlaczego to nie jest problem:**
- Kod kompiluje się poprawnie
- Wszystkie strony działają
- Build produkcyjny przechodzi
- To tylko cache TypeScript Language Server w VS Code

**Rozwiązanie (opcjonalne):**
1. Restart VS Code
2. Cmd+Shift+P → "TypeScript: Restart TS Server"
3. Zignorować - nie wpływa na działanie

---

### Problem 2: Brakujące Ikony Favicon (404)
**Status:** Niekrytyczne, ale widoczne w logach
```
GET /icon-dark-32x32.png 404
GET /icon.svg 404
```

**Co zrobić:**
Plik `layout.tsx` deklaruje ikony, które nie istnieją w `/public`:
```typescript
icons: {
  icon: [
    { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
    { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    { url: "/icon.svg", type: "image/svg+xml" }
  ],
  apple: "/apple-icon.png"
}
```

**Opcje:**
1. Usunąć deklarację ikon z `app/layout.tsx` (szybkie)
2. Stworzyć odpowiednie pliki ikon z logo QuadyPradła (lepsze)

---

### Problem 3: Niespójne Ścieżki basePath
**Status:** Częściowo naprawione, wymaga weryfikacji

**Co zostało naprawione:**
- ✅ Logo w header/footer: `/cf-moto-pradla/images/logo.jpg`
- ✅ Linki nawigacyjne w header/footer
- ✅ Next.js Link komponenty w sekcjach
- ✅ Produkty w lib/products.ts mają basePath

**Co może wymagać sprawdzenia:**
- `brands-gateway.tsx` linia 58: `src={brand.image || "/placeholder.svg"}` (bez basePath)
- Inne fallbacki do placeholder.svg

**Uwaga o basePath:**
Next.js automatycznie dodaje basePath do:
- Next.js `<Link>` komponentów
- Next.js `<Image>` komponentów
- Wewnętrznych linkówNiestandardowe `<a href>` i `<img src>` wymagają ręcznego dodania basePath.

---

### Problem 4: Dane Produktowe Niekompletne
**Status:** Do uzupełnienia

**Co jest:**
- ✅ CFORCE 625, 850, 1000 (CFmoto ATV) - 3 produkty
- ✅ UFORCE 1000 (CFmoto UTV) - 1 produkt
- ❌ Brak produktów SSV CFmoto
- ❌ Brak produktów Motocykle CFmoto  
- ❌ Brak produktów GOES (poza placeholder)

**Co zrobić:**
1. Uzupełnić `lib/products.ts` o brakujące modele
2. Dodać obrazki produktów do `/public`
3. Zaktualizować specs dla każdego modelu

---

### Problem 5: Obrazki Kategorii to Placeholder
**Status:** Do uzupełnienia

**Lokalizacje:**
- `components/cfmoto-section.tsx`:
  - ATV: ✅ Ma obrazek
  - SSV: ❌ Placeholder
  - UTV: ✅ Ma obrazek (`cf-moto-uforce-1000-utv-side-by-side.jpg`)
  - Motocykle: ❌ Placeholder

- `components/goes-section.tsx`:
  - ATV: ❌ Placeholder

**Co zrobić:**
1. Dodać prawdziwe zdjęcia pojazdów do `/public`
2. Zaktualizować ścieżki w odpowiednich plikach

---

## 📋 Plan Działania na Jutro

### Priorytet 1: Stabilność i Czystość (30 min)
1. **Naprawić ikony favicon** (5 min)
   - Usunąć deklarację ikon z `app/layout.tsx` lub
   - Dodać podstawowe favicon.ico do `/public`

2. **Zweryfikować basePath** (10 min)
   - Przejść przez wszystkie komponenty
   - Upewnić się, że wszystkie ścieżki obrazków mają `/cf-moto-pradla/`
   - Naprawić `brands-gateway.tsx` placeholder

3. **Sprawdzić linki nawigacyjne w przeglądarce** (15 min)
   - Otworzyć stronę w Simple Browser
   - Kliknąć wszystkie linki menu
   - Sprawdzić czy nie ma przekierowań 404
   - Przetestować sekcje z anchor links (#o-nas, #kontakt, etc.)

---

### Priorytet 2: Treść i Obrazy (1-2 godz)
4. **Uzupełnić dane produktowe** (45 min)
   ```typescript
   // lib/products.ts
   // Dodać:
   - cfmotoSSVProducts (jeśli dostępne modele)
   - cfmotoMotorcycleProducts (np. 300NK, 450MT, 800MT)
   - goesATVProducts (np. Cobalt, Iron, etc.)
   ```

5. **Dodać prawdziwe obrazki** (45 min)
   - Pobrać/przygotować zdjęcia pojazdów
   - Dodać do `/public` z odpowiednimi nazwami
   - Zaktualizować ścieżki w:
     - `components/cfmoto-section.tsx` (SSV, Motocykle)
     - `components/goes-section.tsx` (ATV)
     - `lib/products.ts` (jeśli placeholder)

---

### Priorytet 3: Dopracowanie UX (1 godz)
6. **Przetestować responsywność** (20 min)
   - Otworzyć DevTools → Device Mode
   - Przetestować Mobile (375px)
   - Przetestować Tablet (768px)
   - Sprawdzić menu mobilne (hamburger)

7. **Sprawdzić animacje Framer Motion** (15 min)
   - Scroll animations na wszystkich sekcjach
   - Hover effects na kartach
   - Transitions między stronami

8. **Przetestować formularz kontaktowy** (15 min)
   - Sprawdzić walidację pól
   - Sprawdzić czy telefon i email są klikalne
   - Przetestować mapę Google

9. **Weryfikacja SEO i Meta Tags** (10 min)
   - Sprawdzić title i description na wszystkich stronach
   - Upewnić się, że każda strona ma unikalne meta tagicję

---

### Priorytet 4: Deployment (30 min)
10. **Przygotować do wdrożenia**
    ```bash
    # Test build
    pnpm build
    
    # Sprawdź output
    ls -la out/
    
    # Test build lokalnie
    npx serve out
    ```

11. **GitHub Pages lub Vercel**
    - Jeśli GitHub Pages: sprawdzić czy basePath jest poprawny
    - Jeśli Vercel: zaimportować repo i deploy

---

## 🔧 Przydatne Komendy

### Development
```bash
# Start dev server
pnpm dev

# Build production
pnpm build

# Restart serwera po zmianach
# Ctrl+C w terminalu, potem pnpm dev
```

### Sprawdzanie Błędów
```bash
# TypeScript check (ignoruje cache)
pnpm tsc --noEmit

# ESLint
pnpm lint

# Check logs
# W VS Code: Terminal → Zobacz logi serwera
```

### Struktura Plików
```
cf-moto-pradla/
├── app/
│   ├── page.tsx              # Strona główna
│   ├── layout.tsx            # Root layout (meta tags)
│   ├── globals.css           # Style globalne (kolory)
│   ├── cfmoto/
│   │   ├── page.tsx          # Landing CFmoto
│   │   ├── layout.tsx        # Meta dla CFmoto
│   │   └── [category]/
│   │       └── page.tsx      # Strony kategorii (ATV/SSV/UTV/Motocykle)
│   └── goes/
│       ├── page.tsx          # Landing GOES
│       ├── layout.tsx        # Meta dla GOES
│       └── [category]/
│           └── page.tsx      # Strony kategorii (ATV)
├── components/
│   ├── header.tsx            # Nawigacja (LOGO, LINKI)
│   ├── footer.tsx            # Stopka
│   ├── hero-section.tsx      # Hero na głównej
│   ├── about-section.tsx     # Sekcja "O nas"
│   ├── services-section.tsx  # 3 usługi
│   ├── brands-gateway.tsx    # Wybór marki (CFmoto/GOES)
│   ├── accesories-section.tsx # Akcesoria
│   ├── contact-section.tsx   # Formularz + mapa
│   ├── cfmoto-section.tsx    # 4 kategorie CFmoto
│   ├── goes-section.tsx      # 1 kategoria GOES
│   └── category-grid.tsx     # Reusable grid produktów
├── lib/
│   └── products.ts           # Dane produktowe + typy TS
├── public/
│   ├── images/
│   │   └── logo.jpg          # Logo QuadyPradła
│   ├── cf-moto-*.jpg         # Zdjęcia produktów
│   └── placeholder.svg       # Placeholder
└── next.config.mjs           # Config (basePath: /cf-moto-pradla)
```

---

## 📝 Notatki dla Siebie

### Decyzje Projektowe
- **basePath:** `/cf-moto-pradla` (dla GitHub Pages)
- **output:** `export` (statyczny HTML)
- **TypeScript:** strict mode, ignoreBuildErrors: true
- **Styling:** Tailwind CSS v4.1.9 + OKLCH colors
- **Animacje:** Framer Motion
- **UI:** Shadcn/ui (Card, Button)

### Kolory
```css
Primary Orange: oklch(0.60 0.20 25)  /* #E84C3D */
Secondary Orange: oklch(0.68 0.23 35) /* #FF6B35 */
Background: oklch(0.97 0 0)           /* Jasne tło */
Foreground: oklch(0.15 0 0)          /* Ciemny tekst */
```

### Kontakt Klienta
- Telefon: 609 309 741
- Adres: ul. Wyzwolenia 90, 42-425 Pradła
- Email: (dodać jeśli dostępny)

### GitHub Repo
- Repo: `lljaworski/cf-moto-pradla`
- Branch: `main`
- Ostatni commit: Naprawiono błędy kompilacji (19.03.2026)

---

## 🎯 Cele Końcowe

### Must Have (Przed Wdrożeniem)
- [ ] Wszystkie błędy 404 naprawione
- [ ] Dane produktowe uzupełnione
- [ ] Prawdziwe obrazki zamiast placeholders
- [ ] Responsywność przetestowana
- [ ] Formularz kontaktowy działa
- [ ] Build produkcyjny przechodzi
- [ ] Meta tags SEO na wszystkich stronach

### Nice to Have (Można Dodać Później)
- [ ] Animacje wejścia bardziej płynne
- [ ] Lightbox dla galerii obrazków
- [ ] Porównywarka modeli
- [ ] FAQ sekcja
- [ ] Blog/Aktualności
- [ ] Integracja z systemem rezerwacji wizyt
- [ ] Newsletter signup

---

## 🚀 Gotów na Jutro!

**Pierwsza rzecz do zrobienia:**
1. Uruchom `pnpm dev`
2. Otwórz `http://localhost:3000/cf-moto-pradla/`
3. Przejrzyj ten dokument
4. Zacznij od Priorytetu 1 ⬆️

**Pytania? Sprawdź:**
- Ten dokument
- Kod w odpowiednich plikach
- Logi terminala: `pnpm dev`
- Build errors: `pnpm build`

---

**Dokument utworzony:** 19.03.2026, 23:30  
**Następna aktualizacja:** Po zakończeniu prac 20.03.2026

---

*Good luck! 💪 Projekt jest już bardzo blisko finału!*
