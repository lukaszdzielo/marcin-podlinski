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
    <section class="mb-12 md:mb-20 lg:mb-0
    py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28
    bg-gray-900 text-gray-100">
        <div class="container grid grid-cols-6 gap-6 md:gap-12 xl:gap-20">
            <div class="col-span-6 lg:col-span-4">
                <heading :heading="heading" />
                <p>{{ content }}</p>
            </div>
            <div class="relative
                col-start-2
				col-span-3 lg:col-span-2
				h-full
                -mb-28 sm:-mb-32 md:-mb-40 lg:mb-0
                pointer-events-none select-none">
                <img src="~/assets/img/section_cta_img.png" alt="Deska z sushi" class="lg:absolute
						start-0
						-top-1/2 lg:-top-3/4 xl:-top-full xxl:-top-[150%]
						h-[200px] sm:h-[240px] md:h-[320px] xxl:h-[380px] 
						max-h-none
						max-w-none">
            </div>
        </div>
    </section>
</template>