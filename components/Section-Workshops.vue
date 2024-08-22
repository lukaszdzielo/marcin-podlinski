<script>
export default {
    data() {
        return {
            heading: 'Warsztaty',
            contentHTML: `<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est.</p><p>Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.</p><p>Donec posuere feugiat metus eu tincidunt. Sed finibus et ex id suscipit. Duis ac turpis molestie, ultrices turpis non, eleifend justo. Nam dolor magna, tincidunt eu blandit id, aliquet in ex. Sed elit ante, aliquam vitae maximus tincidunt, accumsan ut tellus.</p><p>Donec ac rhoncus justo, sit amet suscipit risus. Nullam ut massa egestas, fringilla elit sed, imperdiet nisi. Aenean non tincidunt tortor, nec mattis augue. Duis suscipit bibendum neque vel tincidunt. Pellentesque vitae nulla at tellus rhoncus viverra. Duis lobortis mauris non porta faucibus. Fusce posuere lobortis ullamcorper.</p>`,
        };
    }
};
</script>

<template>
    <section id="workshops" class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28">
        <div class="container grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20">
            <div class="content-center">
                <heading :heading="2" :text="heading"
                    :class="'font-display text-xl sm:text-2xl lg:text-3xl uppercase'" />
                <div v-html="contentHTML"></div>
                <a href="#contact" class="inline-flex 
                mt-8 py-3 px-6
                rounded-full
                bg-primary
                text-white
                font-display">Skontaktuj się!</a>
            </div>
            <div class="grid grid-cols-5 content-center pointer-events-none select-none">
                <div class="col-span-4
                mt-10 sm:mt-16 md:mt-20 lg:mt-16">
                    <img src="~/assets/img/workshops/1.jpg" alt="Grupowe zajęcia">
                </div>
                <div class="-ms-6 ms:-ms-8 md:-ms-12 lg:-ms-8">
                    <img src="~/assets/img/section_dots.svg" alt="Dekoracja">
                </div>
                <div class="col-span-4 col-start-2
                    -mt-8 sm:-mt-12
                    outline outline-8 outline-white">
                    <img src="~/assets/img/workshops/2.jpg" alt="Zawijanie sushi">
                </div>
            </div>
        </div>
    </section>
</template>