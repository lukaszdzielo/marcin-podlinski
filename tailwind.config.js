/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      primary: '#E53935',
      gray: {
        100: '#F5F5F5',
        800: '#424242',
        900: '#191919',
      }
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {

    },
  },
  plugins: [],
}

