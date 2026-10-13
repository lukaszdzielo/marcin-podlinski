<script setup lang="ts">
import { hero } from '~/data/content'
</script>

<template>
	<section id="start" class="relative overflow-hidden bg-ink text-paper">
		<!-- Zdjęcie: telefon – pas u góry, desktop – całe tło przesunięte w prawo -->
		<AppPicture
			name="hero-group"
			:widths="[640, 1280, 1590]"
			alt=""
			loading="eager"
			fetchpriority="high"
			sizes="(min-width: 1920px) 1920px, 100vw"
			img-class="absolute top-0 left-0 h-[340px] w-full object-cover object-[50%_30%] sm:h-[440px] lg:left-[14%] lg:h-full lg:w-[120%] lg:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.04)_5%,rgba(0,0,0,0.13)_10%,rgba(0,0,0,0.27)_15%,rgba(0,0,0,0.44)_20%,rgba(0,0,0,0.62)_25%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0.97)_40%,#000_45%)]"
		/>
		<span
			class="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,25,25,.15)_0px,rgba(25,25,25,.55)_200px,#191919_340px)] sm:bg-[linear-gradient(180deg,rgba(25,25,25,.15)_0px,rgba(25,25,25,.55)_260px,#191919_440px)] lg:bg-[linear-gradient(90deg,rgba(25,25,25,.94)_0%,rgba(25,25,25,.78)_45%,rgba(25,25,25,.35)_100%)]"
			aria-hidden="true"
		/>

		<div class="relative z-10 container pt-[280px] pb-24 sm:pt-[380px] lg:pt-44 lg:pb-32">
			<h1 class="max-w-3xl font-display text-[2.5rem] leading-[1.08] uppercase sm:text-6xl lg:text-7xl">{{ hero.heading }}</h1>
			<p class="mt-7 max-w-xl text-lg">{{ hero.text }}</p>
			<div class="mt-9 flex flex-wrap gap-4">
				<BaseButton :to="hero.primary.to">{{ hero.primary.text }}</BaseButton>
				<BaseButton :to="hero.secondary.to" variant="outline">{{ hero.secondary.text }}</BaseButton>
			</div>
			<ul class="mt-14 flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap text-[15px]">
				<li v-for="chip in hero.chips" :key="chip" class="flex items-center gap-2.5">
					<span class="size-2.5 rounded-full bg-primary" aria-hidden="true" />{{ chip }}
				</li>
			</ul>
		</div>
	</section>
</template>
