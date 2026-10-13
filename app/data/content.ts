/**
 * Wszystkie teksty strony w jednym miejscu.
 * Puste listy (terminy, opinie, FAQ) chowają odpowiednie sekcje na stronie.
 */

/**
 * TRYB PODGLĄDU (makieta dla klienta / portfolio):
 * terminy, opinie, odpowiedzi w FAQ i część tekstów „o mnie” są przykładowe.
 * Przed startem strony podmień je na prawdziwe i ustaw `preview: false`.
 * Dopóki `preview: true`, strona ma noindex (nie trafia do Google).
 */
export const preview = true

export const site = {
	name: 'Sushi Show',
	owner: 'Marcin Podliński',
	title: 'Sushi Show – warsztaty sushi i catering | Marcin Podliński',
	description:
		'Warsztaty sushi dla firm i grup prywatnych oraz catering sushi na wydarzenia. Zapisz się na najbliższe warsztaty z Marcinem Podlińskim.',
}

export const nav = [
	{ text: 'Terminarz', to: '#terminarz' },
	{ text: 'Oferta', to: '#oferta' },
	{ text: 'Warsztaty', to: '#warsztaty' },
	{ text: 'Opinie', to: '#opinie' },
	{ text: 'FAQ', to: '#faq' },
]

export const navCta = { text: 'Zapytaj o termin', to: '#kontakt' }

export const hero = {
	heading: 'Zrób sushi, które chce się zjeść',
	text: 'Warsztaty sushi dla firm i grup prywatnych oraz catering na wydarzenia. Uczysz się od podstaw, przy własnym stanowisku – a na koniec siadamy razem do stołu.',
	primary: { text: 'Najbliższe warsztaty', to: '#terminarz' },
	secondary: { text: 'Zobacz ofertę', to: '#oferta' },
	chips: ['Warsztaty firmowe', 'Grupy prywatne', 'Catering na wydarzenia'],
}

/**
 * Terminarz warsztatów otwartych.
 *
 * Najprościej: Marcin prowadzi arkusz Google z kolumnami
 *   tytul | data (RRRR-MM-DD) | link
 * i publikuje go jako CSV (Plik → Udostępnij → Opublikuj w internecie → CSV).
 * Wklej ten adres do `sheetCsvUrl` – strona pobierze terminy przy każdym wejściu.
 * Gdy adres jest pusty, używana jest lista `events` poniżej.
 * Terminy z przeszłości chowają się automatycznie.
 */
export const schedule = {
	heading: ['Najbliższe', 'warsztaty'],
	otherLink: { text: 'Żaden termin nie pasuje? Zorganizuj warsztaty dla swojej grupy →', to: '#oferta' },
	empty: 'Nowe terminy pojawią się wkrótce – zajrzyj na mój Instagram albo napisz do mnie.',
	sheetCsvUrl: '',
	maxItems: 4,
	events: [
		{ title: 'Warsztaty sushi', date: '2026-11-14', url: '#kontakt' },
		{ title: 'Warsztaty sushi', date: '2026-11-20', url: '#kontakt' },
		{ title: 'Warsztaty sushi', date: '2026-11-28', url: '#kontakt' },
		{ title: 'Warsztaty sushi', date: '2026-12-12', url: '#kontakt' },
	] as ScheduleEvent[],
}

export type ScheduleEvent = { title: string; date: string; url: string }

export const offer = {
	heading: 'Trzy sposoby na Sushi Show',
	items: [
		{
			key: 'firmy',
			title: 'Warsztaty firmowe',
			text: 'Integracja, która smakuje. Twój zespół pracuje razem przy stole, a ja pokazuję wszystko od podstaw. Na koniec – wspólna degustacja.',
			link: 'Zapytaj o warsztaty firmowe →',
		},
		{
			key: 'prywatne',
			title: 'Grupy prywatne',
			text: 'Urodziny, wieczór panieński, spotkanie ze znajomymi albo prezent dla kogoś bliskiego. Ty zbierasz ekipę, ja przynoszę resztę.',
			link: 'Zapytaj o termin →',
		},
		{
			key: 'catering',
			title: 'Catering',
			text: 'Zestawy sushi na spotkania firmowe, przyjęcia i imprezy. Wielkość i skład dopasuję do liczby gości i ich preferencji.',
			link: 'Zapytaj o catering →',
		},
	],
}

export const cta = {
	heading: ['Zorganizuj ', 'własny', ' Sushi Show'],
	text: 'Integracja firmowa, urodziny, wieczór panieński albo spotkanie ze znajomymi. Napisz, ile osób i jaki termin Cię interesuje – przygotuję propozycję.',
	points: ['Składniki i sprzęt w cenie', 'Bez doświadczenia', 'Wspólna degustacja'],
	button: { text: 'Zapytaj o termin', to: '#kontakt' },
}

export const workshops = {
	heading: 'Jak wyglądają moje warsztaty',
	intro: 'Każdy ma swoje stanowisko, składniki i narzędzia. Ja jestem obok – podpowiadam i poprawiam. Warsztaty trwają około 3 godzin.',
	steps: [
		{ title: 'Ryż i składniki', text: 'Gotujemy i doprawiamy ryż, poznajemy ryby, warzywa i dodatki.' },
		{ title: 'Krojenie', text: 'Pokażę Ci, jak trzymać nóż i kroić rybę oraz warzywa do rolek i nigiri.' },
		{ title: 'Zawijanie', text: 'Razem zawiniemy maki, futomaki i uramaki, a potem uformujemy nigiri.' },
		{ title: 'Degustacja', text: 'Siadamy razem do stołu i jemy to, co sami przygotowaliście.' },
	],
}

export const learn = {
	heading: 'Nauczę Was między innymi',
	items: [
		'Jak ugotować i doprawić ryż do sushi',
		'Jak kroić rybę i warzywa',
		'Zawijania maki i futomaki',
		'Uramaki – rolek z ryżem na zewnątrz',
		'Formowania nigiri',
		'Podania i doboru dodatków',
	],
}

export const gallery = {
	heading: 'Z mojej kuchni',
	instagramHandle: '@marcin_podlinski_sushi_chef',
}

export const about = {
	heading: 'Cześć, jestem Marcin',
	lead: 'Sushi master i twórca Sushi Show. Japońska kuchnia to moja pasja, a dzielenie się nią z innymi to najlepsza część mojej pracy.',
	paragraphs: [
		'Na warsztatach stawiam na konkret: pokazuję, jak przygotować ryż, jak kroić rybę i warzywa i jak zawinąć rolkę, która się nie rozpada. Bez zadęcia, za to z dużą dawką humoru.',
		'Sushi robię od lat – zaczynałem w kuchniach restauracji, a dziś prowadzę własne warsztaty i catering. Najbardziej lubię moment, gdy ktoś, kto pierwszy raz trzyma matę, zawija rolkę, z której jest naprawdę dumny.',
	],
}

export type Review = {
	name: string
	type: 'warsztaty' | 'catering'
	text: string
}

export const reviews: { heading: string; intro: string; items: Review[] } = {
	heading: 'Co o mnie mówią',
	intro: 'Kilka słów od osób, które gotowały ze mną na warsztatach albo zamawiały u mnie catering.',
	items: [
		{ name: 'Anna K.', type: 'warsztaty', text: 'Zamiast kolejnego wyjścia na kręgle zrobiliśmy sushi i to był strzał w dziesiątkę. Marcin tłumaczy spokojnie i z humorem, a na koniec wszyscy byli dumni ze swoich rolek.' },
		{ name: 'Magda P.', type: 'warsztaty', text: 'Świetna atmosfera i dużo śmiechu. Nawet dziewczyny, które pierwszy raz trzymały matę, zrobiły piękne uramaki.' },
		{ name: 'Krzysztof L.', type: 'catering', text: 'Zamawialiśmy catering na spotkanie z klientami. Wszystko świeże, ładnie podane i na czas. Zestawy zniknęły w kwadrans.' },
	],
}

export const faq: { heading: string; items: { q: string; a: string }[] } = {
	heading: 'O co najczęściej pytacie',
	items: [
		{ q: 'Czy trzeba umieć gotować?', a: 'Nie. Zaczynamy od podstaw – od ryżu i krojenia – i krok po kroku dochodzimy do gotowych rolek.' },
		{ q: 'Ile osób może wziąć udział?', a: 'Warsztaty prowadzę dla grup od 6 do 20 osób. Przy większej grupie dzielimy się na dwie tury – napisz, ile Was będzie, a coś zaproponuję.' },
		{ q: 'Gdzie odbywają się warsztaty?', a: 'U mnie w kuchni warsztatowej albo u Was – w biurze, lokalu czy w domu. Na miejsce przywożę cały sprzęt i składniki.' },
		{ q: 'Ile trwają warsztaty i co jest w cenie?', a: 'Około 3 godzin. W cenie są wszystkie składniki, sprzęt, fartuchy i napoje bezalkoholowe. To, czego nie zjecie na miejscu, zabieracie do domu.' },
		{ q: 'Czy jest wersja wegetariańska?', a: 'Tak. Przygotuję rolki z warzywami, tofu i omletem tamago – wystarczy, że dasz znać przy rezerwacji.' },
		{ q: 'Z jakim wyprzedzeniem zarezerwować termin?', a: 'Najlepiej 2–3 tygodnie wcześniej, a przed świętami nawet miesiąc. Otwarte terminy znajdziesz w terminarzu powyżej.' },
	],
}

export const contact = {
	formHeading: 'Napisz do mnie',
	heading: 'Skontaktuj się ze mną',
	text: 'Wolisz porozmawiać? Zadzwoń albo napisz – chętnie odpowiem na każde pytanie o terminy, ceny i szczegóły.',
	kinds: ['Warsztaty firmowe', 'Grupa prywatna', 'Catering'],
	consent: 'Wyrażam zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie.',
	// Klucz z https://web3forms.com (darmowy). Gdy pusty – formularz otwiera program pocztowy.
	web3formsKey: '',
	phone: '+48 517 475 292',
	email: 'sushibarshow@gmail.com',
	instagram: 'https://www.instagram.com/marcin_podlinski_sushi_chef/',
	nip: '646 276 44 33',
	regon: '528137470',
	// TODO przed startem: adres strony z polityką prywatności (formularz zbiera dane – wymóg RODO)
	privacyUrl: '',
}
