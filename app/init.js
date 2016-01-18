requirejs.config({
  baseUrl: '..',
  paths: {
    'text': 'vendor/text/text',
    'jquery': 'vendor/jquery/dist/jquery.min',
    'jquery.knob': 'vendor/jquery-knob/dist/jquery.knob.min',
    'underscore': 'vendor/underscore/underscore-min'
  }
});

require([
  'jquery',
  'underscore',
  'app/main/view',
  'app/helper',
  'jquery.knob'
], function ($, _, App) {
  $(function () {
    window.app = new App();
    window.app.render();
  });
});
