<script setup lang="ts">
import { reviews, type Review } from '~/data/content'

const items = reviews.items
const index = ref(0)
const perView = ref(2)
const showAll = ref(false)
const filter = ref<'all' | Review['type']>('all')
const filters = [
	{ id: 'all', label: 'Wszystkie' },
	{ id: 'warsztaty', label: 'Warsztaty' },
	{ id: 'catering', label: 'Catering' },
] as const

const visible = computed(() =>
	Array.from({ length: Math.min(perView.value, items.length) }, (_, k) => items[(index.value + k) % items.length]!),
)
const position = computed(() => {
	const last = Math.min(index.value + perView.value, items.length)
	return `${last > index.value + 1 ? `${index.value + 1}–${last}` : index.value + 1} z ${items.length}`
})
const filtered = computed(() => items.filter(r => filter.value === 'all' || r.type === filter.value))

const step = (dir: number) => {
	index.value = (index.value + dir * perView.value + items.length * 10) % items.length
}
const onResize = () => (perView.value = window.innerWidth < 640 ? 1 : 2)
const onKeydown = (e: KeyboardEvent) => e.key === 'Escape' && (showAll.value = false)

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
	window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
	window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
	<section v-if="items.length" id="opinie" class="py-22 sm:py-28 lg:py-40">
		<div class="container flex flex-col gap-12 lg:flex-row">
			<div class="lg:w-1/3">
				<SectionHeading :text="reviews.heading" />
				<p class="mt-7 max-w-sm text-ink-soft">{{ reviews.intro }}</p>
				<button type="button" class="mt-7 inline-flex min-h-12 items-center rounded-full border border-ink px-6 transition-colors hover:bg-ink hover:text-white" @click="showAll = true">
					Zobacz wszystkie opinie ({{ items.length }})
				</button>
				<div v-if="items.length > perView" class="mt-8 flex items-center gap-3">
					<button type="button" aria-label="Poprzednie opinie" class="flex size-12 items-center justify-center rounded-full border border-ink" @click="step(-1)">
						<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
					</button>
					<button type="button" aria-label="Następne opinie" class="flex size-12 items-center justify-center rounded-full bg-ink text-white" @click="step(1)">
						<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
					</button>
					<span class="ms-2 text-sm text-ink-soft">{{ position }}</span>
				</div>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:w-2/3">
				<figure
					v-for="(r, i) in visible"
					:key="r.name + i"
					class="flex flex-col gap-4 p-8"
					:class="i % 2 ? 'bg-ink text-paper' : 'bg-paper'"
				>
					<div class="flex items-start justify-between">
						<span class="h-10 font-display text-[80px] leading-[0.6]" :class="i % 2 ? 'text-[#ff6f60]' : 'text-primary-dark'" aria-hidden="true">“</span>
						<span role="img" aria-label="Ocena 5 na 5" class="tracking-widest" :class="i % 2 ? 'text-[#ff6f60]' : 'text-primary-dark'">★★★★★</span>
					</div>
					<blockquote class="flex-1 text-[17px]">{{ r.text }}</blockquote>
					<figcaption class="flex items-center gap-3 border-t pt-4" :class="i % 2 ? 'border-white/20' : 'border-[#d6d6d6]'">
						<span class="flex size-11 shrink-0 items-center justify-center rounded-full font-display" :class="i % 2 ? 'bg-paper text-ink' : 'bg-ink text-paper'" aria-hidden="true">{{ r.name.charAt(0) }}</span>
						<span class="text-sm font-normal">{{ r.name }}</span>
					</figcaption>
				</figure>
			</div>
		</div>

		<div v-if="showAll" class="fixed inset-0 z-50 flex items-start justify-center bg-ink/75 px-4 py-12" @click.self="showAll = false">
			<div role="dialog" aria-modal="true" aria-label="Wszystkie opinie" class="max-h-full w-full max-w-3xl overflow-auto bg-white">
				<div class="sticky top-0 border-b border-[#e0e0e0] bg-white px-7 pt-6 pb-4">
					<div class="flex items-center justify-between gap-4">
						<h3 class="font-display text-2xl uppercase">Wszystkie opinie</h3>
						<button type="button" aria-label="Zamknij" class="flex size-11 items-center justify-center rounded-full border border-ink" @click="showAll = false">
							<svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
						</button>
					</div>
					<div class="mt-4 flex flex-wrap gap-2">
						<button
							v-for="f in filters"
							:key="f.id"
							type="button"
							:aria-pressed="filter === f.id"
							class="min-h-10 rounded-full border px-4 text-sm"
							:class="filter === f.id ? 'border-ink bg-ink text-white' : 'border-[#9e9e9e]'"
							@click="filter = f.id"
						>{{ f.label }}</button>
					</div>
				</div>
				<div class="px-7 pt-2 pb-7">
					<figure v-for="(r, i) in filtered" :key="r.name + i" class="flex gap-4 border-b border-[#eee] py-5">
						<span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink font-display text-paper" aria-hidden="true">{{ r.name.charAt(0) }}</span>
						<div class="flex-1">
							<figcaption class="flex flex-wrap justify-between gap-x-4 text-sm text-ink-soft">
								<span class="font-normal text-ink">{{ r.name }}</span>
								<span role="img" aria-label="Ocena 5 na 5" class="tracking-widest text-primary-dark">★★★★★</span>
							</figcaption>
							<blockquote class="mt-2">{{ r.text }}</blockquote>
						</div>
					</figure>
				</div>
			</div>
		</div>
	</section>
</template>
