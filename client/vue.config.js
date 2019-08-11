module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_MOCK_SERVER,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
