require([
  'jquery',
  'react',
  'react-dom',
  './main/view.jsx',
  './init.less'
], function ($, React, ReactDOM, App) {
  $(function () {
    window.app = ReactDOM.render(<App />, document.getElementById('game'));
  });
});
