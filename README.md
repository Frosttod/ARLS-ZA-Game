# ARLS-ZA — strona projektu

Strona opisująca systemy gry **ARLS-ZA — Almost Real Life Survival: Zombie Apocalypse**, hiper-realistycznego survivalu GPS na Androida.

**Na żywo:** [English](https://frosttod.github.io/ARLS-ZA-Game/) · [polski](https://frosttod.github.io/ARLS-ZA-Game/pl/)

Kod gry i dokumentacja projektowa: [Frosttod/ARLS-ZA](https://github.com/Frosttod/ARLS-ZA)

## Struktura

```
index.html       → EN, wersja domyślna
pl/index.html    → PL
assets/site.css  → wspólny arkusz stylów
assets/site.js   → wspólny skrypt
```

Statyczny HTML. Zero zależności zewnętrznych, zero procesu budowania, zero wczytywanych z sieci fontów i bibliotek — strona działa też otwarta z dysku.

## Publikacja

**Settings → Pages → Source:** `Deploy from a branch`, **Branch:** `main`, folder **`/ (root)`**.

## Utrzymanie

- Wygląd zmienia się wyłącznie w `assets/site.css` — obie wersje językowe współdzielą arkusz
- Identyfikatory sekcji (`#pillar`, `#combat`, `#hotspots`…) są **wspólne dla obu języków**; przełącznik języka dokleja aktualną kotwicę, więc czytelnik nie traci miejsca
- Nowa wersja językowa: skopiuj `index.html` do katalogu z kodem języka, przetłumacz treść, zostaw identyfikatory bez zmian, dopisz `<link rel="alternate" hreflang>` i pozycję w obu przełącznikach we wszystkich plikach
- Wartości liczbowe są przepisane z dokumentu projektowego — przy zmianie balansu w dokumencie trzeba je zaktualizować także tutaj

---

Raido Development
