/*
 * Timer
 */

define([
  'react',
  'react-dom',
  'jquery',
  'underscore',
  'text!app/timer/style.css',
  'jquery.knob'
], function (React, ReactDOM, $, _, css) {
  'use strict';

  var TimerView = React.createClass({
    getInitialState: function () {
      return {
        timer: new Timer()
      };
    },

    start: function (options) {
      var that = this;
      var opt = options || {};

      this.state.timer.start({
        onTick: function () {
          that.forceUpdate();

          if (that.state.timer.remaining === 0 && _.isFunction(opt.onStop)) {
            opt.onStop();
          }
        }
      });
    },

    stop: function () {
      this.state.timer.stop();
      this.forceUpdate();
    },

    getSecs: function () {
      var secs = this.state.timer.remaining;

      return (secs<10 ? '0'+secs : secs);
    },

    componentDidMount: function () {
      this.renderDial();
    },

    renderDial: function () {
      var clock = ReactDOM.findDOMNode(this.refs.clock);

      $(clock).knob({
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

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <input ref="clock" value={this.getSecs()} />
          <span className="micro-counter">Time left: 00:{this.getSecs()}</span>
        </div>
      );
    }
  });

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
