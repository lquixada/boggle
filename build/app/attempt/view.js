define(["react","react-dom","text!app/attempt/style.css"],function(a,b,c){"use strict";var d=a.createClass({displayName:"AttemptView",getInitialState:function(){return{started:!1}},start:function(){this.setState({started:!0}),this.focus()},stop:function(){this.setState({started:!1})},reset:function(){this.setState({started:!1})},clear:function(){this.render()},focus:function(){b.findDOMNode(this.refs.attempt).focus()},checkOnEnter:function(a){app.checkOnEnter(a)},render:function(){return a.createElement("div",null,a.createElement("style",{type:"text/css"},c),a.createElement("input",{type:"text",ref:"attempt",className:"box",onKeyUp:this.checkOnEnter,disabled:!this.state.started,placeholder:this.state.started?"Type the word and hit Enter":"Press start to begin..."}))}});return d});