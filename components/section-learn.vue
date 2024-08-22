<script>
export default {
    data() {
        return {
            heading: `Nauczę Was między innymi:`,
            contentHTML: `<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est.</p><p>Proin gravida, leo ullamcorper egestas tempor, sapien nulla dignissim quam, non vestibulum sem mi fringilla dui. Proin interdum at tellus lacinia fringilla.</p><p>Donec posuere feugiat metus eu tincidunt. Sed finibus et ex id suscipit. Duis ac turpis molestie, ultrices turpis non, eleifend justo. Nam dolor magna, tincidunt eu blandit id, aliquet in ex. Sed elit ante, aliquam vitae maximus tincidunt, accumsan ut tellus.</p>`,
        };
    }
};
</script>

<template>
    <section class="lg:mt-24 xl:mt-16 xxl:mt-28
    mb-24 sm:mb-48 lg:mb-0
    py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28
        bg-gray-100">
        <div class="container grid lg:grid-cols-2 gap-12 xl:gap-20">
            <img src="~/assets/img/workshops/3.png" :alt="heading" class="order-1 lg:order-none
            lg:-mt-44 xxl:-mt-60
            -mb-36 sm:-mb-60 lg:mb-0
            mx-auto
            w-[75%] lg:w-full">
            <div>
                <heading :heading="2" :text="heading"
                    :class="'text-xl sm:text-2xl'" />
                <div v-html="contentHTML"></div>
            </div>
        </div>
    </section>
</template>