require([
  'react',
  'react-dom',
  './main/view.jsx',
  './init.less'
], function (React, ReactDOM, App) {
    ReactDOM.render(<App />, document.getElementById('game'));
});
