import _ from 'underscore';
import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class Attempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      minLength: 2
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.started) {
      this.clear();
    }
  }

  componentDidUpdate() {
    this.focus();
  }

  handleEnter(evt) {
    if (this.state.value.length < this.state.minLength) {
      return;
    }

    if (evt.which === 13) {
      this.props.addCheckedAttempt(this.state.value);
      this.reset();
    }
  }

  handleChange(evt) {
    this.setValue(evt.target.value);
  }

  setValue(value) {
    this.setState({value: value.trim()});
  }

  reset() {
    this.clear();
    this.focus();
  }

  clear() {
    this.setValue('');
  }

  focus() {
    this.refs.attempt.focus();
  }

  render() {
    return (
      <div id="attempt">
        <input type="text" ref="attempt"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleEnter.bind(this)}
          className="box"
          disabled={!this.props.started}
          placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
      </div>
    );
  }
}

const mapStateToProps = ({ attempts, started }) => ({ attempts, started });

export default connect(mapStateToProps, actions)(Attempt);
