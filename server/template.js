export default ({state, content, assets, bundle}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Boggle</title>

      <link href="${bundle.css}" rel="stylesheet" />
      <script>
        window.__ASSETS__ = ${assets};
        window.__INITIAL_STATE__ = ${state};
      </script>
    </head>

    <body>
      <div id="game">${content}</div>
      <script src="${bundle.js}"></script>
    </body>
  </html>
`);
