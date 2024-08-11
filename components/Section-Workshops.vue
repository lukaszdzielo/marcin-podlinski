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
    <section class="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 xxl:py-28">
        <div class="container grid md:grid-cols-2 gap-12">
            <div>
                <heading :heading="heading" />
                <div v-html="contentHTML"></div>
            </div>
            <div>
                IMG
            </div>
        </div>
    </section>
</template>