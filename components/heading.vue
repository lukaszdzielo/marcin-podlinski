<script>
export default {
	props: ['heading'],
};
</script>

<template>
	<h2 class="font-display text-xl sm:text-2xl lg:text-3xl uppercase">{{ heading }}</h2>
	<heading-hr />
</template>