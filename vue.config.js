const isProd = process.env.NODE_ENV === 'production';

const assetsCDN = {
  publicPath: isProd ? '/COVID19' : '/',
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'bootstrap-vue': 'BootstrapVue', 
    // vuex: 'Vuex',
    // axios: 'axios'
  },
  css: ['//unpkg.com/bootstrap/dist/css/bootstrap.min.css',
        '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css'],
  // https://unpkg.com/browse/vue@2.6.11/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js',
    // '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    // '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}

// vue.config.js
const vueConfig = {
    configureWebpack: {
          // if prod, add externals
        externals: isProd ? assetsCDN.externals : {}
    },

     devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy
    //   proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true
    //   },
  },

    lintOnSave: isProd !== 'production',
    runtimeCompiler: true, // will allow you to use the template option in Vue components
    transpileDependencies: [],
    crossorigin: undefined,
}
module.exports = vueConfig