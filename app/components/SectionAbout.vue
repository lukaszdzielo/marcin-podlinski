<script setup lang="ts">
import { about } from '~/data/content'
import dots from '~/assets/img/section-dots.svg'
</script>

<template>
	<section id="o-mnie" class="bg-ink pt-16 pb-22 text-paper sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36">
		<div class="container flex flex-col-reverse items-center gap-16 lg:flex-row">
			<div class="lg:w-1/2">
				<SectionHeading :text="about.heading" />
				<p class="mt-7 mb-5 text-lg">{{ about.lead }}</p>
				<p v-for="(p, i) in about.paragraphs" :key="i" class="mb-5 text-[#e0e0e0] last:mb-0">{{ p }}</p>
			</div>
			<div class="relative w-full pt-12 lg:w-1/2">
				<img :src="dots" alt="" aria-hidden="true" class="absolute top-0 right-0 z-10 w-1/6 opacity-80">
				<AppPicture
					name="group-with-marcin"
					alt="Marcin z uczestnikami warsztatów"
					sizes="(min-width: 1024px) 40vw, 90vw"
					img-class="aspect-[3/2] w-4/5 object-cover"
				/>
				<AppPicture
					name="green-rolls"
					alt="Zielone rolki sushi na niebieskim talerzu"
					sizes="(min-width: 1024px) 30vw, 60vw"
					img-class="relative -mt-18 ms-[38%] aspect-[3/2] w-[62%] object-cover outline-8 outline-ink"
				/>
			</div>
		</div>
	</section>
</template>
