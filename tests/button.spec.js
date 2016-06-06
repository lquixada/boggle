var React = require('react');
var shallow = require('enzyme').shallow;
var sinon = require('sinon');
var expect = require('expect');
var Button = require('../components/button.js');

// Removes Connect wrapper
Button = Button.default.WrappedComponent;

describe('<Button />', function () {

  it('shows "start" when the game is stopped', function () {
    var component = shallow(<Button started={false} />);

    expect(component.find('button').text()).toEqual('start');
  });

  it('shows "stop" when the game has started', function () {
    var component = shallow(<Button started={true} />);

    expect(component.find('button').text()).toEqual('stop');
  });

});
