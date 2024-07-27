<template>
    <section id="reviews" class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32 bg-gray-900 text-gray-100">
        <div class="container"> 
            <heading :heading="heading" />

            <swiper-container
                :slides-per-view="1"
                :spaceBetween="20"
                :breakpoints="{
                    720: {
                        slidesPerView: 2,
                    },
                }"
            >
                <swiper-slide v-for="review of reviews">
                    <Card-review :review="review"/>
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
                        name: 'Katarzyna S.',
                        date: '20.03.2024',
                        stars: '5',
                        text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
                    },
                    {
                        name: 'Katarzyna S.',
                        date: '20.03.2024',
                        stars: '5',
                        text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
                    },
                    {
                        name: 'Katarzyna S.',
                        date: '20.03.2024',
                        stars: '5',
                        text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
                    },
                    {
                        name: 'Katarzyna S.',
                        date: '20.03.2024',
                        stars: '5',
                        text: '“Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.”'
                    },
                ]
            }
        }
    }

</script>

<style>
    #reviews {
        background-image: url(/assets/img/reviews__bg.png);
        background-position: center;
        background-size: cover;
    }
</style>