import assets from '../../public/assets.json'
import config from '../../shared/config'

export default ({
  helmet, styles, html, state
}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
      <script src="${config.cloudfront}${assets.vendor.js}"></script>
      <script src="${config.cloudfront}${assets.app.js}"></script>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-85035199-1', 'auto');
        ga('send', 'pageview');
      </script>
    </body>
  </html>
`)
