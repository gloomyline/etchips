const path = require('path');

module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://www.etchips-dev.com:8108',
        target: 'http://login.honengelec.com:8108',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
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
