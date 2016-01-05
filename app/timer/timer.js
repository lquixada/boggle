/*
 * Timer
 */


define(['jquery', 'underscore'], function ($, _) {
  function TimerView() {
    this.elementId = '#timer';
    this.timer = new Timer();
  }

  TimerView.prototype = {
    render: function () {
      _.render(this.elementId, {secs: this.timer.remaining});
      this.renderDial();
    },

    renderDial: function () {
      $(this.elementId).find('input').knob({
        readOnly: true,
        width: 120,
        height: 120,
        min: 0,
        max: 60,
        inputColor: '#fff',
        bgColor: '#6c6',
        fgColor: '#666',
        thickness: '.30',
        rotation: 'anticlockwise'
      });
    },

    start: function (options) {
      var that = this;
      var opt = options || {};

      this.timer.start({
        onTick: function () {
          that.render();

          if (that.timer.remaining === 0 && _.isFunction(opt.onStop)) {
            opt.onStop();
          }
        }
      });
    },

    stop: function () {
      this.timer.stop();
      this.render();
    }
  };

  function Timer(options) {
    var opt = options || {};

    this.frame = opt.frame || 60;
    this.remaining = this.frame;
  }

  Timer.prototype = {
    start: function (options) {
      var that = this;

      this.onTick = options.onTick || _.noop;
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

  return TimerView;
});
