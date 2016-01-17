requirejs.config({
  baseUrl: '..',
  paths: {
    'jquery': 'vendor/jquery-2.1.4.min',
    'jquery.knob': 'vendor/jquery.knob.min',
    'underscore': 'vendor/underscore-min'
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
