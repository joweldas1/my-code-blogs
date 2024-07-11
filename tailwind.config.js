/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2F3645',
        'second': '#0C1844',
        'textmain': '#C80036',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kalpurush: ['Kalpurush', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
