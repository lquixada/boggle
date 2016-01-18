/*
 * Attempt
 */

define(['jquery', 'underscore', 'text!app/attempt/template.tpl'], function ($, _, tpl) {
  'use strict';
  
  function AttemptView() {
    this.elementId = '#attempt';
    this.started = false;
  }

  AttemptView.prototype = {
    template: _.template(tpl),

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
