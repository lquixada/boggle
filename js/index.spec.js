describe('Board', function () {
    'use strict';

    it('should respect the minimum length', function () {
        var board = new Board(dice);
        board.start();

        expect(board.check('ab')).toBeFalsy();
    });
});
