/*
 * Control
 */
import React from 'react';
import style from './index.less';

export default class Button extends React.Component {
  render() {
    return (
      <div id="control">
        <button type="button" onClick={this.props.onClick}>{this.props.started?'stop!':'start!'}</button>
      </div>
    );
  }
}
