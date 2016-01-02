describe('Board', function () {
    'use strict';

    beforeEach(function () {
      this.board = new Board(dice);
      // Mocking the matrix since it's random
      this.board.matrix = [
          ['O', 'T', 'T', 'S'],
          ['W', 'S', 'O', 'K'],
          ['H', 'T', 'V', 'C'],
          ['E', 'M', 'I', 'H']
      ];
    });

    it('should respect the minimum length', function () {
        expect(this.board.check('ab')).toBeFalsy();
    });

    it('should find word "socks"', function () {
        expect(this.board.check('socks')).toBeTruthy();
    });

    it('should not find word "sucks"', function () {
        expect(this.board.check('sucks')).toBeFalsy();
    });
});
