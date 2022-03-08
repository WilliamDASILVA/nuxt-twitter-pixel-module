const path = require('path')

const DEFAULT_OPTIONS = {
  pixelId: null,
  track: 'PageView',
  version: '1.1',
  autoPageView: false,
  disabled: false,
  debug: false
}

module.exports = function module (moduleOptions) {
  // @ts-ignore
  const options = Object.assign(
    {},
    DEFAULT_OPTIONS,
    this.options.twitter,
    moduleOptions
  )
  options.dev = this.options.dev

  if (!options.pixelId) {
    throw new Error('The default `pixelId` option is required.')
  }

  // @ts-ignore
  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
