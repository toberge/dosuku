import React, { useContext, useEffect, useState } from 'react';
import { N, M, isSolved, getNonzero, Board, EMPTY_BOARD } from '../../data/Board';
import './BoardHolder.css';
import _ from 'lodash';
import { LanguageContext } from '../../contexts/Language';

// Setting class name...
function rowBorder(i: number) {
    return (
        (i % M === 2 && i < N - 1 ? 'border-bottom ' : '') ||
        (i % M === 0 && i > 0 ? 'border-top' : '')
    );
}

// Setting class name...
function colBorder(j: number) {
    return (
        (j % M === 2 && j < N - 1 ? 'border-right' : '') ||
        (j % M === 0 && j > 0 ? 'border-left' : '')
    );
}

function Cell({
    value,
    onClick,
    disabled
}: {
    value: number;
    onClick: () => void;
    disabled: boolean;
}) {
    // Note: This component can hold independent state
    return (
        <button onClick={onClick} disabled={disabled}>
            {value || '-'}
        </button>
    );
}

export default function BoardHolder({
    originalBoard
}: {
    originalBoard: Board;
}) {
    const [board, setBoard] = useState(EMPTY_BOARD); // set in useEffect
    const [blocked, setBlocked] = useState(new Set());
    const { dictionary } = useContext(LanguageContext);

    useEffect(() => {
        // TODO: there should be a better way to do this...
        setBlocked(new Set(getNonzero(originalBoard)));
        // Make sure to reset the board when anything has changed
        setBoard(_.cloneDeep(originalBoard));
    }, [originalBoard]);

    return (
        <>
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i} className={rowBorder(i)}>
                            {row.map((cell, j) => (
                                <td key={j} className={colBorder(j)}>
                                    <Cell
                                        value={cell}
                                        onClick={() => changeCell(i, j)}
                                        disabled={blocked.has(`${i} ${j}`)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={checkBoard}>{dictionary.checkBoardButton}</button>
            </p>
        </>
    );

    function changeCell(i: number, j: number) {
        let newBoard = Array.from(board);
        newBoard[i][j] = (newBoard[i][j] % N) + 1; // cycle through 1-9
        setBoard(newBoard);
    }

    function checkBoard() {
        if (isSolved(board)) {
            alert('Hooray!');
        } else {
            alert('Nay.');
        }
    }
}
