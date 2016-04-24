/*
 * Timer
 */
import _ from 'underscore';
import $ from 'jquery';
import knob from 'jquery-knob';
import React from 'react';
import style from './index.less';


export default class Clock extends React.Component {
  constructor(props) {
    var timer = new Timer();
    super(props);

    this.state = {
      secs: timer.remaining,
      timer: timer
    };
  }

  componentWillReceiveProps(nextProps) {
    var that = this;

    if (nextProps.started) {
      this.start({
        onStop() {
          that.props.onStop();
          alert('Game over!');
        }
      });
    } else {
      this.stop();
    }
  }

  start(options) {
    var that = this;
    var opt = options || {};

    this.state.timer.start({
      onTick() {
        that.setState({secs: that.state.timer.remaining});

        if (that.state.secs === 0 && _.isFunction(opt.onStop)) {
          opt.onStop();
        }
      }
    });
  }

  stop() {
    this.state.timer.stop();
    this.setState({secs: this.state.timer.remaining});
  }

  getSecs() {
    var secs = this.state.secs;

    return (secs<10 ? '0'+secs : secs);
  }

  componentDidMount() {
    this.renderDial();
  }

  componentDidUpdate() {
    this.updateDial();
  }

  renderDial() {
    $(this.refs.timer).knob({
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
  }

  updateDial() {
    $(this.refs.timer).trigger('change');
  }

  render() {
    return (
      <div id="clock">
        <input ref="timer" value={this.state.secs} readOnly="true" />
        <span className="micro-counter">Time left: 00:{this.getSecs()}</span>
      </div>
    );
  }
}

class Timer {
  constructor(options) {
    var opt = options || {};

    this.frame = opt.frame || 60;
    this.remaining = this.frame;
  }

  start(options) {
    var that = this;

    this.onTick = options.onTick || _.noop;
    this.timer = setInterval(function () {
      that.remaining--;
      that.onTick();

      if (!that.remaining) {
        that.stop();
      }
    }, 1000);
  }

  stop() {
    this.remaining = this.frame;
    clearInterval(this.timer);
  }
}
