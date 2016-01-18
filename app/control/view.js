/*
 * Control
 */

define([
  'jquery',
  'underscore',
  'text!app/control/style.css',
  'text!app/control/template.tpl'
], function ($, _, css, html) {
  'use strict';

  function ControlView() {
    this.elementId = '#control';
    this.started = false;
    this.template = this.compile();
  }

  ControlView.prototype = {
    compile: function () {
      var template = '<style>'+css+'</style>'+html;
      return _.template(template);
    },

    render: function () {
      var html = this.template({started: this.started});
      $(this.elementId).html(html);
    },

    start: function () {
      this.started = true;
      this.render();
    },

    stop: function () {
      this.started = false;
      this.render();
    }
  };

  return ControlView;
});
