<script>
export default {
    data() {
        return {
            heading: 'Lorem ipsum',
            content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est.',
        };
    }
};
</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28
    bg-gray-900 text-gray-100">
        <div class="container grid grid-cols-6 gap-6 md:gap-12 xl:gap-20">
            <div class="col-span-6 md:col-span-3 lg:col-span-4">
                <heading :heading="heading" />
                <p>{{ content }}</p>
            </div>
            <div class="relative
                col-start-3 md:col-auto
                -order-1 md:order-none
				col-span-3 lg:col-span-2
				h-full
                -mt-16 -mt-24 md:m-0
				pointer-events-none">
                <img src="/assets/img/section_cta_img.png" alt="Footer sushi" class="md:absolute
						start-0
						-top-1/2 lg:-top-3/4 xl:-top-full xxl:-top-[125%]
						h-[160px] sm:h-[240px] md:h-[320px] xxl:h-[380px] 
						max-h-none
						max-w-none">
            </div>
        </div>
    </section>
</template>