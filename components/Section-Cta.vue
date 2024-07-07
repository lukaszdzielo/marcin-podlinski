<script>
    export default {
        data() {
            return {
                heading: 'Lorem ipsum',
                headingStyle: 'text-xl sm:text-3xl md:text-4xl xl:text-5xl',
            }
        }
    }
</script>

<template>
    <section class="bg-gray-900 text-gray-100 pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32">
        <div class="container">
            <p>{{ heading }}</p>
        </div>
    </section>
</template>