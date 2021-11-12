module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  babel: {
    plugins: ['@ui-devtools/tailwind/babel']
  }
};
