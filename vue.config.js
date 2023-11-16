const { defineConfig } = require('@vue/cli-service')
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'FastWeather'; // Altere 'Novo Título' para o título desejado
      return args;
    });
  },
  //process.env.NODE_ENV === 'production' ?'/VueCli/':'/'
  publicPath: '/weather/',
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/weather': {
        target: 'https://api.hgbrasil.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/weather': '/weather',
        },
      },
    },
  },

}
