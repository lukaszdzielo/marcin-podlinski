import { schedule, type ScheduleEvent } from '~/data/content'

const MONTHS = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
const DAYS = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sob']

export type ScheduleCard = ScheduleEvent & { day: string; month: string; dow: string }

/** Prosty parser CSV (obsługuje cudzysłowy). */
function parseCsv(text: string): string[][] {
	const rows: string[][] = []
	let row: string[] = [], cell = '', quoted = false
	for (let i = 0; i < text.length; i++) {
		const c = text[i]
		if (quoted) {
			if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ }
			else if (c === '"') quoted = false
			else cell += c
		}
		else if (c === '"') quoted = true
		else if (c === ',') { row.push(cell); cell = '' }
		else if (c === '\n' || c === '\r') {
			if (c === '\r' && text[i + 1] === '\n') i++
			row.push(cell); rows.push(row); row = []; cell = ''
		}
		else cell += c
	}
	if (cell || row.length) { row.push(cell); rows.push(row) }
	return rows
}

function toCards(list: ScheduleEvent[]): ScheduleCard[] {
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	return list
		.map(e => ({ ...e, d: new Date(`${e.date}T00:00:00`) }))
		.filter(e => !Number.isNaN(e.d.getTime()) && e.d >= today)
		.sort((a, b) => a.d.getTime() - b.d.getTime())
		.slice(0, schedule.maxItems)
		.map(({ d, ...e }) => ({ ...e, day: String(d.getDate()), month: MONTHS[d.getMonth()]!, dow: DAYS[d.getDay()]! }))
}

/**
 * Terminy warsztatów: z arkusza Google (CSV), a gdy go nie ma – z content.ts.
 * Daty z przeszłości są pomijane po stronie przeglądarki.
 */
export function useSchedule() {
	const events = ref<ScheduleEvent[]>(schedule.events)
	const cards = computed(() => toCards(events.value))

	onMounted(async () => {
		if (!schedule.sheetCsvUrl) return
		try {
			const res = await fetch(schedule.sheetCsvUrl, { cache: 'no-store' })
			const rows = parseCsv(await res.text()).filter(r => r.some(c => c.trim()))
			const [, ...data] = rows // pierwszy wiersz to nagłówki: tytul,data,link
			events.value = data.map(([title = '', date = '', url = '']) => ({ title: title.trim(), date: date.trim(), url: url.trim() }))
		}
		catch {
			// zostają terminy z content.ts
		}
	})

	return { cards }
}
