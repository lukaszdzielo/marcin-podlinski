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
        <div class="container grid grid-cols-6 gap-12">
            <div class="col-span-6 md:col-span-4">
                <heading :heading="heading" />
                <p>{{ content }}</p>
            </div>
            <div class="relative
				col-span-1
				h-full
				hidden sm:block
				pointer-events-none">
                <img src="/assets/img/section_cta_img.png" alt="Footer sushi" class="absolute
						bottom-0
						-top-full
						h-[240px] md:h-[260px] lg:h-[435px]
						max-h-none
						max-w-none">
            </div>
        </div>
    </section>
</template>