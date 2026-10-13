<script setup lang="ts">
import { workshops } from '~/data/content'
import dots from '~/assets/img/section-dots.svg'
</script>

<template>
	<section id="warsztaty" class="py-24 lg:py-40">
		<div class="container grid items-center gap-16 lg:grid-cols-2">
			<div class="relative pt-12">
				<img :src="dots" alt="" aria-hidden="true" class="absolute top-0 left-0 z-10 w-1/6">
				<AppPicture
					name="workshop-hands"
					alt="Uczestnicy warsztatów z Marcinem przy wspólnym stole"
					sizes="(min-width: 1024px) 40vw, 90vw"
					img-class="ms-[18%] aspect-[3/2] w-[82%] object-cover"
				/>
				<AppPicture
					name="rolling-sushi"
					alt="Zawijanie sushi na macie bambusowej"
					sizes="(min-width: 1024px) 30vw, 60vw"
					img-class="relative -mt-18 aspect-[3/2] w-[62%] object-cover outline-8 outline-white"
				/>
			</div>
			<div>
				<SectionHeading :text="workshops.heading" />
				<p class="mt-7 mb-7">{{ workshops.intro }}</p>
				<ol class="flex flex-col gap-5">
					<li v-for="(step, i) in workshops.steps" :key="step.title" class="flex gap-5">
						<span class="w-13 shrink-0 font-display text-[32px] leading-none text-primary-dark">{{ String(i + 1).padStart(2, '0') }}</span>
						<span>
							<span class="block text-lg font-normal">{{ step.title }}</span>
							{{ step.text }}
						</span>
					</li>
				</ol>
			</div>
		</div>
	</section>
</template>
