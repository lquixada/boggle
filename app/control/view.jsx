/*
 * Control
 */

define([
  'react',
  'text!app/control/style.css'
], function (React, css) {
  'use strict';

  var ControlView = React.createClass({
    getInitialState: function () {
      return {
        started: false
      };
    },

    start: function () {
      this.setState({started: true});
    },

    stop: function () {
      this.setState({started: false});
    },

    toggle: function () {
      if (this.state.started) {
        app.stop();
      } else {
        app.start();
      }
    },

    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <button type="button" onClick={this.toggle}>{this.state.started?'stop!':'start!'}</button>
        </div>
      );
    }
  });

  return ControlView;
});
