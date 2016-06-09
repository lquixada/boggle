import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


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
      return <button type="button" onClick={this.props.stopGame}>stop</button>;
    } else {
      return <button type="button" onClick={this.props.startGame}>start</button>;
    }
  }
}

const mapStateToProps = (state) => ({
  started: state.started
});

export default connect(mapStateToProps, actions)(Button);
