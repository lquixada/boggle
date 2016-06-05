var React = require('react');
var shallow = require('enzyme').shallow;
var sinon = require('sinon');
var expect = require('expect');
var Button = require('../components/button.js');


describe('<Button />', function () {

  it('simulates click events', function () {
    var onButtonClick = sinon.spy();
    var wrapper = shallow(<Button started="true" onClick={onButtonClick} />);

    wrapper.find('button').simulate('click');

    expect(onButtonClick.calledOnce).toEqual(true);
  });

});
