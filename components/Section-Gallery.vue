<template>
    <section id="gallery" class="py-4">
        <swiper-container init="false">
            <swiper-slide><img src="~/assets/img/catering/1.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/catering/2.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/gallery/1.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/gallery/1.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/gallery/2.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/workshops/1.jpg"></swiper-slide>
            <swiper-slide><img src="~/assets/img/workshops/2.jpg"></swiper-slide>
        </swiper-container>
    </section>
</template>

<script>
export default {
    // data() {
    //     return {
    //         gallery: [
    //             { src: '@@/assets/img/aboutme/2.jpg', alt: '1 - alt' },
    //         ],
    //     };
    // },
    mounted() {
        const swiperEl = document.querySelector('#gallery swiper-container');
        const params = {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 16,
            centeredSlides: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3.4,
                },
                // 1200: {
                //     slidesPerView: 3.4,
                // },
                // 1400: {
                //     slidesPerView: 3.6,
                // },
            },
        };

        Object.assign(swiperEl, params);

        swiperEl.initialize();
    },
};
</script>