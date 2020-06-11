const path = require('path');

module.exports = {
  publicPath: './',
  devServer: {
    open: true,
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
