<template>
	<section id="reviews"
		class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32 bg-gray-900 text-gray-100">
		<div class="container">
			<heading :heading="heading" />

			<swiper-container init="false">
				<swiper-slide v-for="review of reviews">
					<Card-review :review="review" />
				</swiper-slide>
			</swiper-container>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			heading: 'Co o mnie mówią',
			reviews: [
				{
					img: 'abcd',
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 1,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 2,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 3,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 4,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 5,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					stars: 6,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
			]
		};
	},
	mounted() {
		const swiperEl = document.querySelector('swiper-container');
		const params = {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 48,
			breakpoints: {
				720: {
					slidesPerView: 2,
				},
			},
			// array with CSS styles
			injectStyles: [`
                    // .swiper {
                    //     overflow: visible;
                    // }
                    `,],

			// array with CSS urls
			// injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
		};

		Object.assign(swiperEl, params);

		swiperEl.initialize();

	},
}

</script>

<style lang="scss">
#reviews {
	background-image: url(/assets/img/reviews__bg.png);
	background-position: center;
	background-size: cover;
	overflow: hidden;

	.swiper {
		overflow: visible !important;
	}
}
</style>