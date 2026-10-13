<script setup lang="ts">
import { reviews, site } from '~/data/content'

useSeoMeta({
	title: site.title,
	description: site.description,
	ogTitle: site.title,
	ogDescription: site.description,
	ogType: 'website',
	ogLocale: 'pl_PL',
	// Podgląd z przykładowymi opiniami nie powinien trafić do wyszukiwarek
	robots: reviews.sample && reviews.items.length ? 'noindex, nofollow' : undefined,
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
