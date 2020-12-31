import _ from 'lodash';

export type Board = number[][];

export type Tile = {
    numbers: number[];
    disabled: boolean;
    wrong: boolean;
};

export type TileBoard = Tile[][];

export function fromTiles(tiles: TileBoard): Board {
    return tiles.map((row) =>
        row.map((tile) => (tile.numbers.length === 1 ? tile.numbers[0] : 0))
    );
}

export function toTiles(board: Board): TileBoard {
    return board.map((row) =>
        row.map((number) => ({
            numbers: number !== 0 ? [number] : [],
            disabled: number !== 0,
            wrong: false
        }))
    );
}

export const isFilled = (board: TileBoard) =>
    board.reduce(
        (acc, row) =>
            acc &&
            row.reduce((acc, tile) => acc && tile.numbers.length === 1, true),
        true
    );

export const EMPTY_BOARD: Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const N = 9; // must be divisible by three
export const M = 3; // the box sizes

function* genRange(n: number) {
    for (let i = 1; i <= n; i++) yield i;
}

const nums = new Set(genRange(N));

export const NUMBERS = Array.from(genRange(N));

/**
 * Get the numbers in column
 * @param i column index, from 0..M-1
 * @param board board to fetch from
 */
export function* getColumn(i: number, board: Board) {
    for (const row of board) yield row[i];
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
        for (let j = 0; j < N; j++) if (board[i][j] !== 0) yield `${i} ${j}`;
}

/**
 * Check if all numbers from 1 to N are present in xs
 * @param xs numbers from a column/row/square
 */
export function hasAllNums(xs: number[]) {
    const foundNums = _.clone(nums);
    for (const x of xs) foundNums.delete(x);
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

/**
 * Finds errors (duplicate numbers in col/row/square)
 * and reports their positions.
 *
 * @param board Board to inspect
 * @return Positions of errors
 */
export function findErrors(board: Board): [number, number][] {
    const errors: [number, number][] = [];
    // TODO: CLEAN THIS MESS UP!
    //       Yes, it *is* fast enough, but it is way more verbose than it needs to be
    //       - and creating a set of positions is not necessary for marking them!

    // Rows
    board.forEach((row, i) => {
        const found: Map<number, [number, number][]> = new Map<number, [number, number][]>();
        row.forEach((x, j) => {
            if (x === 0) return;
            if (!found.has(x)) {
                found.set(x, []);
            }
            // @ts-ignore
            found.get(x).push([i, j])
        })
        errors.push(...Array.from(found.values()).filter((xs) => xs.length > 1).flat());
    })

    // Columns
    board.forEach((_, j) => {
        const found: Map<number, [number, number][]> = new Map<number, [number, number][]>();
        Array.from(getColumn(j, board)).forEach((x, i) => {
            if (x === 0) return;
            if (!found.has(x)) {
                found.set(x, []);
            }
            // @ts-ignore
            found.get(x).push([i, j])
        })
        errors.push(...Array.from(found.values()).filter((xs) => xs.length > 1).flat());
    })

    // Boxes
    for (let i = 0; i < N / 3; i++) {
        for (let j = 0; j < N / 3; j++) {
            const found: Map<number, [number, number][]> = new Map<number, [number, number][]>();
            Array.from(getSquare(i, j, board)).forEach((x, k) => {
                if (x === 0) return;
                if (!found.has(x)) {
                    found.set(x, []);
                }
                // @ts-ignore
                found.get(x).push([i*M+(Math.floor(k/M)), j*M+(k%M)])
            })
            errors.push(...Array.from(found.values()).filter((xs) => xs.length > 1).flat());
        }
    }

    // filter unique...
    return Array.from(new Set(errors).values());
}

/**
 * Marks errors (duplicates) on a TileBoard
 * (consider combining this with the findErrors function)
 *
 * @param board TileBoard to mark
 * @return New board with errors properly marked
 */
export function markErrors(board: TileBoard) {
    const errors = findErrors(fromTiles(board));
    const newBoard = board.map(row => row.map(tile => ({...tile, wrong: false})));
    errors.forEach(([i, j]) => {
        if (!newBoard[i][j].disabled)
            newBoard[i][j].wrong = true;
    })
    return newBoard;
}
