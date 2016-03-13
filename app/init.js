requirejs.config({
  baseUrl: location.href,
  paths: {
    'jquery': 'vendor/jquery/dist/jquery.min',
    'jquery.knob': 'vendor/jquery-knob/dist/jquery.knob.min',
    'underscore': 'vendor/underscore/underscore-min',
    'react': 'vendor/react/react',
    'react-dom': 'vendor/react/react-dom'
  }
});

require(['react', 'react-dom', 'app/main/view'], function (React, ReactDOM, App) {
  $(function () {
    window.app = ReactDOM.render(React.createElement(App, null), document.getElementById('game'));
  });
});
