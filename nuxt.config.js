
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Doc: https://github.com/jerrybendy/vue-touch-events
    { src: "~/plugins/vue2-touch-events.js" },
    // Doc: https://github.com/apexcharts/vue-apexcharts
    { src : '~/plugins/vue-apexchart.js', ssr : false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/fukuiretu/nuxt-user-agent
    'nuxt-user-agent',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  vuetify: {
    theme: {
      dark: true,
    }
  },
  generate: {
    routes: [
      '/members/1',
      '/members/2',
      '/members/3',
      '/members/4',
      '/members/5',
      '/members/6',
      '/members/7',
      '/members/8',
      '/members/9',
      '/members/10',
      '/members/11',
      '/members/12',
      '/members/13',
      '/members/14',
      '/members/15',
      '/members/16',
      '/members/17',
      '/members/18',
      '/members/19',
      '/members/20',
      '/members/21',
      '/members/22',
      '/members/23',
    ]
  }
}
