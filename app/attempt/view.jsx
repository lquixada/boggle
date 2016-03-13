/*
 * Attempt
 */

define([
  'react',
  'react-dom'
], function (React, ReactDOM) {
  'use strict';

  var Attempt = React.createClass({
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

    onEnter: function (evt) {
      if (evt.which === 13) {
        this.props.onEnter(evt);
      }
    },

    render: function () {
      return (
        <div id="attempt">
          <input type="text" ref="attempt" className="box" onKeyUp={this.props.onEnter} disabled={!this.props.started}
           placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
        </div>
      );
    }
  });

  return Attempt;
});
