<template>
    <section id="gallery" class="py-4 bg-gray-900">
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
            },
        };

        Object.assign(swiperEl, params);

        swiperEl.initialize();
    },
};
</script>