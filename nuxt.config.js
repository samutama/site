/**
 * 一般
 */
const siteNameEn = 'Samurai Tamashi Official Site'
const siteNameJa = '侍魂オフィシャルサイト'
const siteName = `${siteNameJa}｜${siteNameEn}`
const siteUrl = 'https://samurai-tamashi.tk/' // スラあり
const baseUrl = 'https://samurai-tamashi.tk' // スラなし
const domain = 'samurai-tamashi.tk' // ドメイン

/**
 * head周り
 */
const title = siteName
const titleTemplate = `｜${title}`
const description = 'グランツーリスモのチーム「侍魂」のオフィシャルサイト'
const keywords = 'グランツーリスモ,侍魂,ドリフト'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    titleTemplate: '%s' + titleTemplate,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:image', property: 'og:image', content: '/static/mv.jpg' },
    ],
    script: [
      { src: '//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@nuxtjs/google-analytics'
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
      const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')
      vueLoader.options.transformToRequire = {
        video: 'src',
        source: 'src'
      }
    }
  },
  vuetify: {
    theme: {
      dark: true,
    }
  },
  googleAnalytics: {
    id: 'G-B3NRBBWXZM'
  },
  generate: {
    // TODO: 動的ルートを自動化する
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
      '/members/24',
      '/members/25',
      '/members/26',
      '/members/27',
      '/members/28',
      '/members/29',
      '/members/30',
    ]
  }
}
