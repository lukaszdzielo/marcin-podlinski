<script>
export default {
	props: ['review'],
};
</script>

<template>
	<div class="card__review p-8 bg-gray-100 text-gray-900">
		<div>
			<div v-if="review.img">
				<img :src="review.img" :alt="review.name">
			</div>
			<div v-else>{{ review.name.substring(0, 1) }}</div>
			<div v-if="review.name || review.date">
				<div>{{ review.name }}</div>
				<div>{{ review.date }}</div>
			</div>
			<Star-Rating v-if="review.rating" :rating="review.rating" />
		</div>
		<div class="dsc text-xl leading-7">{{ review.text }}</div>
	</div>
</template>

<style lang="scss">
.card__review {
	.dsc {
		font-size: 1rem;
		font-style: italic;
		text-align: center;

		@media (width >=1200px) {
			font-size: 1.25rem;
		}
	}
}
</style>