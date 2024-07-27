<script>
    export default {
        props: ['review'],
    }
</script>

<template>
    <div class="card__review p-8 bg-gray-100 text-gray-900">
        <div>{{ review.img }}</div>
        <div>{{ review.name }}</div>
        <div>{{ review.date }}</div>
        <div>{{ review.stars }}</div>
        <div>{{ review.text }}</div>
    </div>
</template>