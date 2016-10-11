import React from 'react';
import Button from '../components/button';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ButtonContainer extends React.Component {
  getText() {
    if (this.props.started) {
      return 'stop';
    }
    
    return 'start';
  }

  handleClick() {
    if (this.props.started) {
      this.props.stopGame();
    } else {
      this.props.startGame();
    }
  }

  render() {
    return (
      <Button onClick={this.handleClick.bind(this)} text={this.getText()} />
    );
  }
}

const mapStateToProps = ({started}) => ({started});
export default connect(mapStateToProps, actions)(ButtonContainer);
