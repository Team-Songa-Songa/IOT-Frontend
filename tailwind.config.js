module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //set font fa,mily of montserrat
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};