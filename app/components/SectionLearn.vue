<script setup lang="ts">
import { learn } from '~/data/content'
</script>

<template>
	<!-- Talerz lekko wychodzi nad szare tło -->
	<section class="mt-24 bg-paper lg:mt-16">
		<div class="container flex flex-col items-center gap-x-18 lg:flex-row">
			<div class="-mt-15 mb-10 flex justify-center lg:-mt-14 lg:mb-12 lg:w-[460px] lg:shrink-0">
				<AppPicture
					name="nigiri-plate"
					alt="Nigiri z łososiem na drewnianym talerzu"
					sizes="440px"
					img-class="w-[300px] drop-shadow-[0_20px_26px_rgba(0,0,0,.22)] sm:w-[380px] lg:w-[440px]"
				/>
			</div>
			<div class="w-full pb-22 lg:py-32">
				<SectionHeading :text="learn.heading" size="md" />
				<ul class="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
					<li v-for="item in learn.items" :key="item" class="flex gap-3">
						<span class="mt-2.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />{{ item }}
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
