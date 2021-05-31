const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lato', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      orange: {
        light: '#fa671a',
        DEFAULT: '#ef670f',
      },
    },
  },
  variants: {
    animation: ['motion-safe'],
  },
  plugins: [],
};
