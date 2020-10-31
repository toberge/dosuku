import { EMPTY_BOARD, getNonzero, getSquare, isSolved } from './Board';
import { solvedBoard, unsolvedBoard } from './SomeBoards';
import _ from 'lodash';

describe('getSquare', () => {
    it('should fetch the correct square', () => {
        const board = _.cloneDeep(EMPTY_BOARD);
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

describe('getNonzero', () => {
    it('should return the correct number of nonzero values', () => {
        const board = _.cloneDeep(EMPTY_BOARD);
        board[2][3] = 4;
        board[3][3] = 4;
        board[6][8] = 4;
        board[7][5] = 4;
        expect(Array.from(getNonzero(board)).length).toBe(4);
    })
});
