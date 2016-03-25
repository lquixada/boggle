define([
  'react',
  'react-dom',
  'enzyme',
  'sinon',
  'expect',
  './view.jsx'
], function (React, ReactDOM, enzyme, sinon, expect, Button) {
  var shallow = enzyme.shallow;

  describe('<Button />', function () {

    it('simulates click events', function () {
      var onButtonClick = sinon.spy();
      var wrapper = shallow(<Button started="true" onClick={onButtonClick} />);

      wrapper.find('button').simulate('click');

      expect(onButtonClick.calledOnce).toEqual(true);
    });

  });

});
