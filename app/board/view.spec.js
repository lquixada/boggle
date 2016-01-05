define(['app/board/board'], function(Board) {

  describe('Board', function () {
    'use strict';

    beforeEach(function () {
      this.board = new Board();
      // Mocking the matrix since it's random
      this.board.matrix = [
        ['O', 'S', 'O', 'K'],
        ['W', 'A', 'S', 'C'],
        ['L', 'I', 'V', 'C'],
        ['S', 'O', 'R', 'A']
      ];
    });

    it('should respect the minimum length', function () {
      expect(this.board.check('or')).toBeFalsy();
    });

    it('should find word "socks"', function () {
      expect(this.board.check('socks')).toBeTruthy();
    });

    it('should find word "liv"', function () {
      expect(this.board.check('liv')).toBeTruthy();
    });

    it('should not find word "sucks"', function () {
      expect(this.board.check('sucks')).toBeFalsy();
    });

    it('should not find word "soils"', function () {
      expect(this.board.check('soils')).toBeFalsy();
    });

    it('should not find word "soar"', function () {
      expect(this.board.check('soar')).toBeFalsy();
    });
  });

});
