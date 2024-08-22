<script>
export default {
    data() {
        return {
            heading: 'O mnie',
            contentHTML: `<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est. Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.</p><p>Donec posuere feugiat metus eu tincidunt. Sed finibus et ex id suscipit. Duis ac turpis molestie, ultrices turpis non, eleifend justo. Nam dolor magna, tincidunt eu blandit id, aliquet in ex. Sed elit ante, aliquam vitae maximus tincidunt, accumsan ut tellus. Donec ac rhoncus justo, sit amet suscipit risus. Nullam ut massa egestas, fringilla elit sed, imperdiet nisi. Aenean non tincidunt tortor, nec mattis augue. Duis suscipit bibendum neque vel tincidunt.</p><p>Cras id felis quis lorem pulvinar ullamcorper nec maximus dui. Vestibulum lobortis libero augue, lacinia tincidunt nisl facilisis sit amet. Pellentesque blandit augue eget sapien imperdiet, in venenatis dui feugiat.</p><p>Sed malesuada efficitur sodales. Sed laoreet vulputate pharetra. Sed vel nulla vitae sem sagittis bibendum ac at est. Proin gravida felis neque, ac rhoncus felis porttitor in.</p>`,
        };
    }
};
</script>

<template>
    <section id="aboutme" class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28 xxl:pb-40">
        <div class="container grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20">
            <div class="content-center lg:order-1">
                <heading :heading="2" :text="heading"
                    :class="'font-display text-xl sm:text-2xl lg:text-3xl uppercase'" />
                <div v-html="contentHTML"></div>
            </div>
            <div class="grid grid-cols-5 content-center pointer-events-none select-none">
                <div class="-me-6 ms:-me-8 md:-me-12 lg:-me-8 pointer-events-none z-10	">
                    <img src="~/assets/img/section_dots.svg" alt="Dekoracja">
                </div>
                <div class="col-span-4
                mt-10 sm:mt-16 md:mt-20 lg:mt-16">
                    <img src="~/assets/img/aboutme/1.jpg" alt="Szef z nożem">
                </div>
                <div class="col-span-4 
                    -mt-8 sm:-mt-12
                    outline outline-8 outline-white">
                    <img src="~/assets/img/aboutme/2.jpg" alt="Nigiri">
                </div>
            </div>
        </div>
    </section>
</template>