export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  head: {
    title: 'PriceHistory.Frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src:"~/plugins/ChartLineBase.js",
      src:"~/plugins/amplify.js",
      src:"~/plugins/toast.ts",
    }
  ],



  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'bootstrap-vue/nuxt',
  ],
  
  primevue: {
    theme: "saga-blue",
    ripple: true,
    components: [
        "InputText",
        "Button",
        "DataTable",
        "Column",
        "ColumnGroup",
        "MultiSelect",
        "Calendar",
        "Dropdown",
        "ProgressBar",
        "MultiSelect",
        "Chart",
    ]
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'primevue/nuxt',
    '@nuxtjs/auth-next'
  ],


  axios:{
    baseUrl:"http://localhost:5000/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

  auth: {
    strategies: {
        local: {
            token: {
                property: "access_token",
                type: "Bearer"
            },
            endpoints: {
                    user:false,
            },
            clientId: "25lv5r64pok1qevv3ri9fqoptu",
            scope: ["email", "openid", "profile"]
        }
    },
    redirect: {
        home: "/admin/AdminPanel",
        login: "/admin/login",
        logout: "/admin/login"
    }
},



}
