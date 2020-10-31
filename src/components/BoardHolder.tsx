import React, { useState } from 'react';
import { N, M, isSolved } from '../data/Board';
import { unsolvedBoard } from '../data/SomeBoards';
import './BoardHolder.css';

// Setting class name...
function rowBorder(i: number) {
    return (i % M === 2 && i < N-1 ? 'border-bottom ' : '')
        || (i % M === 0 && i > 0 ? 'border-top' : '');
}

// Setting class name...
function colBorder(j: number) {
    return (j % M === 2 && j < N-1 ? 'border-right' : '')
        || (j % M === 0 && j > 0 ? 'border-left' : '');
}

export default function BoardHolder() {
    const [board, setBoard] = useState(unsolvedBoard);

    return (
        <>
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i} className={rowBorder(i)}>
                            {row.map((cell, j) => (
                                <td key={j} className={colBorder(j)}>
                                    <button onClick={() => changeCell(i, j)}>
                                        {cell}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={checkBoard}>Check</button>
            </p>
        </>
    );

    function changeCell(i: number, j: number) {
        let newBoard = Array.from(board);
        newBoard[i][j] = newBoard[i][j] % N + 1; // cycle through 1-9
        setBoard(newBoard);
    }

    function checkBoard() {
        if (isSolved(board)) {
            alert("Hooray!");
        } else {
            alert("Nay.");
        }
    }
}
