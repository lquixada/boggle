/*
 * Base
 */

define([
  'jquery',
  'underscore'
], function ($, _) {
  'use strict';

  function BaseView(css, html) {
    this.elementId = '';
    this.template = this.compile(css, html);
  }

  BaseView.prototype = {
    compile: function (css, html) {
      var template = '<style>'+css+'</style>'+html;
      return _.template(template);
    },

    render: function () {
      this.renderTemplate();
    },

    renderTemplate: function (context) {
      var html = this.template(context || {});
      $(this.elementId).html(html);
    },

    reset: function () {
      throw 'not implemented';
    },

    start: function () {
      throw 'not implemented';
    },

    stop: function () {
      throw 'not implemented';
    }
  };

  return BaseView;
});
