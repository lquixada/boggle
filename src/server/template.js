export default ({
  state, content, assets, bundle
}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Boggle</title>

      <link href="${assets.app.css}" rel="stylesheet" />
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
    </head>

    <body>
      <div id="game">${content}</div>
      <script async defer src="${assets.vendor.js}"></script>
      <script async defer src="${assets.app.js}"></script>
      <script async defer>
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
