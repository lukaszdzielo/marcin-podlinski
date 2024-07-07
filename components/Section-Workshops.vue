<script>
    export default {
        data() {
            return {
                heading: 'Warsztaty',
            }
        }
    }
</script>

<template>
    <section class="pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32">
        <div class="container">

            <heading :heading="heading" />
            
        </div>
    </section>

    <section class="bg-gray-100 pt-6 sm:pt-8 md:pt-12 xl:pt-28 pb-6 sm:pb-10 md:pb-14 xl:pb-32">
        <div class="container">
            <p>Nauczę Was między innymi:</p>
        </div>
    </section>
</template>