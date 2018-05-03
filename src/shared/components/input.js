import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {box, flex} from '../helpers';

class InputArea extends React.Component {
  componentDidUpdate() {
    if (this.props.started) {
      this.focus();
    }
  }

  focus() {
    this.word.focus();
  }

  render() {
    return (
      <Wrapper>
        <Input type="text"
          innerRef={(word) => this.word = word}
          value={this.props.value}
          onChange={(evt) => this.props.onChange(evt)}
          onKeyUp={(evt) => this.props.onEnter(evt)}
          disabled={!this.props.started}
          placeholder={this.props.started ? 'Type the word and hit Enter!' : 'Press start to begin...'} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  ${flex('1 1 auto')}
  margin-left: 2rem;

  @media (max-width: 540px) {
    ${flex('1 1 100%')}
    ${flex.order('2')}
    margin: 1rem 0 0;
  }
`;

const Input = styled.input`
  ${box()}
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-size: 2rem;
  border-radius: .4rem;

  &:disabled {
    opacity: .5;
  }
`;

InputArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default InputArea;
