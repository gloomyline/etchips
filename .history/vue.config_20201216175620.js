const path = require('path');
const webpack = require('webpack')

module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://www.etchips-dev.com:8108',
        target: 'http://login.honengelec.com:8108',
        // target: 'http://192.168.3.21:8108',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/common/styles/index.styl'),
      ],
    },
  },
};
