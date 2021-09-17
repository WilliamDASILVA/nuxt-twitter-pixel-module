const path = require('path')

module.exports = function module (moduleOptions) {
  const defaults = {
    pixelId: null,
    track: 'PageView',
    version: '1.1'
  }

  // @ts-ignore
  const options = Object.assign({}, defaults, this.options.twitter, moduleOptions)

  // @ts-ignore
  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

// module.exports.meta = require('./../package.json')
