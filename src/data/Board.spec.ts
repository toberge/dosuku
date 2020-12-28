import { EMPTY_BOARD, fromTiles, getNonzero, getSquare, isSolved, toTiles } from './Board';
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
            Array.from(getSquare(1, 0, board)).every((x) => x === 4)
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
    it('should not accept a board with dupes', () => {
        const board = _.cloneDeep(solvedBoard);
        board[0][0] = 1;
        board[8][8] = 2;
        expect(isSolved(board)).toBeFalsy();
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
    });
});

describe('toTiles', () => {
    it('should translate a Board to a TileBoard', () => {
        const board = _.cloneDeep(unsolvedBoard);
        const tiles = toTiles(board);
        expect(
            board.map((row, i) =>
                row.map(
                    (cell, j) =>
                        tiles[i][j].disabled === (cell !== 0) &&
                        tiles[i][j].numbers.length === (cell !== 0 ? 1 : 0)
                )
            )
        ).toBeTruthy();
    });
});

describe('toBoard', () => {
    it('should translate a Board to a TileBoard', () => {
        const board = _.cloneDeep(unsolvedBoard);
        const boardAgain = fromTiles(toTiles(board));
        expect(
            board.map((row, i) =>
                row.map((cell, j) => boardAgain[i][j] === cell)
            )
        ).toBeTruthy();
    });
});
