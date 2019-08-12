const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_MOCK_SERVER,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('services', path.resolve(__dirname, './src/services'))
  }
}
