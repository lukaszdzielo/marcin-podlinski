<script>
export default {
    data() {
        return {
            heading: 'Catering',
            contentHTML: `<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est.</p><p>Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.</p><p>Donec posuere feugiat metus eu tincidunt. Sed finibus et ex id suscipit. Duis ac turpis molestie, ultrices turpis non, eleifend justo. Nam dolor magna, tincidunt eu blandit id, aliquet in ex. Sed elit ante, aliquam vitae maximus tincidunt, accumsan ut tellus.</p>`,
        };
    }
};
</script>

<template>
    <section class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28">
        <div class="container grid lg:grid-cols-2 gap-8 md:gap-12">
            <div class="content-center">
                <heading :heading="heading" />
                <div v-html="contentHTML"></div>
                <a href="#contact" class="inline-flex 
                mt-8 py-3 px-6
                rounded-full
                bg-primary
                text-white
                font-display">Skontaktuj się!</a>
            </div>
            <div class="grid grid-cols-5 content-center">
                <div class="col-span-4
                mt-10 sm:mt-16 md:mt-20 lg:mt-16">
                    <img src="/assets/img/section_workshops_1.jpg">
                </div>
                <div class="-ms-6 ms:-ms-8 md:-ms-12 lg:-ms-8">
                    <img src="/assets/img/section_dots.svg">
                </div>
                <div class="col-span-4 col-start-2
                    -mt-8 sm:-mt-12
                    outline outline-8 outline-white">
                    <img src="/assets/img/section_workshops_2.jpg">
                </div>
            </div>
        </div>
    </section>
</template>