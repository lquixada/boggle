function ControlView() {
  this.elementId = '#control';
}

ControlView.prototype = {
  render: function () {
    _.render(this.elementId, {});
  }
};
