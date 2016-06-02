/*
 * Attempt
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Attempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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

  clear() {
    this.setValue('');
  }

  focus() {
    this.refs.attempt.focus();
  }

  onEnter(evt) {
    if (evt.which === 13) {
      this.props.onEnter(evt);
      this.clear();
    }
  }

  updateValue(evt) {
    this.setValue(evt.target.value);
  }

  setValue(val) {
    this.setState({value: val});
  }

  render() {
    return (
      <div id="attempt">
        <input type="text" ref="attempt" value={this.state.value}
          onChange={this.updateValue.bind(this)}
          onKeyUp={this.onEnter.bind(this)}
          className="box"
          disabled={!this.props.started}
          placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
      </div>
    );
  }
}

Attempt.propTypes = {
  started: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  started: state.started
});

export default connect(mapStateToProps)(Attempt);
