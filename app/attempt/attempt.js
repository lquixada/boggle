/*
 * Attempt
 */

function AttemptView() {
  this.elementId = '#attempt';
  this.started = false;
}

AttemptView.prototype = {
  render: function () {
    _.render(this.elementId, {started: this.started});
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
