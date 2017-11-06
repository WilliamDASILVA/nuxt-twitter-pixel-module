const path = require('path');

module.exports = function module (moduleOptions) {
  const defaults = {
    pixelId: null,
    track: 'PageView',
    version: '1.1',
  };
  const options = Object.assign({}, defaults, this.options.twitter, moduleOptions);

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options,
  });

};
