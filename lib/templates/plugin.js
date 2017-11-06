export default (context) => {
  if (typeof window !== 'undefined') {
    ((f, b, e, v, n, t, s) => {
      if (f.twq) return; n = f.twq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._twq) f._twq = n; n.push = n; n.loaded = !0; n.version = '<%= options.version %>';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.defer = true;
      t.src = v;
      s = b.getElementsByTagName('body')[0];
      s.parentNode.appendChild(t, s);

      twq('init', '<%= options.pixelId %>');
      twq('track', '<%= options.track %>');
    })(window, document, 'script', 'https://static.ads-twitter.com/uwt.js');
  }
};
