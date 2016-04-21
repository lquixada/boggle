/*
 * Timer
 */
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var $ = require('jquery');
var style = require('./index.less');
var knob = require('jquery-knob');

var ClockView = React.createClass({
  getInitialState: function () {
    var timer = new Timer();
    return {
      secs: timer.remaining,
      timer: timer
    };
  },

  componentWillReceiveProps: function (nextProps) {
    var that = this;

    if (nextProps.started) {
      this.start({
        onStop: function () {
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
        that.setState({secs: that.state.timer.remaining});

        if (that.state.secs === 0 && _.isFunction(opt.onStop)) {
          opt.onStop();
        }
      }
    });
  },

  stop: function () {
    this.state.timer.stop();
    this.setState({secs: this.state.timer.remaining});
  },

  getSecs: function () {
    var secs = this.state.secs;

    return (secs<10 ? '0'+secs : secs);
  },

  componentDidMount: function () {
    this.renderDial();
  },

  componentDidUpdate: function () {
    this.updateDial();
  },

  renderDial: function () {
    var timer = ReactDOM.findDOMNode(this.refs.timer);

    $(timer).knob({
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

  updateDial: function () {
    var timer = ReactDOM.findDOMNode(this.refs.timer);

    $(timer).trigger('change');
  },

  render: function () {
    return (
      <div id="clock">
        <input ref="timer" value={this.state.secs} readOnly="true" />
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

module.exports = ClockView;
