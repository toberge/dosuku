import React, { useState } from 'react';
import { N, EMPTY_BOARD, isSolved } from '../data/Board';
import { unsolvedBoard } from '../data/SomeBoards';

export default function() {
    const [board, setBoard] = useState(unsolvedBoard);

    return (
        <>
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>
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
