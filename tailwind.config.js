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
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '18px',
        md: '24px',
        lg: '16px',
        xl: '30px',
        xxl: '40px',
      },
    },
    opacity: {},
    fontSize: {
      base: ['1rem', '1.4'],
    },
    lineHeight: {
      'normal': '1.4',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    letterSpacing: {},
    boxShadow: {},
    extend: {

    },
  },
  plugins: [],
}

