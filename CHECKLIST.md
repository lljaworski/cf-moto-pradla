# ✅ QuadyPradła - Quick Checklist (20.03.2026)

## Poranna Rutyna (5 min)
- [ ] Uruchom `pnpm dev` w terminalu
- [ ] Otwórz `http://localhost:3000/cf-moto-pradla/`
- [ ] Sprawdź czy strona się ładuje
- [ ] Przeczytaj TODO-JUTRO.md

---

## Priorytet 1: Stabilność ⚡ (30 min)

### Favicon i Ikony
- [ ] Otwórz `app/layout.tsx`
- [ ] Usuń lub zakomentuj sekcję `icons:` (linie ~14-24)
- [ ] Zapisz i sprawdź czy logi nie pokazują już 404 dla ikon

### basePath w Obrazkach
- [x] ~~Otwórz `components/brands-gateway.tsx` linia 58~~
- [x] ~~Zmień: `"/placeholder.svg"` → `"/cf-moto-pradla/placeholder.svg"`~~
- [x] ~~Zapisz~~
- ✅ **Już naprawione!**

### Test Nawigacji
- [ ] Kliknij każdy link w menu (Header)
- [ ] Sprawdź czy wszystkie prowadzą do właściwych stron
- [ ] Test anchor links (#o-nas, #kontakt)
- [ ] Sprawdź czy footer linki działają

---

## Priorytet 2: Treść 📝 (1-2 godz)

### Dane Produktowe
- [ ] Otwórz `lib/products.ts`
- [ ] Dodaj produkty SSV (jeśli masz modele)
- [ ] Dodaj produkty Motocykle (np. 300NK, 450MT, 800MT)
- [ ] Dodaj produkty GOES ATV (np. Cobalt, Iron)
- [ ] Zapisz

### Obrazki Kategorii
- [ ] Przygotuj/pobierz zdjęcia pojazdów
- [ ] Dodaj do `/public` (np. `cfmoto-ssv-hero.jpg`)
- [ ] Otwórz `components/cfmoto-section.tsx`
- [ ] Zmień placeholder dla SSV (linia ~20)
- [ ] Zmień placeholder dla Motocykle (linia ~34)
- [ ] Otwórz `components/goes-section.tsx`
- [ ] Zmień placeholder dla GOES ATV (linia ~13)
- [ ] Zapisz wszystko

---

## Priorytet 3: UX Testing 🎨 (1 godz)

### Responsywność
- [ ] F12 → Device Toolbar (Cmd+Shift+M)
- [ ] Test iPhone SE (375px)
- [ ] Test iPad (768px)
- [ ] Test Desktop (1920px)
- [ ] Sprawdź menu mobilne (hamburger)

### Animacje
- [ ] Scroll przez stronę główną
- [ ] Zobacz czy animacje wejścia działają
- [ ] Hover na kartach produktów
- [ ] Sprawdź transitions między stronami

### Formularz Kontaktowy
- [ ] Przejdź do sekcji #kontakt
- [ ] Test walidacji (puste pole, zły email)
- [ ] Kliknij telefon (powinien otworzyć dialer)
- [ ] Kliknij email (jeśli jest)
- [ ] Sprawdź czy mapa Google działa

### SEO
- [ ] Sprawdź tytuł każdej strony (zakładka przeglądarki)
- [ ] Zobacz źródło (Cmd+Alt+U) → szukaj `<title>` i `<meta name="description">`

---

## Priorytet 4: Deploy 🚀 (30 min)

### Build Test
```bash
pnpm build
```
- [ ] Build przeszedł bez błędów
- [ ] Sprawdź folder `out/` (powinien powstać)

### Test Produkcji Lokalnie
```bash
npx serve out
```
- [ ] Otwórz URL który wyświetli (np. http://localhost:3000)
- [ ] Test głównej strony
- [ ] Test 2-3 podstron

### Deployment (wybierz jedno)
**GitHub Pages:**
- [ ] `git add .`
- [ ] `git commit -m "Production ready"`
- [ ] `git push`
- [ ] Idź do Settings → Pages → Source: main branch, /out folder

**Vercel:**
- [ ] Zaloguj na vercel.com
- [ ] Import git repo
- [ ] Deploy (automatycznie wykryje Next.js)
- [ ] Sprawdź live URL

---

## Końcowa Weryfikacja 🎯

### Must Check Before Deploy
- [ ] Wszystkie strony ładują się (200 OK)
- [ ] Brak błędów 404 w logach
- [ ] Logo widoczne w header i footer
- [ ] Menu nawigacyjne działa
- [ ] Produkty wyświetlają się z danymi
- [ ] Obrazki się ładują (nie placeholder)
- [ ] Responsywność OK na mobile
- [ ] Build production przechodzi
- [ ] Meta tags SEO na wszystkich stronach

### Nice to Have (opcjonalne)
- [ ] Animacje płynne
- [ ] Lighthouse score > 80
- [ ] Wszystkie obrazki zoptymalizowane
- [ ] Favicon/icon poprawnie

---

## Szybkie Notatki

### Problemy Napotkane:
```
1. _____________________________________
2. _____________________________________
3. _____________________________________
```

### Rozwiązania:
```
1. _____________________________________
2. _____________________________________
3. _____________________________________
```

### Co Zostało Do Zrobienia:
```
- _____________________________________
- _____________________________________
- _____________________________________
```

---

## 🎉 Gratulacje!

Gdy wszystkie checkboxy są zaznaczone:
- [ ] **Projekt gotowy do wdrożenia!**
- [ ] Wyślij link klientowi
- [ ] Zbierz feedback
- [ ] Zaplanuj update v2 (jeśli potrzeba)

---

**Data:** 20.03.2026  
**Estymowany czas:** 3-4 godziny  
**Status:** 🟡 W trakcie

**Po zakończeniu zmień status na:** 🟢 Gotowe

---

*Let's do this! 💪*
