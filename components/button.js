/*
 * Control
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { startGame, stopGame } from '../actions';

class Button extends React.Component {
  handleClick() {
    if (this.props.started) {
      this.props.stop();
    } else {
      this.props.start();
    }
  }

  render() {
    return (
      <div id="control">
        <button type="button" onClick={this.handleClick.bind(this)}>{this.props.started?'stop!':'start!'}</button>
      </div>
    );
  }
}

Button.propTypes = {
  started: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  started: state.started
})

const mapDispatchToProps = (dispatch) => ({
  start() {
    dispatch(startGame());
  },

  stop() {
    dispatch(stopGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
