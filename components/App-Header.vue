<script>
export default {
   data() {
      return {
         logo: {
            path: '',
            url: '#',
         },
         nav: [
            {
               text: 'O mnie',
               url: '#aboutme',
            },
            {
               text: 'Warsztaty',
               url: '#workshops',
               class: 'block px-3 py-1 rounded-full bg-primary text-white',
            },
            {
               text: 'Catering',
               url: '#catering',
            },
            {
               text: 'Kontakt',
               url: '#contact',
            },
         ]
      };
   },
}

</script>

<template>
   <header class="sticky top-0 left-0 right-0 z-10 py-4">
      <!-- bg-gray-100 -->
      <!-- <nav class="container flex justify-between">
         <div class="logo">
            <a :href="logo.url">logo</a>
         </div>
         <ul class="flex gap-8 items-center">
            <li v-for="item of nav">
               <a :href="item.url" :class="item.class">{{ item.text }}</a>
            </li>
         </ul>
      </nav> -->
      <div class="container">
         <nav class="flex justify-between">
            <div class="logo">
               <a :href="logo.url">logo</a>
            </div>
            <ul>
               <li v-for="item of nav">
                  <a :href="item.url" :class="item.class">{{ item.text }}</a>
               </li>
            </ul>
         </nav>
      </div>
   </header>
</template>