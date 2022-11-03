module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        myLight: {
          ...require('daisyui/src/colors/themes')['[data-theme=myLight]'],
          primary: '#ffffff',
          "base-100": "#4b5563",
          "base-200": "#e5e7eb",
          neutral: '#000000'
        },
        myDark: {
          ...require('daisyui/src/colors/themes')['[data-theme=myDark]'],
          primary: '#001253',
          "base-100": "#f3f4f6",
          "base-200": "#0b0b43",
          neutral: '#ffffff',
        },
      },
    ],

  },
  plugins: [require('daisyui')],
}