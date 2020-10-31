import { EMPTY_BOARD, getSquare, isSolved } from './Board';
import { solvedBoard, unsolvedBoard } from './SomeBoards';

describe('getSquare', () => {
    it('should fetch the correct square', () => {
        const board = Array.from(EMPTY_BOARD);
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = 4;
            }
        }
        expect(
            Array.from(getSquare(1, 0, board)).every(x => x === 4)
        ).toBeTruthy();
    });
});

describe('isSolved', () => {
    it('should not accept an empty board', () => {
        expect(isSolved(EMPTY_BOARD)).toBeFalsy();
    });
    it('should accept a valid board', () => {
        expect(isSolved(solvedBoard)).toBeTruthy();
    });
    it('should NOT accept an unsolved board', () => {
        expect(isSolved(unsolvedBoard)).toBeFalsy();
    });
});
