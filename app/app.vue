<script setup lang="ts">
import { preview, site } from '~/data/content'

useSeoMeta({
	title: site.title,
	description: site.description,
	ogTitle: site.title,
	ogDescription: site.description,
	ogType: 'website',
	ogLocale: 'pl_PL',
	// Makieta z przykładową treścią nie powinna trafić do wyszukiwarek
	robots: preview ? 'noindex, nofollow' : undefined,
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
