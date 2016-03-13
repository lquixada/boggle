/*
 * Timer
 */

define(['react', 'react-dom', 'jquery', 'underscore', 'jquery.knob'], function (React, ReactDOM, $, _) {
  'use strict';

  var ClockView = React.createClass({
    displayName: 'ClockView',

    getInitialState: function () {
      var timer = new Timer();
      return {
        secs: timer.remaining,
        timer: timer
      };
    },

    componentWillReceiveProps: function (nextProps) {
      if (nextProps.started) {
        this.start({
          onStop: function () {
            that.stop();
            that.props.onStop();
            alert('Game over!');
          }
        });
      } else {
        this.stop();
      }
    },

    start: function (options) {
      var that = this;
      var opt = options || {};

      this.state.timer.start({
        onTick: function () {
          that.setState({ secs: that.state.timer.remaining });

          if (that.state.secs === 0 && _.isFunction(opt.onStop)) {
            opt.onStop();
          }
        }
      });
    },

    stop: function () {
      this.state.timer.stop();
      this.setState({ secs: this.state.timer.remaining });
    },

    getSecs: function () {
      var secs = this.state.secs;

      return secs < 10 ? '0' + secs : secs;
    },

    componentDidMount: function () {
      this.renderDial();
    },

    componentDidUpdate: function () {
      this.renderDial();
    },

    renderDial: function () {
      var clock = ReactDOM.findDOMNode(this.refs.clock);

      console.log(clock);

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
      return React.createElement(
        'div',
        { id: 'clock' },
        React.createElement('input', { ref: 'clock', value: this.getSecs(), readOnly: 'true' }),
        React.createElement(
          'span',
          { className: 'micro-counter' },
          'Time left: 00:',
          this.getSecs()
        )
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

  return ClockView;
});
