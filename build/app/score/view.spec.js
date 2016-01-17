define(['app/score/view'], function(ScoreView) {
  'use strict';

  describe('ScoreView', function () {
    var score;

    beforeEach(function () {
      score = new ScoreView();
      score.render = jasmine.createSpy('render');
    });

    it('should allow new attempts', function () {
      expect(score.check('new')).toBeTruthy();
    });

    it('should not allow duplicate attempts', function () {
      score.add({word: 'blah', scored: true});
      expect(score.check('blah')).toBeFalsy();
    });

    it('should increment counter if scored', function () {
      score.add({word: 'blah', scored: true});
      expect(score.counter).toBe(4);

      score.add({word: 'pow', scored: true});
      expect(score.counter).toBe(7);
    });

    it('should not increment counter if not scored', function () {
      score.add({word: 'blah', scored: false});
      expect(score.counter).toBe(0);
    });

  });

});
