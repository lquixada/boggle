define(["react","react-dom","jquery","underscore","text!app/timer/style.css","jquery.knob"],function(a,b,c,d,e){"use strict";function f(a){var b=a||{};this.frame=b.frame||60,this.remaining=this.frame}var g=a.createClass({displayName:"TimerView",getInitialState:function(){var a=new f;return{secs:a.remaining,timer:a}},componentWillReceiveProps:function(a){a.started?this.start({onStop:function(){that.stop(),that.props.onStop(),alert("Game over!")}}):this.stop()},start:function(a){var b=this,c=a||{};this.state.timer.start({onTick:function(){b.setState({secs:b.state.timer.remaining}),0===b.state.secs&&d.isFunction(c.onStop)&&c.onStop()}})},stop:function(){this.state.timer.stop(),this.setState({secs:this.state.timer.remaining})},getSecs:function(){var a=this.state.secs;return 10>a?"0"+a:a},componentDidMount:function(){this.renderDial()},renderDial:function(){var a=b.findDOMNode(this.refs.clock);c(a).knob({readOnly:!0,width:120,height:120,min:0,max:60,inputColor:"#fff",bgColor:"#6c6",fgColor:"#666",thickness:".30",rotation:"anticlockwise"})},render:function(){return a.createElement("div",null,a.createElement("style",{type:"text/css"},e),a.createElement("input",{ref:"clock",value:this.getSecs(),readOnly:"true"}),a.createElement("span",{className:"micro-counter"},"Time left: 00:",this.getSecs()))}});return f.prototype={start:function(a){var b=this;this.onTick=a.onTick||d.noop,this.timer=setInterval(function(){b.remaining--,b.onTick(),b.remaining||b.stop()},1e3)},stop:function(){this.remaining=this.frame,clearInterval(this.timer)}},g});