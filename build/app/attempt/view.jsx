/*
 * Attempt
 */

define([
  'react',
  'react-dom',
  'text!app/attempt/style.css'
], function (React, ReactDOM, css) {
  'use strict';

  var AttemptView = React.createClass({
    componentDidMount: function () {
      this.focus();
    },

    componentDidUpdate: function () {
      this.focus();
    },

    clear: function () {
      this.forceUpdate();
    },

    focus: function () {
      ReactDOM.findDOMNode(this.refs.attempt).focus();
    },

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <input type="text" ref="attempt" className="box" onKeyUp={this.props.onEnter} disabled={!this.props.started}
           placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
        </div>
      );
    }
  });

  return AttemptView;
});