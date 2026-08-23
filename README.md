# ARLS-ZA — strona projektu

Strona opisująca systemy gry **ARLS-ZA — Almost Real Life Survival: Zombie Apocalypse**, hiper-realistycznego survivalu GPS na Androida.

**Na żywo:** [English](https://frosttod.github.io/ARLS-ZA-Game/) · [polski](https://frosttod.github.io/ARLS-ZA-Game/pl/)

Kod gry i dokumentacja projektowa: [Frosttod/ARLS-ZA](https://github.com/Frosttod/ARLS-ZA)

## Struktura

```
index.html       → EN, wersja domyślna
pl/index.html    → PL
items.html       → katalog przedmiotów, EN — GENEROWANY
pl/items.html    → katalog przedmiotów, PL — GENEROWANY
assets/site.css  → wspólny arkusz stylów
assets/site.js   → wspólny skrypt
maps/            → pakiety kafelków PMTiles
```

Statyczny HTML. Zero zależności zewnętrznych, zero procesu budowania, zero wczytywanych z sieci fontów i bibliotek — strona działa też otwarta z dysku.

## Publikacja

**Settings → Pages → Source:** `Deploy from a branch`, **Branch:** `main`, folder **`/ (root)`**.

## Utrzymanie

- Wygląd zmienia się wyłącznie w `assets/site.css` — obie wersje językowe współdzielą arkusz
- Identyfikatory sekcji (`#pillar`, `#combat`, `#hotspots`…) są **wspólne dla obu języków**; przełącznik języka dokleja aktualną kotwicę, więc czytelnik nie traci miejsca
- Nowa wersja językowa: skopiuj `index.html` do katalogu z kodem języka, przetłumacz treść, zostaw identyfikatory bez zmian, dopisz `<link rel="alternate" hreflang>` i pozycję w obu przełącznikach we wszystkich plikach
- ⚠️ **`items.html` i `pl/items.html` są generowane** — nie edytuj ich ręcznie. W repozytorium gry:

  ```
  dart run tool/build_item_pages.dart
  ```

  Narzędzie czyta `assets/data/*.json` — te same pliki, które gra wysyła — i nadpisuje oba katalogi. Ręczna poprawka przepada przy najbliższym uruchomieniu.
- Wartości liczbowe w `index.html` są przepisane **z kodu gry**, nie z zamiarów. Źródłem prawdy jest [MECHANICS.md](https://github.com/Frosttod/ARLS-ZA/blob/main/MECHANICS.md) w repozytorium gry — dokument „stan faktyczny", który w kilkunastu miejscach świadomie odchodzi od dokumentu projektowego. Przy zmianie balansu aktualizuj w kolejności: kod → test → MECHANICS → ta strona
- Obie wersje językowe muszą mieć **tę samą liczbę sekcji i tabel**. Przełącznik języka dokleja aktualną kotwicę, więc rozjazd struktury gubi czytelnika w połowie tekstu

---

Raido Development
