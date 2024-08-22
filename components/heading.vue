<script>
export default {
	props: ['heading', 'text', 'class'],
};
</script>

<template>
	<component :is="'h' + heading" :class="class">{{ text }}</component>
	<!-- <h{{ h }}>{{ h }}</{{ h }}> -->
	<!-- <h2 class="font-display text-xl sm:text-2xl lg:text-3xl uppercase">{{ heading }}</h2> -->
	<heading-hr />
</template>