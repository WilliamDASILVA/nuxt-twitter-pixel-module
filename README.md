# nuxt-twitter-pixel-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-twitter-pixel-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-twitter-pixel-module)
[![npm](https://img.shields.io/npm/dt/nuxt-twitter-pixel-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-twitter-pixel-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module thats injects Twitter Pixel code

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [License](#license)

## Requirements

* npm or yarn
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-twitter-pixel-module
// or
$ yarn add nuxt-twitter-pixel-module
```

## Getting Started

Add `nuxt-twitter-pixel-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-twitter-pixel-module',

    // With options
    ['nuxt-twitter-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: 'TWITTER_PIXEL',
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-twitter-pixel-module',
  ],
  twitter: {
    /* module options */
    track: 'PageView',
    pixelId: 'TWITTER_PIXEL_ID',
  },
}
```


## License

[MIT License](./LICENSE)
