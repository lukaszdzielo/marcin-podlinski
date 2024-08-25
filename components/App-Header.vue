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
   <header class="sticky
   top-0 inset-x-0
   z-20 py-4
   bg-gray-900 text-gray-100">
      <nav class="container flex justify-between items-center">
         <a :href="logo.url" class="logo h-[48px]">
            <img src="https://placeholderjs.com/120x60" alt="Logo" class="size-full">
         </a>
         <ul class="flex gap-8 items-center">
            <li v-for="item of nav">
               <a :href="item.url" :class="item.class">{{ item.text }}</a>
            </li>
         </ul>
      </nav>
   </header>
</template>