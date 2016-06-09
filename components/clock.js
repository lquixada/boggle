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
    timer.on('tick', this._onChange);
  }

  componentWillUnmount() {
    timer.removeListener('tick', this._onChange);
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
        <svg width="120" height="120">
          <circle r="50" cx="60" cy="60" className="clock clock-gray" />
          <circle r="50" cx="60" cy="60" className={'clock clock-green '+(this.props.started? 'running': '')} />
          <text x="60" y="70" className="counter" textAnchor="middle">
            {this.state.secs}
          </text>
        </svg>
        <span className="micro-counter">Time left: 00:{this.getSecs()}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  started: state.started
});

export default connect(mapStateToProps, actions)(Clock);
