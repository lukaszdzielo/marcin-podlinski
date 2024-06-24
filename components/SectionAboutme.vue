<script>
    export default {
        data() {
            return {
                heading: 'O mnie',

                padding: 'pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32', 
            }
        }
    }
</script>

<template>
    <section :class="[padding]">
        <div class="container">
            <heading :heading="heading" />
        </div>
    </section>
</template>