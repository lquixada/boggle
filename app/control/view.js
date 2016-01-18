/*
 * Control
 */

define(['jquery', 'underscore', 'text!app/control/template.tpl'], function ($, _, tpl) {
  'use strict';

  function ControlView() {
    this.elementId = '#control';
    this.started = false;
  }

  ControlView.prototype = {
    template: _.template(tpl),

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
