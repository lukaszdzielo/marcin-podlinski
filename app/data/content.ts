/**
 * Wszystkie teksty strony w jednym miejscu.
 * Puste listy (terminy, opinie, FAQ) chowają odpowiednie sekcje na stronie.
 */

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
		// Przykład: { title: 'Warsztaty sushi', date: '2026-11-14', url: 'https://…' },
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
	intro: 'Każdy ma swoje stanowisko, składniki i narzędzia. Ja jestem obok – podpowiadam i poprawiam.',
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
	],
}

export type Review = {
	name: string
	type: 'warsztaty' | 'catering'
	text: string
}

export const reviews: { heading: string; intro: string; sample: boolean; items: Review[] } = {
	heading: 'Co o mnie mówią',
	intro: 'Kilka słów od osób, które gotowały ze mną na warsztatach albo zamawiały u mnie catering.',
	// PODGLĄD DLA KLIENTA: poniższe opinie są przykładowe – przed startem strony
	// podmień je na prawdziwe (za zgodą autorów, tylko imię i inicjał nazwiska)
	// i ustaw `sample: false`. Dopóki `sample: true`, strona ma noindex (nie trafia do Google).
	// Sekcja i link „Opinie” chowają się, gdy lista jest pusta.
	sample: true,
	items: [
		{ name: 'Anna K.', type: 'warsztaty', text: 'Zamiast kolejnego wyjścia na kręgle zrobiliśmy sushi i to był strzał w dziesiątkę. Marcin tłumaczy spokojnie i z humorem, a na koniec wszyscy byli dumni ze swoich rolek.' },
		{ name: 'Magda P.', type: 'warsztaty', text: 'Świetna atmosfera i dużo śmiechu. Nawet dziewczyny, które pierwszy raz trzymały matę, zrobiły piękne uramaki.' },
		{ name: 'Krzysztof L.', type: 'catering', text: 'Zamawialiśmy catering na spotkanie z klientami. Wszystko świeże, ładnie podane i na czas. Zestawy zniknęły w kwadrans.' },
	],
}

export const faq: { heading: string; items: { q: string; a: string }[] } = {
	heading: 'O co najczęściej pytacie',
	// Sekcja i link „FAQ” w menu chowają się, dopóki lista jest pusta.
	// Do uzupełnienia przez Marcina (odkomentuj, gdy będą odpowiedzi):
	// { q: 'Czy trzeba umieć gotować?', a: 'Nie. Zaczynamy od podstaw – od ryżu i krojenia – i krok po kroku dochodzimy do gotowych rolek.' },
	// { q: 'Ile osób może wziąć udział?', a: '' },
	// { q: 'Gdzie odbywają się warsztaty?', a: '' },
	// { q: 'Ile trwają warsztaty i co jest w cenie?', a: '' },
	// { q: 'Czy jest wersja wegetariańska?', a: '' },
	// { q: 'Z jakim wyprzedzeniem zarezerwować termin?', a: '' },
	items: [],
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
