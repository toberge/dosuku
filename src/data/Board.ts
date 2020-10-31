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

const genRange = (n: number) => {
    let xs: number[] = [];
    for (let i = 1; i <= n; i++) xs.push(i);
    return xs;
};

const nums = genRange(N);

export function* getColumn(i: number, board: Board) {
    for (const row of board) {
        yield row[i];
    }
}

export function* getSquare(i: number, j: number, board: Board) {
    for (let row = i * M; row < (i + 1) * M; row++) {
        for (let col = j * M; col < (j + 1) * M; col++) {
            yield board[row][col];
        }
    }
}

export function* getNonzero(board: Board) {
    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            if (board[i][j] !== 0)
                yield `${i} ${j}`;
}

export function hasAllNums(xs: number[]) {
    return xs.filter(x => !nums.includes(x)).length === 0;
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
