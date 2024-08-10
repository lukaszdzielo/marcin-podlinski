<script>
export default {
    props: ['heading'],
};
</script>

<template>
    <h2 class="text-xl sm:text-3xl md:text-4xl xl:text-5xl uppercase">{{ heading }}</h2>
    <heading-hr />
</template>