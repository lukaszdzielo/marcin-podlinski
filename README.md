# Sushi Show – Marcin Podliński

Strona wizytówka: warsztaty sushi, terminarz i catering. Nuxt 4 + Tailwind CSS 4, publikowana na GitHub Pages.

## Start

```bash
npm install
npm run dev        # http://localhost:3000/marcin-podlinski/
npm run generate   # statyczna wersja w .output/public
```

Wymagany Node.js 22.22+ (lub 24 LTS).

## Gdzie co jest

- `app/data/content.ts` – **wszystkie teksty i dane strony** (hero, terminarz, oferta, FAQ, opinie, kontakt)
- `app/components/Section*.vue` – sekcje strony, `AppHeader` / `AppFooter` – nagłówek, formularz i stopka
- `app/components/AppPicture.vue` – zdjęcia w **AVIF z fallbackiem WebP**, po 2–3 szerokości (`srcset`), przez `@nuxt/image`
- `app/assets/img/photos/` – tylko oryginały (`<nazwa>.jpg`, wycięte w `.png`, maks. 2400 px); warianty generują się przy `nuxt generate` do `_ipx/`
- Nowe zdjęcie: wrzuć oryginał do `photos/` i użyj `<AppPicture name="<nazwa>" … />`
- `app/composables/useSchedule.ts` – terminy warsztatów (arkusz Google CSV albo lista z `content.ts`)

## Terminarz

Najprościej: arkusz Google z kolumnami `tytul | data (RRRR-MM-DD) | link`, opublikowany jako CSV
(Plik → Udostępnij → Opublikuj w internecie → CSV). Adres wklej do `schedule.sheetCsvUrl` w `content.ts`.
Przeszłe terminy chowają się same, pokazywane są maks. 4 najbliższe.

## Formularz

Bez klucza otwiera program pocztowy z gotową wiadomością. Po wpisaniu klucza z web3forms.com
do `contact.web3formsKey` wysyła wiadomość bezpośrednio.

## Opinie

Sekcja „Co o mnie mówią” pokazuje się dopiero, gdy w `content.ts` są prawdziwe opinie (`reviews.items`).
