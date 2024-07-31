<template>
	<!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
useHead({
	htmlAttrs: {
		class: 'scroll-smooth',
	},
});
</script>