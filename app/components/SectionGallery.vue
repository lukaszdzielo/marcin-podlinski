<script setup lang="ts">
import { contact, gallery } from '~/data/content'

const [big, ...small] = gallery.photos
const handleParts = gallery.instagramHandle.split(/(?<=_)/)

// Pełnoekranowa galeria
const current = ref<number | null>(null)
const closeBtn = ref<HTMLButtonElement>()
let opener: HTMLElement | null = null
const count = gallery.photos.length
const photo = computed(() => (current.value === null ? null : gallery.photos[current.value]!))

const open = (i: number, e: Event) => {
	opener = e.currentTarget as HTMLElement
	current.value = i
	document.documentElement.style.overflow = 'hidden'
	nextTick(() => closeBtn.value?.focus())
}
const close = () => {
	current.value = null
	document.documentElement.style.overflow = ''
	opener?.focus()
}
const go = (dir: number) => {
	if (current.value !== null) current.value = (current.value + dir + count) % count
}
const onKeydown = (e: KeyboardEvent) => {
	if (current.value === null) return
	if (e.key === 'Escape') close()
	if (e.key === 'ArrowRight') go(1)
	if (e.key === 'ArrowLeft') go(-1)
}
// Przesunięcie palcem w lewo/prawo na telefonie
let touchX = 0
const onTouchStart = (e: TouchEvent) => (touchX = e.touches[0]!.clientX)
const onTouchEnd = (e: TouchEvent) => {
	const dx = e.changedTouches[0]!.clientX - touchX
	if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown)
	document.documentElement.style.overflow = ''
})

const tile = 'group relative block h-full w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
</script>

<template>
	<section aria-label="Galeria zdjęć" class="py-22 sm:py-28 lg:py-40">
		<div class="container grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 lg:auto-rows-[250px]">
			<button type="button" :class="tile" class="col-span-2 row-span-2" :aria-label="`Powiększ zdjęcie: ${big!.alt}`" @click="open(0, $event)">
				<AppPicture
					:name="big!.name"
					:alt="big!.alt"
					sizes="(min-width: 640px) 50vw, 100vw"
					class="h-full"
					img-class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<GalleryZoomIcon />
			</button>
			<div class="col-span-2 flex flex-col justify-between gap-3 bg-ink p-5 text-paper sm:col-span-1 sm:p-6 lg:p-7">
				<h2 class="font-display text-xl leading-tight uppercase lg:text-2xl">{{ gallery.heading }}</h2>
				<a :href="contact.instagram" target="_blank" rel="noopener" class="inline-flex min-h-11 items-center font-normal text-[#ff8a80] hover:text-white">
					<!-- Nick łamie się tylko po podkreślnikach -->
					<span><template v-for="(part, i) in handleParts" :key="i">{{ part }}<wbr></template> →</span>
				</a>
			</div>
			<button
				v-for="(p, i) in small"
				:key="p.name"
				type="button"
				:class="[tile, { 'max-sm:hidden': i === small.length - 1 }]"
				:aria-label="`Powiększ zdjęcie: ${p.alt}`"
				@click="open(i + 1, $event)"
			>
				<AppPicture
					:name="p.name"
					:alt="p.alt"
					sizes="(min-width: 640px) 25vw, 50vw"
					class="h-full"
					img-class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<GalleryZoomIcon />
			</button>
		</div>

		<!-- Pełnoekranowa galeria -->
		<Transition
			enter-active-class="transition-opacity duration-200"
			leave-active-class="transition-opacity duration-200"
			enter-from-class="opacity-0"
			leave-to-class="opacity-0"
		>
			<div
				v-if="photo"
				role="dialog"
				aria-modal="true"
				:aria-label="`Galeria zdjęć – ${current! + 1} z ${count}`"
				class="fixed inset-0 z-50 flex flex-col bg-[#111] text-paper"
				@touchstart.passive="onTouchStart"
				@touchend="onTouchEnd"
			>
				<div class="flex items-center justify-between px-4 py-3 sm:px-6">
					<span class="text-sm">{{ current! + 1 }} / {{ count }}</span>
					<button ref="closeBtn" type="button" aria-label="Zamknij galerię" class="flex size-12 items-center justify-center rounded-full hover:bg-white/10" @click="close">
						<svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
					</button>
				</div>
				<div class="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" @click.self="close">
					<AppPicture
						:key="photo.name"
						:name="photo.name"
						:alt="photo.alt"
						sizes="(min-width: 640px) calc(100vw - 10rem), 100vw"
						loading="eager"
						class="max-h-full"
						img-class="max-h-[calc(100svh-9rem)] w-auto max-w-full object-contain"
					/>
					<button type="button" aria-label="Poprzednie zdjęcie" class="absolute left-2 hidden size-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 sm:left-5 sm:flex" @click="go(-1)">
						<svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
					</button>
					<button type="button" aria-label="Następne zdjęcie" class="absolute right-2 hidden size-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 sm:right-5 sm:flex" @click="go(1)">
						<svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
					</button>
				</div>
				<div class="flex items-center justify-center gap-4 px-4 py-4">
					<button type="button" aria-label="Poprzednie zdjęcie" class="flex size-12 items-center justify-center rounded-full bg-white/10 sm:hidden" @click="go(-1)">
						<svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
					</button>
					<p class="text-center text-sm text-[#bdbdbd]">{{ photo.alt }}</p>
					<button type="button" aria-label="Następne zdjęcie" class="flex size-12 items-center justify-center rounded-full bg-white/10 sm:hidden" @click="go(1)">
						<svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
					</button>
				</div>
			</div>
		</Transition>
	</section>
</template>
