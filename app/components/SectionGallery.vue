<script setup lang="ts">
import { contact, gallery } from '~/data/content'

const photos = [
	{ name: 'tuna-hand', alt: 'Nigiri z tuńczykiem na dłoni' },
	{ name: 'flaming-dish', alt: 'Danie podane z płomieniem' },
	{ name: 'maki-reflection', alt: 'Rolki maki z odbiciem' },
	{ name: 'avocado-roll', alt: 'Rolka z awokado i kawiorem' },
	{ name: 'nigiri-reflection', alt: 'Nigiri z białą rybą' },
	{ name: 'rolls-board', alt: 'Zestaw rolek na desce' },
	{ name: 'sake-nigiri', alt: 'Nigiri i sake' },
]

const handleParts = gallery.instagramHandle.split(/(?<=_)/)
</script>

<template>
	<section aria-label="Galeria zdjęć" class="py-22 sm:py-28 lg:py-40">
		<div class="container grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 lg:auto-rows-[250px]">
			<AppPicture
				name="heart-roll"
				alt="Rolka sushi z sercem z tuńczyka trzymana pałeczkami"
				sizes="(min-width: 640px) 50vw, 100vw"
				class="col-span-2 row-span-2 h-full"
				img-class="size-full object-cover"
			/>
			<div class="col-span-2 flex flex-col justify-between gap-3 bg-ink p-5 text-paper sm:col-span-1 sm:p-6 lg:p-7">
				<h2 class="font-display text-xl leading-tight uppercase lg:text-2xl">{{ gallery.heading }}</h2>
				<a :href="contact.instagram" target="_blank" rel="noopener" class="inline-flex min-h-11 items-center font-normal text-[#ff8a80] hover:text-white">
					<!-- Nick łamie się tylko po podkreślnikach -->
					<span><template v-for="(part, i) in handleParts" :key="i">{{ part }}<wbr></template> →</span>
				</a>
			</div>
			<AppPicture
				v-for="(photo, i) in photos"
				:key="photo.name"
				:name="photo.name"
				:alt="photo.alt"
				sizes="(min-width: 640px) 25vw, 50vw"
				class="h-full"
				:class="{ 'max-sm:hidden': i === photos.length - 1 }"
				img-class="size-full object-cover"
			/>
		</div>
	</section>
</template>
