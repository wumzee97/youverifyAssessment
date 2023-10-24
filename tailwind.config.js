/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      
      backgroundColor: {
        primary: '#46B2C8',
        accent: '#C2E2E9',
        danger: '#D72830',
        gray: '#F1F1F1',
      },
      textColor: {
        default: '#115766',
        primary: '#023A59',
        gray: '#C4C4C4',
        gray400: '#999999'
      },
      borderColor: {
        dark: '#115766'

      }
    },
  },
  plugins: [],
}

