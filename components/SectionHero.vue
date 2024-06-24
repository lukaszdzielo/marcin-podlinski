<script>
    export default {
        data() {
            return {
                heading: 'Hero',
                headingStyle: 'text-xl sm:text-3xl md:text-4xl xl:text-5xl',

                padding: '',
                bgColor: '',
            }
        }
    }
</script>

<template>
    <div class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32 bg-gray-900 text-gray-100">
        <div class="container">
            <span>{{ heading }}</span>
            <img src="assets/img/hero.png" alt="" width="150">
        </div>
    </div>
</template>