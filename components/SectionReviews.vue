<script>
    export default {
        data() {
            return {
                heading: 'Co o mnie mówią',
            }
        }
    }
</script>

<template>
    <section class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32 bg-gray-900 text-gray-100">
        <div class="container"> 
            <heading :heading="heading" />
        </div>
    </section> 
</template>