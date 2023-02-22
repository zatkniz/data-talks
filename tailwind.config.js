/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
            'gray-main': '#E6E6E6',
            'blue': '#3F4254',
            'gray-light': '#EDEBEB'
        },
        fontFamily: {
            'sans': ['Poppins', 'sans-serif']
        },
        fontSize: {
            'base': '13px',
        },
      },
    },
    plugins: [],
  }