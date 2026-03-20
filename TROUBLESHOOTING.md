# QuadyPradła - Szybki Przewodnik Troubleshooting

## 🚨 Co Zrobić Gdy Coś Nie Działa

### Problem: Serwer się nie uruchamia
```bash
# Sprawdź czy node_modules są zainstalowane
ls node_modules/

# Jeśli brak, zainstaluj:
pnpm install

# Jeśli dalej nie działa, wyczyść cache:
pnpm store prune
pnpm install

# Uruchom ponownie:
pnpm dev
```

---

### Problem: Strona pokazuje 404
**Powód:** Nie używasz basePath w URL

❌ **Źle:** `http://localhost:3000/`  
✅ **Dobrze:** `http://localhost:3000/cf-moto-pradla/`

**Wszystkie URL muszą zaczynać się od `/cf-moto-pradla/`**

---

### Problem: Obrazki się nie ładują (404)
**Sprawdź 3 rzeczy:**

1. **Czy plik istnieje w `/public`?**
   ```bash
   ls public/images/logo.jpg
   ```

2. **Czy ścieżka ma basePath?**
   ```tsx
   // ❌ Źle (jeśli <img>)
   <img src="/images/logo.jpg" />
   
   // ✅ Dobrze
   <img src="/cf-moto-pradla/images/logo.jpg" />
   ```

3. **Czy używasz Next.js Image?**
   ```tsx
   // Next.js Image automatycznie dodaje basePath
   import Image from 'next/image'
   <Image src="/images/logo.jpg" />  // ✅ OK
   ```

---

### Problem: Linki prowadzą do 404
**Sprawdź czy używasz odpowiedniego komponentu:**

```tsx
// ❌ Zwykły <a> - wymaga pełnej ścieżki z basePath
<a href="/cf-moto-pradla/cfmoto">CFmoto</a>

// ✅ Next.js Link - automatycznie dodaje basePath
import Link from 'next/link'
<Link href="/cfmoto">CFmoto</Link>
```

**Anchor links (#):**
```tsx
// ❌ Źle (będzie szukać na aktualnej stronie)
<a href="#kontakt">Kontakt</a>

// ✅ Dobrze (pełna ścieżka)
<a href="/cf-moto-pradla/#kontakt">Kontakt</a>
```

---

### Problem: TypeScript pokazuje błędy importu
```
Cannot find module '@/components/category-grid'
```

**To jest problem cache - NIE wpływa na działanie!**

**Rozwiązanie 1 (szybkie):**
- Zignoruj - kod działa mimo błędu

**Rozwiązanie 2 (restart TS Server):**
1. Cmd+Shift+P (Mac) lub Ctrl+Shift+P (Windows)
2. Wpisz: "TypeScript: Restart TS Server"
3. Enter

**Rozwiązanie 3 (restart VS Code):**
- Zamknij i otwórz VS Code ponownie

**Weryfikacja czy to cache:**
```bash
# Jeśli build przechodzi - to tylko cache!
pnpm build
```

---

### Problem: CSS się nie aktualizuje
```bash
# 1. Sprawdź czy plik globals.css jest importowany
# w app/layout.tsx:
import "./globals.css"

# 2. Restart serwera
# Ctrl+C w terminalu, potem:
pnpm dev

# 3. Hard reload w przeglądarce
# Mac: Cmd+Shift+R
# Windows: Ctrl+Shift+R
```

---

### Problem: Zmiany w kodzie nie są widoczne
**Fast Refresh nie działa?**

```bash
# 1. Sprawdź logi terminala
# Szukaj: "⚠ Fast Refresh had to perform a full reload"

# 2. Jeśli widzisz runtime error:
# - Sprawdź konsole przeglądarki (F12)
# - Napraw błąd JavaScript/React
# - Zapisz plik ponownie

# 3. Jeśli dalej nie działa - restart:
# Ctrl+C, potem pnpm dev
```

---

### Problem: Build się nie udaje
```bash
pnpm build
# Jeśli błąd:
```

**Krok 1: Przeczytaj błąd**
- Syntax errors? → Napraw składnię
- Type errors? → Napraw typy TypeScript
- Import errors? → Sprawdź ścieżki

**Krok 2: Sprawdź czy dev działa**
```bash
pnpm dev
# Jeśli dev działa, ale build nie:
# - Może być problem z generateStaticParams
# - Sprawdź [category]/page.tsx
```

**Krok 3: Wyczyść cache**
```bash
# Usuń folder .next (jeśli nie działa rm):
# 1. Zatrzymaj serwer (Ctrl+C)
# 2. W Finder znajdź folder .next i usuń
# 3. pnpm build
```

---

### Problem: Framer Motion animacje nie działają
**Sprawdź 3 rzeczy:**

1. **Czy "use client" jest na górze?**
   ```tsx
   "use client"  // ← musi być!
   
   import { motion } from "framer-motion"
   ```

2. **Czy framer-motion jest zainstalowany?**
   ```bash
   pnpm list framer-motion
   ```

3. **Czy składnia jest poprawna?**
   ```tsx
   // ✅ Dobrze
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
   >
   ```

---

### Problem: Formularz kontaktowy nie działa
**To jest tylko mockup - nie wysyła emaili!**

**Co sprawdzić:**
1. Czy pola mają walidację? ✅
2. Czy tel: i mailto: linki działają? ✅
3. Czy mapa Google się ładuje? ✅

**Jeśli chcesz prawdziwy formularz:**
- Dodaj backend (API route)
- Użyj np. EmailJS, SendGrid, lub Resend
- Lub użyj mailto: jako tymczasowe rozwiązanie

---

### Problem: Strona ładuje się wolno na produkcji
**Optymalizacje:**

1. **Użyj Next.js Image zamiast <img>**
   ```tsx
   import Image from 'next/image'
   <Image src="/image.jpg" width={800} height={600} />
   ```

2. **Zmniejsz rozmiar obrazków**
   ```bash
   # Użyj narzędzi typu:
   # - TinyPNG
   # - ImageOptim
   # - Squoosh.app
   ```

3. **Sprawdź Lighthouse**
   ```
   1. F12 → Lighthouse tab
   2. Wygeneruj raport
   3. Postępuj według wskazówek
   ```

---

## 🔍 Jak Debugować

### 1. Sprawdź Logi Terminala
```bash
# Terminal gdzie działa pnpm dev
# Szukaj:
# - GET /path 404  ← 404 errors
# - GET /path 500  ← Server errors
# - GET /path 200  ← OK!
# - ⚠ Fast Refresh ← Runtime errors
```

### 2. Sprawdź Konsolę Przeglądarki
```
F12 → Console tab
# Szukaj:
# - 404 errors (czerwone)
# - JavaScript errors
# - React warnings (żółte)
```

### 3. Sprawdź Network Tab
```
F12 → Network tab → Reload
# Zobacz które requesty fail:
# - Images (404?)
# - CSS (404?)
# - JS bundles
```

### 4. Sprawdź React DevTools
```
# Zainstaluj React DevTools extension
# F12 → Components tab
# → Zobacz drzewo komponentów
# → Sprawdź props i state
```

---

## 📂 Gdzie Szukać Problemu

### Obrazki nie działają?
→ `public/` folder + ścieżki w komponentach

### Linki nie działają?
→ `components/header.tsx` + `components/footer.tsx`

### Produkty nie się pokazują?
→ `lib/products.ts` + `components/category-grid.tsx`

### Style się nie aplikują?
→ `app/globals.css` + Tailwind classes

### Routing nie działa?
→ `app/cfmoto/[category]/page.tsx` + `next.config.mjs`

### SEO/Meta tags?
→ `app/layout.tsx` + layout.tsx w podfolderach

---

## 🎯 Najczęstsze Błędy i Rozwiązania

| Błąd | Powód | Rozwiązanie |
|------|-------|-------------|
| 404 na stronie | Brak basePath w URL | Dodaj `/cf-moto-pradla/` |
| 404 na obrazku | Brak basePath lub plik nie istnieje | Sprawdź `/public` i dodaj basePath |
| Link nie działa | Używasz `<a>` zamiast `<Link>` | Użyj Next.js Link |
| TS błąd importu | Cache LSP | Restart TS Server (zignoruj) |
| CSS nie aktualizuje | Cache przeglądarki | Hard reload (Cmd+Shift+R) |
| Build fails | Syntax/Type error | Przeczytaj błąd i napraw |
| Slow performance | Duże obrazki | Użyj Next.js Image + optymalizuj |

---

## 💡 Pro Tips

### Tip 1: Używaj Relative Imports
```tsx
// ❌ Unikaj
import { Header } from '../../../components/header'

// ✅ Używaj alias
import { Header } from '@/components/header'
```

### Tip 2: Hot Reload Tricks
```bash
# Jeśli zmiany nie są widoczne:
# 1. Zapisz plik (Cmd+S)
# 2. Poczekaj 2 sekundy
# 3. Reload przeglądarki (Cmd+R)
```

### Tip 3: Git Workflow
```bash
# Commituj często!
git add .
git commit -m "Naprawiono obrazki na stronie CFmoto"
git push

# Jeśli coś zepsułeś:
git log  # znajdź dobry commit
git reset --hard <commit-hash>
```

### Tip 4: Backup Przed Dużymi Zmianami
```bash
# Stwórz branch przed refactoringiem
git checkout -b feature/nowa-funkcja
# Testuj
# Jeśli działa: merge
# Jeśli nie: `git checkout main`
```

---

## 📞 Ostatnia Deska Ratunku

### Jeśli NIC nie działa:
```bash
# 1. Backup kodu
git add .
git commit -m "Backup przed reinstall"

# 2. Wyczyść wszystko
rm -rf node_modules
rm -rf .next
rm pnpm-lock.yaml

# 3. Reinstall
pnpm install

# 4. Restart
pnpm dev
```

### Jeśli DALEJ nie działa:
```bash
# Sprawdź wersje
node --version   # Powinno być >= 18
pnpm --version   # Powinno być >= 8

# Zaktualizuj jeśli potrzeba
# Potem od nowa: pnpm install && pnpm dev
```

---

**Dokument utworzony:** 19.03.2026  
**Ostatnia aktualizacja:** 19.03.2026, 23:45

*Powodzenia! 🚀*
