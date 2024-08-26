<template>
	<!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
useHead({
	title: 'Sushi Show - Marcin Podliński',
	htmlAttrs: {
		class: 'scroll-smooth scroll-pt-20',
	},
});
</script>