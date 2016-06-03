/*
 * Timer
 */
import _ from 'underscore';
import $ from 'jquery';
import knob from 'jquery-knob';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { stopGame } from '../actions';
import Timer from '../utils/timer.js';


class Clock extends React.Component {
  constructor(props) {
    var timer = new Timer();
    super(props);

    this.state = {
      secs: timer.remaining,
      timer: timer
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.started) {
      this.start({
        onStop: () => {
          this.props.stop();
          alert('Game over!');
        }
      });
    } else {
      this.stop();
    }
  }

  start(options) {
    var opt = options || {};

    this.state.timer.start({
      onTick: () => {
        this.setState({secs: this.state.timer.remaining});

        if (this.state.secs === 0 && _.isFunction(opt.onStop)) {
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

Clock.propTypes = {
  started: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  started: state.started
});

const mapDispatchToProps = (dispatch) => ({
  stop() {
    dispatch(stopGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
