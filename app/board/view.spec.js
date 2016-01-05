define(['app/board/view'], function(BoardView) {
  'use strict';

  beforeAll(function () {
     _.render = jasmine.createSpy('_render');
  });
  
  describe('BoardView', function () {
    var board;

    beforeEach(function () {
      board = new BoardView();
      // Mocking the matrix since it's random
      board.board.matrix = [
        ['O', 'S', 'O', 'K'],
        ['W', 'A', 'S', 'C'],
        ['L', 'I', 'V', 'C'],
        ['S', 'O', 'R', 'A']
      ];
    });

    it('should respect the minimum length (2)', function () {
      expect(board.check('o')).toBeFalsy();
    });

    it('should find word "socks"', function () {
      expect(board.check('socks')).toBeTruthy();
    });

    it('should find word "liv"', function () {
      expect(board.check('liv')).toBeTruthy();
    });

    it('should not find word "sucks"', function () {
      expect(board.check('sucks')).toBeFalsy();
    });

    it('should not find word "soils"', function () {
      expect(board.check('soils')).toBeFalsy();
    });

    it('should not find word "soar"', function () {
      expect(board.check('soar')).toBeFalsy();
    });

  });

});
