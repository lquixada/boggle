define(['underscore', 'app/timer/view'], function(_, TimerView) {
  'use strict';

  describe('TimerView', function () {
    var timer;

    beforeEach(function() {
      timer = new TimerView();
      timer.render = jasmine.createSpy('render');
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should do a countdown', function () {
      timer.start();

      jasmine.clock().tick(3000);
      expect(timer.timer.remaining).toBe(57);
    });

    it('should do a countdown', function () {
      var spy = jasmine.createSpy('spy');

      timer.start({
        onStop: function () {
          spy();
        }
      });

      jasmine.clock().tick(59000);

      expect(spy).not.toHaveBeenCalled();

      jasmine.clock().tick(60000);

      expect(spy).toHaveBeenCalled();
    });

  });

});
