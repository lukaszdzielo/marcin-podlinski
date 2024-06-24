<script>
    export default {
        props: ['heading'],
    }
</script>

<template>
    <h2 class="text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase">{{ heading }}</h2>
    <div class="mt-2 sm:mt-3 md:mt-4 mb-3 sm:mb-4 md:mb-5 w-24 sm:w-32 md:w-40 min-h-1 bg-primary"></div>
</template>