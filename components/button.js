import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { startGame, stopGame } from '../actions';


class Button extends React.Component {
  render() {
    return (
      <div id="button">
        {this.renderButton()}
      </div>
    );
  }

  renderButton() {
    if (this.props.started) {
      return <button type="button" onClick={this.props.stop}>stop</button>;
    } else {
      return <button type="button" onClick={this.props.start}>start</button>;
    }
  }
}

Button.propTypes = {
  started: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  started: state.started
});

const mapDispatchToProps = (dispatch) => ({
  start() {
    dispatch(startGame());
  },

  stop() {
    dispatch(stopGame());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
