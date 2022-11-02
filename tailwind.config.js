module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        Light: {
          ...require('daisyui/src/colors/themes')['[data-theme=Light]'],
          primary: '#ffffff',
          secondary: '#0a2440',
        },
        Dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=Dark]'],
          primary: '#001253',
          secondary: '#E14D2A',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}