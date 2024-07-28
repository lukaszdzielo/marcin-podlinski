<script>
export default {
	props: ['review'],
};
</script>

<template>
	<div class="card__review p-8 bg-gray-100 text-gray-900">
		<div>
			<div>img {{ review.img }}</div>
			<div>
				<div>name {{ review.name }}</div>
				<div>{{ review.date }}</div>
			</div>
			<div>{{ review.stars }}</div>
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