<script>
export default {
	props: ['review'],
	computed: {
		getFirstNameLetter() {
			return review.name.substring(0, 1);
		}
	},
};
</script>

<template>
	<div class="card__review p-8 bg-gray-100 text-gray-900">
		<div class="flex">
			<div v-if="review.img || review.name" class="w-14 h-14 rounded-full overflow-hidden me-4">
				<img v-if="review.img" :src="review.img" :alt="review.name" class="size-full">
				<div v-else class="size-full">{{ getFirstNameLetter }}</div>
			</div>
			<div v-if="review.name || review.date">
				<div class="text-xl font-semibold">{{ review.name }}</div>
				<div class="text-base">{{ review.date }}</div>
			</div>
			<Star-Rating v-if="review.rating" :rating="review.rating" class="flex ms-auto" />
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