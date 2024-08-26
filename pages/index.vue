<template>
	<main class="-mt-20 overflow-hidden">

		<section-hero />

		<section-aboutme />

		<section-cta />

		<section-workshops />

		<section-learn />

		<section-gallery />

		<section-catering />

		<section-reviews />

	</main>
</template>

<script setup lang="ts">

import { register } from 'swiper/element/bundle';
register();

useSeoMeta({
// 	title: 'Sushi Show - Marcin Podliński',
// 	// ogTitle: 'Sushi Show - Marcin Podliński',
// 	description: '...',
// 	ogDescription: '...',

// 	// ogImage: 'https://example.com/image.png',
// 	// twitterCard: 'summary_large_image',
})
</script>