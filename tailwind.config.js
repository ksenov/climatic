const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(autocomplete|button|input|ripple|spinner|form|listbox|divider|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-cobalt': '#2e54d3',
        'custom-indigo': '#202a8c',
        'custom-dark': '#212121',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [heroui()],
}

