
export default {
  mode: 'spa',

  router: {
    base: 'https://fujingtai.github.io/blog/',
    mode: 'hash'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/img/icon/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  loadingIndicator: {
    name: 'circle',
    color: '#1890ff',
    background: '#f2f2f2'
  },
  /*
  ** Global CSS
  */
  css: ['ant-design-vue/dist/antd.css', './assets/css/leyui.css', './static/assets/css/main.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/filters'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    owner: 'fujingtai',
    repo: 'blog',
    todoRepo: 'todo',
    apiToken: ['31c146c2f693cc93472b' + '11c934bae72da7f2de4f', '5df2fa371a5a5cc4871b' + '5c0449f51fb0f3ee2911']
  }
}
