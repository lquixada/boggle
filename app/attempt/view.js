/*
 * Attempt
 */

define([
  'jquery',
  'underscore',
  'app/base/view',
  'text!app/attempt/style.css',
  'text!app/attempt/template.tpl'
], function ($, _, BaseView, css, html) {
  'use strict';

  function AttemptView() {
    this.elementId = '#attempt';
    this.started = false;
  }

  AttemptView.prototype = _.extend(new BaseView(css, html), {
    render: function () {
      this.renderTemplate({started: this.started});
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
  });

  return AttemptView;
});
