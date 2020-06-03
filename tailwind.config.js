/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'khaki': '#1A2818',
    }),
    borderColor: theme => ({
      'yellow': '#DDA005',
    }),
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'libreBaskerville': ['Libre Baskerville', 'sans-serif'],
    },
    width: {
      '19/40': '47.5%',
      'full': '100%'
    },
    textColor: {
      'yellow': '#DDA005',
    }
  },
  variants: {
    margin: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
