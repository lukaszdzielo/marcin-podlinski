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
    <section class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28
        bg-gray-100">
        <div class="container grid md:grid-cols-2 gap-12">
            IMG
            <div>
                <h2 class="text-xl lg:text-2xl">{{ heading }}</h2>
                <heading-hr />
                <div v-html="contentHTML"></div>
            </div>
        </div>
    </section>
</template>