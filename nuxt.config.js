import colors from 'vuetify/es5/util/colors'
import de from 'vuetify/es5/locale/de'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Falk Drieschner',
    title: 'Falk Drieschner',
    htmlAttrs: {
      lang: 'de-DE',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ich heiße Falk Drieschner, ein Anwendungsentwickler, und dies ist meine Homepage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  plugins: [],
  /*
  ** Manifest
  */
  manifest: {
    'name': 'Falks Homepage',
    'short_name': 'Falks Homepage',
    'description': 'Ich heiße Falk Drieschner, ein Anwendungsentwickler, und dies ist meine Homepage'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultLocale: 'de',
    locales: ['de'],
    plugins: ['moment-feiertage']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Contains special information for generation?
  */
  generate: {
    routes: ['404']
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      //dark: false,
      themes: {
        light: {
          primary: colors.lightBlue.darken2,
          accent: colors.lightBlue.accent3,
          secondary: colors.cyan.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.lightBlue.darken2,
          accent: colors.lightBlue.accent3,
          secondary: colors.cyan.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    icons: {
      iconfont: 'mdi' // default - only for display purposes
    },
    lang: {
      locales: { de },
      current: 'de',
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
