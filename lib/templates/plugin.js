/**
 * @class Tw
 */
class Tw {
  constructor(twq, options) {
    this.twq = twq
    this.options = options
  }

  /**
   * @method setPixelId
   * @param {*} pixelId
   */
  setPixelId(pixelId) {
    this.options.pixelId = pixelId
    this.init()
  }

  /**
   * @method enable
   */
  enable() {
    this.isEnabled = true
    this.init()
    this.track()
  }

  /**
   * @method disable
   */
  disable() {
    this.isEnabled = false
  }

  /**
   * @method init
   */
  init() {
    this.query('init', this.options.pixelId)
  }

  /**
   * @method track
   */
  track(event = null, parameters = null) {
    if (!event) {
      event = this.options.track
    }

    this.query('track', event, parameters)
  }

  /**
   * @method query
   * @param {string} cmd
   * @param {object} option
   * @param {object} parameters
   */
  query(cmd, option, parameters = null) {
    if (this.options.debug)
      log(
        'Command:',
        cmd,
        'Option:',
        option,
        'Additional parameters:',
        parameters
      )
    if (!this.isEnabled) return

    if (!parameters) {
      this.twq(cmd, option)
    } else {
      this.twq(cmd, option, parameters)
    }
  }
}

function log(...messages) {
  console.info.apply(this, ['[nuxt-twitter-pixel-module]', ...messages])
}

// @ts-nocheck
export default (ctx, inject) => {
  let _twq
  const parsedOptions = <%= JSON.stringify(options) %>
  const isDev = parsedOptions.dev && !parsedOptions.debug

  if (isDev) {
    log(
      'You are running in development mode. Set "debug: true" in your nuxt.config.js if you would like to trigger tracking events in local.'
    )
  }

  if (typeof window !== 'undefined') {
    !(function(e, t, n, s, u, a) {
      e.twq ||
        ((s = e.twq = function() {
          s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
        }),
        (s.version = parsedOptions.version),
        (s.queue = []),
        (u = t.createElement(n)),
        (u.async = !0),
        (u.src = '//static.ads-twitter.com/uwt.js'),
        (a = t.getElementsByTagName(n)[0]),
        a.parentNode.insertBefore(u, a))
    })(window, document, 'script')

    _twq = twq

    if (!isDev && !parsedOptions.disabled) {
      twq('init', parsedOptions.pixelId)
      twq('track', parsedOptions.track)
    }
  }

  const instance = new Tw(_twq, parsedOptions)

  // Automatically track PageView if enable
  if (parsedOptions.autoPageView && ctx.app && ctx.app.router) {
    const router = ctx.app.router
    router.afterEach(() => {
      instance.track('PageView')
    })
  }

  ctx.$tw = instance
  inject('tw', instance)
}
