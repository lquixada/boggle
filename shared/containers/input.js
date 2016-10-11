import React from 'react';
import Input from '../components/input';
import * as actions from '../actions';
import {connect} from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      minLength: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleChange({target}) {
    this.setValue(target.value);
  }
  
  handleEnter(evt) {
    if (this.state.value.length < this.state.minLength) {
      return;
    }

    if (evt.which === 13) {
      this.props.addCheckedAttempt(this.state.value);
      this.reset();
      evt.target.focus();
    }
  }

  setValue(value) {
    this.setState({value: value.trim()});
  }

  reset() {
    this.setValue('');
  }

  render() {
    return (
      <Input value={this.state.value}
        started={this.props.started}
        onChange={this.handleChange}
        onEnter={this.handleEnter} />
    );
  }
}

const mapStateToProps = ({started}) => ({started});
export default connect(mapStateToProps, actions)(InputContainer);
