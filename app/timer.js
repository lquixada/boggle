/*
 * Timer
 */

function Timer(options) {
  var opt = options || {};

  this.frame = opt.frame || 60;
  this.remaining = this.frame;
  this.onTick = opt.onTick || _.noop;
}

Timer.prototype = {
  start: function (options) {
    var that = this;

    this.timer = setInterval(function () {
      that.remaining--;
      that.onTick();

      if (!that.remaining) {
        that.stop();
      }
    }, 1000);
  },

  stop: function () {
    this.remaining = this.frame;
    clearInterval(this.timer);
  }
};

function TimerView() {
  this.elementId = '#clock';
  this.timer = new Timer({
    onTick: _.bind(this.render, this)
  });
}

TimerView.prototype = {
  render: function () {
    _.render(this.elementId, {secs: this.timer.remaining});
  },

  start: function () {
    this.timer.start();
  },

  stop: function () {
    this.timer.stop();
    this.render();
  }
};
