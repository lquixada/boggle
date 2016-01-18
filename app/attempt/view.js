/*
 * Attempt
 */

define([
  'jquery',
  'underscore',
  'text!app/attempt/style.css',
  'text!app/attempt/template.tpl'
], function ($, _, css, html) {
  'use strict';

  function AttemptView() {
    this.elementId = '#attempt';
    this.started = false;
    this.template = this.compile();
  }

  AttemptView.prototype = {
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
      this.focus();
    },

    stop: function () {
      this.started = false;
      this.render();
    },

    reset: function () {
      this.started = false;
      this.render();
    },

    clear: function () {
      this.render();
    },

    focus: function () {
      $(this.elementId).find(':input').focus();
    }
  };

  return AttemptView;
});
