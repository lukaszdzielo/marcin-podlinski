<script setup lang="ts">
import { contact, schedule } from '~/data/content'

const { cards } = useSchedule()
</script>

<template>
	<section id="terminarz" class="bg-[#f3eee8] py-16 sm:py-20 lg:py-26">
		<div class="container">
			<div class="mb-9 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
				<SectionHeading>{{ schedule.heading[0] }}<br>{{ schedule.heading[1] }}</SectionHeading>
				<a :href="schedule.otherLink.to" class="inline-flex min-h-11 items-center font-normal text-primary-dark hover:underline">{{ schedule.otherLink.text }}</a>
			</div>

			<!-- Telefon: karuzela na całą szerokość ekranu. Tablet: 2 × 2. Desktop: 4 w rzędzie -->
			<ul v-if="cards.length" class="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
				<li
					v-for="card in cards"
					:key="card.date + card.title"
					class="flex shrink-0 basis-[72%] snap-start"
				>
					<a
						:href="card.url"
						:aria-label="`Zapisz się: ${card.title}, ${card.day} ${card.month}`"
						class="group relative flex w-full flex-col gap-1 rounded-xl bg-white p-5 pe-6 pb-6 transition-shadow hover:shadow-lg"
					>
						<span class="flex items-baseline gap-2.5">
							<span class="font-display text-5xl leading-none">{{ card.day }}</span>
							<span class="text-sm font-normal tracking-wider text-primary-dark uppercase">{{ card.month }} · {{ card.dow }}</span>
						</span>
						<span class="mt-2.5 pe-12 text-[17px] font-normal">{{ card.title }}</span>
						<span class="absolute right-4.5 bottom-4.5 flex size-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110" aria-hidden="true">
							<svg class="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
						</span>
					</a>
				</li>
			</ul>
			<p v-else class="text-ink-soft">{{ schedule.empty }}</p>

			<p class="mt-4 text-[15px] text-ink-soft">
				Nowe terminy ogłaszam też na <a :href="contact.instagram" target="_blank" rel="noopener" class="font-normal text-ink underline">Instagramie</a>.
			</p>
		</div>
	</section>
</template>
