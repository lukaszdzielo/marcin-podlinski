<script setup>
</script>

<template>
    <section class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32 bg-gray-900 text-gray-100">
        <div class="container"> 
            <heading :heading="heading" />

            <swiper-container
                :slides-per-view="1"
                :breakpoints="{
                    720: {
                        slidesPerView: 2,
                    },
                }"
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>

        </div>
    </section> 
</template>

<script>
    export default {
        data() {
            return {
                heading: 'Co o mnie mówią',
            }
        }
    }

    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
    register();

    // swiper element
    // const swiperEl = document.querySelector('swiper-container');
    // swiperEl.initialize();

</script>