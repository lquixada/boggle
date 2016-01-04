/*
 * Control
 */

function ControlView() {
  this.elementId = '#control';
  this.started = false;
}

ControlView.prototype = {
  render: function () {
    _.render(this.elementId, {
      started: this.started
    });
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
