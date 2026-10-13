<script setup lang="ts">
import { offer } from '~/data/content'

const photos: Record<string, { name: string; alt: string }> = {
	firmy: { name: 'corporate-workshop', alt: 'Warsztaty sushi dla zespołu' },
	prywatne: { name: 'rolling-sushi', alt: 'Zawijanie rolki sushi na macie' },
	catering: { name: 'sushi-stand', alt: 'Zestaw sushi na drewnianym stojaku' },
}
</script>

<template>
	<section id="oferta" class="pt-18 pb-10 sm:pt-22 lg:pt-26 lg:pb-14">
		<div class="container">
			<SectionHeading :text="offer.heading" class="mb-14" />
			<div class="grid gap-7 md:grid-cols-3">
				<article v-for="item in offer.items" :key="item.key" class="flex flex-col bg-paper">
					<AppPicture
						:name="photos[item.key]!.name"
						:alt="photos[item.key]!.alt"
						sizes="(min-width: 768px) 33vw, 100vw"
						img-class="aspect-[4/3] w-full object-cover"
					/>
					<div class="flex flex-1 flex-col gap-3 p-7">
						<h3 class="font-display text-[22px] uppercase">{{ item.title }}</h3>
						<p class="flex-1">{{ item.text }}</p>
						<a href="#kontakt" class="mt-1 inline-flex min-h-11 items-center font-normal text-primary-dark hover:underline">{{ item.link }}</a>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
