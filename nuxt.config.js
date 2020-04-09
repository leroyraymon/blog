
export default {
  mode: 'spa',

  router: {
    base: 'https://raw.githubusercontent.com/fujingtai/blog/master/docs/',
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
    githubToken: '28f8aba1444d142fa3521b73793fb6b97891420c',
    githubClientId: '08014041b70c0e2a14eb',
    githubClientSecret: 'e8c8c8173eadd1f4874bf073a156208829571109'
  }
}
