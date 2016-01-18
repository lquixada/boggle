/*
 * Control
 */

define([
  'jquery',
  'underscore',
  'app/base/view',
  'text!app/control/style.css',
  'text!app/control/template.tpl'
], function ($, _, BaseView, css, html) {
  'use strict';

  function ControlView() {
    this.elementId = '#control';
    this.started = false;
  }

  ControlView.prototype = _.extend(new BaseView(css, html), {
    render: function () {
      this.renderTemplate({started: this.started});
    },

    start: function () {
      this.started = true;
      this.render();
    },

    stop: function () {
      this.started = false;
      this.render();
    }
  });

  return ControlView;
});
