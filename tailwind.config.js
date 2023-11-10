/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html',
  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.ts',
  './src/**/*.tsx',
  './safelist.txt',],
  theme: {
    extend: {
      ringColor: {
        custom: '#19191A',
      },
    },
  },
  plugins: [],
}

