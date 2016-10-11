import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {connect} from 'react-redux';
import Clock from '../components/clock';
import * as actions from '../actions';
import Timer from '../utils/timer';

const timer = new Timer();

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secs: timer.remaining
    };

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    timer.on('tick', this.handleChange);
  }

  componentWillUnmount() {
    timer.removeListener('tick', this.handleChange);
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

  // eslint-disable-next-line class-methods-use-this
  start() {
    timer.start();
  }

  stop() {
    timer.stop();
    this.setState({secs: timer.frame});
  }

  handleChange() {
    if (timer.remaining === 0) {
      this.props.stopGame();
      alert('Game over!');
    }

    this.setState({secs: timer.remaining});
  }

  render() {
    return (
      <Clock secs={this.state.secs} started={this.props.started} />
    );
  }
}

const mapStateToProps = ({started}) => ({started});
export default connect(mapStateToProps, actions)(ClockContainer);
