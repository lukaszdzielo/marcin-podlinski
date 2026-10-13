<script setup lang="ts">
import { faq, nav, navCta, reviews, site } from '~/data/content'

// Linki do sekcji, które są ukryte (brak opinii / FAQ), nie pokazują się w menu
const hidden = [!reviews.items.length && '#opinie', !faq.items.length && '#faq'].filter(Boolean)
const links = nav.filter(item => !hidden.includes(item.to))
import logo from '~/assets/img/logo-light.svg'
import signet from '~/assets/img/signet-light.svg'

const open = ref(false)
const scrolled = ref(false)
const close = () => (open.value = false)

const onScroll = () => (scrolled.value = window.scrollY > 40)
const onKeydown = (e: KeyboardEvent) => e.key === 'Escape' && close()

onMounted(() => {
	onScroll()
	window.addEventListener('scroll', onScroll, { passive: true })
	window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
	window.removeEventListener('scroll', onScroll)
	window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
	<header
		class="fixed inset-x-0 top-0 z-40 mx-auto max-w-[1920px] text-paper transition-colors duration-300"
		:class="scrolled || open ? 'bg-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'"
	>
		<nav class="container flex items-center justify-between gap-6 py-3" aria-label="Główna nawigacja">
			<a href="#start" class="block h-12 shrink-0" @click="close">
				<picture>
					<source media="(min-width: 1024px)" :srcset="logo" width="223" height="48">
					<img :src="signet" :alt="`${site.name} – ${site.owner}`" width="86" height="48" class="h-12 w-auto">
				</picture>
			</a>

			<ul class="hidden items-center gap-7 lg:flex">
				<li v-for="item in links" :key="item.to">
					<a :href="item.to" class="transition-colors hover:text-primary">{{ item.text }}</a>
				</li>
				<li>
					<a :href="navCta.to" class="rounded-full bg-primary px-5 py-2.5 text-white transition-colors hover:bg-primary-dark">{{ navCta.text }}</a>
				</li>
			</ul>

			<button
				type="button"
				class="-me-2 flex size-12 items-center justify-center lg:hidden"
				:aria-expanded="open"
				aria-controls="menu-mobile"
				:aria-label="open ? 'Zamknij menu' : 'Otwórz menu'"
				@click="open = !open"
			>
				<svg v-if="!open" class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
				<svg v-else class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
			</button>
		</nav>

		<ul v-show="open" id="menu-mobile" class="flex flex-col items-center gap-5 border-t border-white/10 pt-6 pb-8 lg:hidden">
			<li v-for="item in links" :key="item.to">
				<a :href="item.to" @click="close">{{ item.text }}</a>
			</li>
			<li>
				<a :href="navCta.to" class="rounded-full bg-primary px-5 py-2.5 text-white" @click="close">{{ navCta.text }}</a>
			</li>
		</ul>
	</header>
</template>
