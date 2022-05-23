module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkmode-light': '#2B3743',
        'darkmode-dark': '#202D36'
      },
      height:{
        'vw-5':'5vw',
        'vw-10':'10vw',
        'vw-15':'15vw',
        'vw-20':'20vw',
        'vw-50':'50vw',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',

}