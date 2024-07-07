<script>
    const currentYear = new Date().getFullYear();

    export default {
        data() {
            return {
                // Footer top
                FT_KRS: 'KRS: 0123456789',
                FT_NIP: 'NIP: 012 345 67 89',


                FT_Heading: 'Skontaktuj się ze mną',
                FT_Text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius semper erat, quis porta felis lobortis vitae. Vivamus vitae viverra orci, cursus vehicula est.',

                FT_Tel: '+48 517 475 292',
                FT_Email: 'podlinski.marcin@gmail.com',

                // Footer bottom
                FB_Content: `${currentYear} - Wszelkie prawa zastrzeżone`,
                
                // settings
                FT_Padding: 'pt-6 sm:pt-10 md:pt-16 xl:pt-20 pb-10 sm:pb-16 md:pb-20 xl:pb-24',

                FB_Padding: 'pt-6 sm:pt-8 md:pt-14 pb-8 sm:pb-12 md:pb-20',
            }
        }
    }
</script> 

<template>
  <footer>
    <div class="bg-gray-100 text-sm md:text-base" :class="[FT_Padding]">
      <div class="container grid md:grid-cols-4 gap-y-4 gap-x-10">
        <div class="text-center">
          <p v-if="FT_KRS">{{ FT_KRS }}</p>
          <p v-if="FT_NIP">{{ FT_NIP }}</p>
        </div>
        <div class="md:col-span-3 lg:col-span-2 text-center md:text-start">
          <div v-if="FT_Heading" class="heading text-lg sm:text-xl md:text-2xl uppercase">{{ FT_Heading }}</div>
          <div class="mt-2 sm:mt-3 md:mt-4 mb-3 sm:mb-4 md:mb-5 w-24 sm:w-32 md:w-40 min-h-1 bg-primary mx-auto md:mx-0"></div>
          <div v-if="FT_Text">{{ FT_Text }}</div>
          <div v-if="FT_Tel || FT_Email" class="flex flex-col gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 md:pt-9">
            <div v-if="FT_Tel">
              <a :href="'tel:' + FT_Tel" class="inline-flex justify-center md:justify-start items-center gap-2 sm:gap-3 md:gap-4 hover:text-primary transition-colors">
                <svg class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 fill-primary" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.925 31.5C26.8 31.5 23.7125 30.8188 20.6625 29.4563C17.6125 28.0938 14.8375 26.1625 12.3375 23.6625C9.8375 21.1625 7.90625 18.3875 6.54375 15.3375C5.18125 12.2875 4.5 9.2 4.5 6.075C4.5 5.625 4.65 5.25 4.95 4.95C5.25 4.65 5.625 4.5 6.075 4.5H12.15C12.5 4.5 12.8125 4.61875 13.0875 4.85625C13.3625 5.09375 13.525 5.375 13.575 5.7L14.55 10.95C14.6 11.35 14.5875 11.6875 14.5125 11.9625C14.4375 12.2375 14.3 12.475 14.1 12.675L10.4625 16.35C10.9625 17.275 11.5563 18.1688 12.2438 19.0313C12.9313 19.8938 13.6875 20.725 14.5125 21.525C15.2875 22.3 16.1 23.0188 16.95 23.6813C17.8 24.3438 18.7 24.95 19.65 25.5L23.175 21.975C23.4 21.75 23.6938 21.5813 24.0563 21.4688C24.4188 21.3563 24.775 21.325 25.125 21.375L30.3 22.425C30.65 22.525 30.9375 22.7063 31.1625 22.9688C31.3875 23.2313 31.5 23.525 31.5 23.85V29.925C31.5 30.375 31.35 30.75 31.05 31.05C30.75 31.35 30.375 31.5 29.925 31.5Z"/></svg>
                {{ FT_Tel }}
              </a>
            </div>
            <div v-if="FT_Email">
              <a :href="'mailto:' + FT_Email" class="inline-flex justify-center md:justify-start items-center gap-2 sm:gap-3 md:gap-4 hover:text-primary transition-colors">
                <svg class="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 fill-primary" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 33C15.925 33 13.975 32.6063 12.15 31.8188C10.325 31.0313 8.7375 29.9625 7.3875 28.6125C6.0375 27.2625 4.96875 25.675 4.18125 23.85C3.39375 22.025 3 20.075 3 18C3 15.925 3.39375 13.975 4.18125 12.15C4.96875 10.325 6.0375 8.7375 7.3875 7.3875C8.7375 6.0375 10.325 4.96875 12.15 4.18125C13.975 3.39375 15.925 3 18 3C20.075 3 22.025 3.39375 23.85 4.18125C25.675 4.96875 27.2625 6.0375 28.6125 7.3875C29.9625 8.7375 31.0313 10.325 31.8188 12.15C32.6063 13.975 33 15.925 33 18V20.175C33 21.65 32.4938 22.9062 31.4813 23.9438C30.4688 24.9813 29.225 25.5 27.75 25.5C26.875 25.5 26.05 25.3125 25.275 24.9375C24.5 24.5625 23.85 24.025 23.325 23.325C22.6 24.05 21.7812 24.5938 20.8688 24.9563C19.9563 25.3188 19 25.5 18 25.5C15.925 25.5 14.1562 24.7688 12.6938 23.3063C11.2313 21.8438 10.5 20.075 10.5 18C10.5 15.925 11.2313 14.1562 12.6938 12.6938C14.1562 11.2313 15.925 10.5 18 10.5C20.075 10.5 21.8438 11.2313 23.3063 12.6938C24.7688 14.1562 25.5 15.925 25.5 18V20.175C25.5 20.825 25.7125 21.375 26.1375 21.825C26.5625 22.275 27.1 22.5 27.75 22.5C28.4 22.5 28.9375 22.275 29.3625 21.825C29.7875 21.375 30 20.825 30 20.175V18C30 14.65 28.8375 11.8125 26.5125 9.4875C24.1875 7.1625 21.35 6 18 6C14.65 6 11.8125 7.1625 9.4875 9.4875C7.1625 11.8125 6 14.65 6 18C6 21.35 7.1625 24.1875 9.4875 26.5125C11.8125 28.8375 14.65 30 18 30H24C24.425 30 24.7812 30.1438 25.0688 30.4313C25.3563 30.7188 25.5 31.075 25.5 31.5C25.5 31.925 25.3563 32.2813 25.0688 32.5688C24.7812 32.8563 24.425 33 24 33H18ZM18 22.5C19.25 22.5 20.3125 22.0625 21.1875 21.1875C22.0625 20.3125 22.5 19.25 22.5 18C22.5 16.75 22.0625 15.6875 21.1875 14.8125C20.3125 13.9375 19.25 13.5 18 13.5C16.75 13.5 15.6875 13.9375 14.8125 14.8125C13.9375 15.6875 13.5 16.75 13.5 18C13.5 19.25 13.9375 20.3125 14.8125 21.1875C15.6875 22.0625 16.75 22.5 18 22.5Z"/></svg>
                {{ FT_Email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 text-gray-100 text-xs sm:text-sm md:text-base text-center" :class="[FB_Padding]">
      <div class="container">
        <div v-if="FB_Content">{{ FB_Content }}</div>
      </div>
    </div>
  </footer>
</template>
