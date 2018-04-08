import React from 'react';
import {connect} from 'react-redux';

import Clock from '../components/clock';
import * as actions from '../actions';
import Timer from '../utils/timer';

const timer = new Timer();

export class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secs: timer.remaining,
      frame: timer.frame
    };

    this.handleChange = this.handleChange.bind(this);
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
    this.setState({secs: timer.remaining}, () => {
      if (this.state.secs === 0) {
        // Give some time for React to render the 0-state clock
        // and then stop the game.
        setTimeout(() => {
          this.props.stopGame();
          this.alert();
        }, 100);
      }
    });
  }

  alert() {
    window.alert('Game over!');
  }

  render() {
    return (
      <Clock secs={this.state.secs} total={this.state.frame} />
    );
  }
}

const mapStateToProps = ({started}) => ({started});
export default connect(mapStateToProps, actions)(ClockContainer);
