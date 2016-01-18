requirejs.config({
  baseUrl: location.href,
  paths: {
    'text': 'vendor/text/text',
    'jquery': 'vendor/jquery/dist/jquery.min',
    'jquery.knob': 'vendor/jquery-knob/dist/jquery.knob.min',
    'underscore': 'vendor/underscore/underscore-min'
  }
});

require([
  'jquery',
  'app/main/view'
], function ($, App) {
  $(function () {
    window.app = new App();
    window.app.render();
  });
});
