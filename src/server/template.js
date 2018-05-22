import pkg from '../../package.json';


export default ({
  state, styleTags, content, assets, bundle
}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="version" content="${pkg.version}">
      <title>Boggle</title>
      ${styleTags}
    </head>

    <body>
      <div id="game">${content}</div>
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
