/*
 * Control
 */
var React = require('react');
var style = require('./index.less');


var Button = React.createClass({
  render: function () {
    return (
      <div id="control">
        <button type="button" onClick={this.props.onClick}>{this.props.started?'stop!':'start!'}</button>
      </div>
    );
  }
});

module.exports = Button;
