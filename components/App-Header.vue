<script>
export default {
   data() {
      return {
         viewport: '',
         openCloseBreakpoint: 992,
         showNav: false,
         logo: {
            path: 'https://placeholderjs.com/120x60',
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
   mounted() {

      this.viewport = (window.innerWidth >= this.openCloseBreakpoint) ? 'desktop' : 'mobile';
      this.showNav = (this.viewport === 'desktop') ? true : false;

      const observer = new ResizeObserver(entries => {
         for (const entry of entries) {
            if ((entry.contentRect.width >= this.openCloseBreakpoint) && (this.viewport === 'mobile')) {
               this.viewport = 'desktop';
               this.showNav = true;

            } else if ((entry.contentRect.width < this.openCloseBreakpoint) && (this.viewport === 'desktop')) {
               this.viewport = 'mobile';
               this.showNav = false;
            }
         }
      });

      observer.observe(document.body);
   },
}

</script>

<template>
   <header class="sticky
   top-0 inset-x-0
   z-20 py-4
   bg-gray-900 text-gray-100">
      <nav class="relative container flex flex-wrap justify-between items-center">
         <a :href="logo.url" class="logo h-[48px]" @click="showNav = 0">
            <img :src="logo.path" alt="Logo" class="size-full">
         </a>
         <button @click="showNav = !showNav" class="lg:hidden">
            <svg v-show="!showNav" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960"
               width="36px" fill="#ffffff">
               <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
            <svg v-show="showNav" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
               fill="#ffffff">
               <path
                  d="M480-429 316-265q-11 11-25 10.5T266-266q-11-11-11-25.5t11-25.5l163-163-164-164q-11-11-10.5-25.5T266-695q11-11 25.5-11t25.5 11l163 164 164-164q11-11 25.5-11t25.5 11q11 11 11 25.5T695-644L531-480l164 164q11 11 11 25t-11 25q-11 11-25.5 11T644-266L480-429Z" />
            </svg>
         </button>
         <ul v-show="showNav" class="absolute lg:static
         top-full inset-x-0
         flex flex-col lg:flex-row
         gap-y-4 gap-x-8
         items-center
         mt-4 lg:mt-0
         py-6 lg:py-0
         w-full lg:w-auto
         bg-gray-900">
            <li v-for="item of nav">
               <a :href="item.url" :class="item.class" @click="showNav = 0">{{ item.text }}</a>
            </li>
         </ul>
      </nav>
   </header>
</template>