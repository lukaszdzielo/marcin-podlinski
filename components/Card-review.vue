<script>
export default {
	props: ['review'],
	methods: {
		getStarRating() {
			return this.review.stars > 5 ? 5 : this.review.stars;
		}
	}
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
			<div v-if="+review.stars" class="flex">
				<span v-for="n of getStarRating()">
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.9998 21.5938L9.81227 24.7188C9.58311 24.8646 9.34352 24.9271 9.09352 24.9062C8.84352 24.8854 8.62477 24.8021 8.43727 24.6562C8.24977 24.5104 8.10394 24.3281 7.99977 24.1094C7.89561 23.8906 7.87477 23.6458 7.93727 23.375L9.31227 17.4688L4.71852 13.5C4.51019 13.3125 4.37998 13.099 4.3279 12.8594C4.27582 12.6198 4.29144 12.3854 4.37477 12.1562C4.45811 11.9271 4.58311 11.7396 4.74977 11.5938C4.91644 11.4479 5.14561 11.3542 5.43727 11.3125L11.4998 10.7812L13.8435 5.21875C13.9477 4.96875 14.1091 4.78125 14.3279 4.65625C14.5466 4.53125 14.7706 4.46875 14.9998 4.46875C15.2289 4.46875 15.4529 4.53125 15.6716 4.65625C15.8904 4.78125 16.0519 4.96875 16.156 5.21875L18.4998 10.7812L24.5623 11.3125C24.8539 11.3542 25.0831 11.4479 25.2498 11.5938C25.4164 11.7396 25.5414 11.9271 25.6248 12.1562C25.7081 12.3854 25.7237 12.6198 25.6716 12.8594C25.6196 13.099 25.4894 13.3125 25.281 13.5L20.6873 17.4688L22.0623 23.375C22.1248 23.6458 22.1039 23.8906 21.9998 24.1094C21.8956 24.3281 21.7498 24.5104 21.5623 24.6562C21.3748 24.8021 21.156 24.8854 20.906 24.9062C20.656 24.9271 20.4164 24.8646 20.1873 24.7188L14.9998 21.5938Z"
							fill="#FFD250" />
					</svg>
				</span>
			</div>
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