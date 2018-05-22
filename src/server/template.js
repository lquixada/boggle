import assets from '../public/assets.json';

export default ({
  helmet, styleTags, content, state
}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      ${styleTags}
    </head>

    <body>
      <div id="app">${content}</div>
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
      <script src="${assets.vendor.js}"></script>
      <script src="${assets.app.js}"></script>
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
`);
