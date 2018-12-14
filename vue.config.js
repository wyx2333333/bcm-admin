/** @format */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('fonts', resolve('public/fonts'))
      .set('img', resolve('public/img'))
      .set('json', resolve('public/json'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('iconfont', resolve('src/style/icon'))
      .set('scss', resolve('src/style/scss'))
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import 'scss/index.scss';`
      }
    }
  }
}
