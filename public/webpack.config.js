/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
   rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
     options: {
       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
         modifyVars: {
           'primary-color': '#E43834',
         },
         javascriptEnabled: true,
      },
    },
    }],
  }],
};
