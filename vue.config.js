const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'FastWeather'; // Altere 'Novo Título' para o título desejado
      return args;
    });
  },
  //process.env.NODE_ENV === 'production' ?'/VueCli/':'/'
  publicPath: '/weather-development/',
  transpileDependencies: true
})
