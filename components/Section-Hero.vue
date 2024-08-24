<script>
export default {
    data() {
        return {
            heading: 'Aenean non magna commodo',
            content: 'Duis elementum fermentum velit ut auctor. Nullam tincidunt felis a malesuada placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin maximus sapien nisl, at posuere felis finibus at.',
        };
    }
};
</script>

<template>
    <section id="hero" class="
    mb-16
    pt-6 sm:pt-8 md:pt-12 xl:pt-28
    pb-6 sm:pb-10 md:pb-14 xl:pb-32 
    bg-gray-900 text-gray-100">
        <div class="container grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20">
            <div class="place-self-center">
                <heading :heading="1" :text="heading"
                    :class="'font-display text-2xl sm:text-3xl lg:text-4xl uppercase'" />
                <p class="text-lg">{{ content }}</p>
                <a href="#workshops" class="inline-flex 
                    mt-8 py-3 px-6
                    rounded-full
                    bg-primary
                    text-white
                    font-display">Warsztaty Sushi</a>
            </div>
            <img src="~/assets/img/hero.png" alt="" class="max-w-[450px] lg:max-w-full w-[80%] lg:w-auto
            mx-auto 
            -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-60 xl:-mb-72 xxl:-mb-60
            lg:-ms-8">
        </div>
    </section>
</template>