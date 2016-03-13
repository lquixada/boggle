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
    getInitialState: function () {
      return {
        started: false
      };
    },

    start: function () {
      this.setState({started: true});
      this.focus();
    },

    stop: function () {
      this.setState({started: false});
    },

    reset: function () {
      this.setState({started: false});
    },

    clear: function () {
      this.render();
    },

    focus: function () {
      ReactDOM.findDOMNode(this.refs.attempt).focus();
    },

    checkOnEnter: function (evt) {
      app.checkOnEnter(evt);
    },

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <input type="text" ref="attempt" className="box" onKeyUp={this.checkOnEnter} disabled={!this.state.started}
           placeholder={this.state.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
        </div>
      );
    }
  });

  return AttemptView;
});
