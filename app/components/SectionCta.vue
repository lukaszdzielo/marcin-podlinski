<script setup lang="ts">
import { cta } from '~/data/content'
</script>

<template>
	<!-- Deska z sushi wylatuje nad pas (desktop) i nachodzi na niego od góry (telefon) -->
	<section class="relative mt-36 border-t-4 border-primary bg-ink text-paper lg:mt-44">
		<div class="container flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:gap-12">
			<div class="pb-20 lg:w-3/5 lg:py-28">
				<h2 class="font-display text-3xl leading-tight uppercase sm:text-4xl lg:text-[2.625rem]">
					{{ cta.heading[0] }}<span class="text-[#ff6f60]">{{ cta.heading[1] }}</span>{{ cta.heading[2] }}
				</h2>
				<p class="mt-5 max-w-xl text-lg text-[#e0e0e0]">{{ cta.text }}</p>
				<ul class="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
					<li v-for="point in cta.points" :key="point" class="inline-flex items-center gap-2">
						<svg class="size-4.5 text-[#ff6f60]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
						{{ point }}
					</li>
				</ul>
				<BaseButton :to="cta.button.to" class="mt-8">{{ cta.button.text }}</BaseButton>
			</div>
			<div class="relative lg:min-h-[440px] lg:w-2/5">
				<AppPicture
					name="cta-board"
					alt="Deska z sushi"
					sizes="(min-width: 1024px) 1150px, 170vw"
					img-class="relative -mt-28 ms-14 w-[170%] max-w-none drop-shadow-[0_24px_30px_rgba(0,0,0,.35)] sm:ms-24 sm:w-[900px] lg:absolute lg:-top-[150px] lg:-left-6 lg:m-0 lg:w-[1150px]"
				/>
			</div>
		</div>
	</section>
</template>
