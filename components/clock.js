import $ from 'jquery';
import knob from 'jquery-knob';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Timer from '../utils/timer.js';

var timer = new Timer();

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      secs: timer.remaining
    };
  }

  componentDidMount() {
    this.renderDial();
    timer.on('tick', this._onChange);
  }

  componentWillUnmount() {
    timer.removeListener('tick', this._onChange);
  }

  componentDidUpdate() {
    this.updateDial();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.started) {
      // This if guarantees that React Hot Reloading doesn't affect the timer since
      // it's going to pass here a lot of times
      if (!timer.started) {
        this.start();
      }
    } else {
      this.stop();
    }
  }

  start() {
    timer.start();
  }

  stop() {
    timer.stop();
    this.setState({secs: timer.frame});
  }

  getSecs() {
    var secs = this.state.secs;

    return (secs<10 ? '0'+secs : secs);
  }

  updateDial() {
    $(this.refs.timer).trigger('change');
  }

  _onChange() {
    if (timer.remaining === 0) {
      this.props.stopGame();
      alert('Game over!');
    }

    this.setState({secs: timer.remaining});
  }

  render() {
    return (
      <div id="clock">
        <input ref="timer" value={this.state.secs} readOnly="true" />
        <span className="micro-counter">Time left: 00:{this.getSecs()}</span>
      </div>
    );
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
}

Clock.propTypes = {
  started: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  started: state.started
});

export default connect(mapStateToProps, actions)(Clock);
