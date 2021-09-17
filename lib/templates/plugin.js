// @ts-nocheck
export default (context, inject) => {
  const parsedOptions = <%= JSON.stringify(options) %>

  let {
    pixelId,
    track,
    version,
  } = parsedOptions

  /**
   * Override the parsed options with the runtime config
   * as the runtime config always override.
   */
  const runtimeConfig = context.$config.twitter
  if (runtimeConfig) {
    if (runtimeConfig.pixelId) pixelId = runtimeConfig.pixelId
    if (runtimeConfig.track) track = runtimeConfig.track
    if (runtimeConfig.version) version = runtimeConfig.version
  }

  if (typeof window !== 'undefined') {
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version=version,s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

    twq('init', pixelId)
    twq('track', track)
  }
}
