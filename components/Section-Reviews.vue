<template>
	<section id="reviews" class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28
		bg-gray-900 text-gray-100
		bg-[url('/assets/img/reviews/section_reviews_bg.png')]
		bg-no-repeat bg-center bg-cover
		overflow-hidden">
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
					img: '',
					name: 'Katarzyna S.',
					date: '20.03.2023',
					rating: '5',
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					rating: 4.5,
					text: '“Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					rating: 3,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					rating: 4,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					rating: 5,
					text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
				},
				{
					name: 'Katarzyna S.',
					date: '20.03.2024',
					rating: 6,
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
				768: {
					slidesPerView: 2,
				},
			},
			// array with CSS styles
			// injectStyles: [`
			// .swiper {
			//     overflow: visible;
			// }
			// `,],

			// array with CSS urls
			// injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
		};

		Object.assign(swiperEl, params);

		swiperEl.initialize();
	},
}

</script>