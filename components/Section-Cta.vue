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
        <div class="container">
            <heading :heading="heading" />
            <p>{{ content }}</p>
        </div>
    </section>
</template>