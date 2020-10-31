import _ from 'lodash';

export type Board = number[][];

export const EMPTY_BOARD: Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const N = 9; // must be divisible by three
export const M = 3; // the box sizes

function* genRange(n: number) {
    for (let i = 1; i <= n; i++)
        yield i;
}

const nums = new Set(genRange(N));

/**
 * Get the numbers in column
 * @param i column index, from 0..M-1
 * @param board board to fetch from
 */
export function* getColumn(i: number, board: Board) {
    for (const row of board)
        yield row[i];
}

/**
 * Get the numbers in a MxM square
 * @param i column index, from 0..M-1
 * @param j row index, from 0..M-1
 * @param board board to fetch from
 */
export function* getSquare(i: number, j: number, board: Board) {
    for (let row = i * M; row < (i + 1) * M; row++) {
        for (let col = j * M; col < (j + 1) * M; col++) {
            yield board[row][col];
        }
    }
}

/**
 * Get all nonzero (that is, preset) values in a sudoku board
 * @param board the puzzle to fetch from
 * @return string with "i j" pair of coordinates
 *         (for use as a Set key)
 */
export function* getNonzero(board: Board) {
    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            if (board[i][j] !== 0)
                yield `${i} ${j}`;
}

/**
 * Check if all numbers from 1 to N are present in xs
 * @param xs numbers from a column/row/square
 */
export function hasAllNums(xs: number[]) {
    const foundNums = _.clone(nums);
    for (const x of xs)
        foundNums.delete(x);
    return foundNums.size === 0;
}

export function isSolved(board: Board) {
    // Rows
    for (const row of board) {
        // If there IS a difference, it is not solved
        // (there are either zeroes or duplicates)
        if (!hasAllNums(row)) return false;
    }

    // Columns
    for (let i = 0; i < N; i++) {
        // Again, check for a difference
        if (!hasAllNums(Array.from(getColumn(i, board)))) return false;
    }

    // Squares
    for (let i = 0; i < N / 3; i++) {
        for (let j = 0; j < N / 3; j++) {
            if (!hasAllNums(Array.from(getSquare(i, j, board)))) return false;
        }
    }
    return true;
}
