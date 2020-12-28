import React, { useContext, useEffect, useState } from 'react';
import {
    N,
    M,
    isSolved,
    EMPTY_BOARD,
    Tile,
    toTiles,
    fromTiles,
    NUMBERS,
    isFilled,
} from '../../data/Board';
import './BoardHolder.css';
import _ from 'lodash';
import { LanguageContext } from '../../contexts/Language';
import { Link, useParams } from 'react-router-dom';
import { puzzles, unsolvedBoard } from '../../data/SomeBoards';
import Modal, { Styles } from 'react-modal';
// @ts-ignore
import KeyboardEventHandler from 'react-keyboard-event-handler';

// THIS is important
Modal.setAppElement('#root');

const modalStyle: Styles = {
    content: {
        minWidth: '15em',
        width: '30em',
        height: '10em',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Setting class name...
function rowBorder(i: number) {
    return (
        (i % M === 2 && i < N - 1 ? 'border-bottom' : '') ||
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
    tile,
    onClick,
    selected,
}: {
    tile: Tile;
    onClick: () => void;
    selected: boolean;
}) {
    const { numbers } = tile;
    let inside;
    if (numbers.length > 4) {
        inside = (
            <div className="cell-grid-tiny">
                {tile.numbers.map((x) => (
                    <div key={x} className="cell-num-tiny">{x}</div>
                ))}
            </div>
        );
    } else if (numbers.length > 1) {
        inside = (
            <div className="cell-grid-small">
                {tile.numbers.map((x) => (
                    <div key={x} className="cell-num-small">{x}</div>
                ))}
            </div>
        );
    } else if (numbers.length > 0) {
        inside = numbers[0];
    } else {
        inside = '';
    }
    return (
        <button
            className={`cell-btn ${selected ? 'active' : ''}`}
            onClick={onClick}
            disabled={tile.disabled}
        >
            {inside}
        </button>
    );
}

export default function BoardHolder() {
    const { id } = useParams<{ id: string }>();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const [originalBoard, setOriginalBoard] = useState(EMPTY_BOARD); // set in useEffect
    const [board, setBoard] = useState(toTiles(EMPTY_BOARD)); // set in useEffect
    const [selectedTile, setSelectedTile] = useState<[number, number] | null>(
        null
    );
    const { dictionary } = useContext(LanguageContext);

    useEffect(() => {
        // Fetch the board by id
        if (puzzles[id])
            // Pick a random board of that difficulty/whatever
            setOriginalBoard(_.sample(puzzles[id]) || unsolvedBoard);
        else setOriginalBoard(unsolvedBoard);
    }, [id]);

    useEffect(() => {
        // Make sure to reset the board when anything has changed
        setBoard(toTiles(originalBoard));
    }, [originalBoard]);

    return (
        <KeyboardEventHandler
            handleKeys={['enter', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
            onKeyEvent={handleKeyPress}
        >
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i} className={rowBorder(i)}>
                            {row.map((cell, j) => (
                                <td key={j} className={colBorder(j)}>
                                    <Cell
                                        tile={cell}
                                        onClick={() => setSelectedTile([i, j])}
                                        selected={isSelected(i, j)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                {NUMBERS.map((num: number) => {
                    if (selectedTile) {
                        const tile = board[selectedTile[0]][selectedTile[1]];
                        return (
                            <button
                                className={`cell-btn ${
                                    tile.numbers.includes(num) ? ' active' : ''
                                }`}
                                onClick={() => toggleNumber(num)}
                                key={num}
                            >
                                {num}
                            </button>
                        );
                    } else {
                        return (
                            <button key={num} className="cell-btn" disabled>
                                {num}
                            </button>
                        );
                    }
                })}
            </p>
            <p>
                <Link to="/">
                    <button>{dictionary.goBack}</button>
                </Link>
                <button onClick={checkBoard}>
                    {dictionary.checkBoardButton}
                </button>
            </p>
            <Modal isOpen={modalIsOpen} style={modalStyle}>
                <p className={`message ${isError ? ' error' : ''}`}>
                    {message}
                </p>
                <p>
                    <button onClick={() => setModalIsOpen(false)}>Ok</button>
                </p>
            </Modal>
        </KeyboardEventHandler>
    );

    function handleKeyPress(key: string) {
        if (key === 'enter' && !modalIsOpen) {
            // No shortcut for closing the modal yet
            // (the key handler does not work when the modal is open)
            checkBoard();
        } else {
            toggleNumber(parseInt(key));
        }
    }

    function toggleNumber(x: number) {
        if (!selectedTile) return;
        const [i, j] = selectedTile;
        const { numbers } = board[i][j];
        const newBoard = _.clone(board);
        if (numbers.includes(x)) {
            newBoard[i][j].numbers = NUMBERS.filter(
                (y) => numbers.includes(y) && y !== x
            );
        } else {
            newBoard[i][j].numbers = NUMBERS.filter(
                (y) => numbers.includes(y) || y === x
            );
        }
        setBoard(newBoard);
    }

    function isSelected(i: number, j: number) {
        return (
            selectedTile !== null &&
            selectedTile[0] === i &&
            selectedTile[1] === j
        );
    }

    function openModal(message: string, error = true) {
        setMessage(message);
        setIsError(error);
        setModalIsOpen(true);
    }

    function checkBoard() {
        if (!isFilled(board)) {
            openModal(dictionary.notFilledMessage);
        } else if (isSolved(fromTiles(board))) {
            openModal(dictionary.winMessage, false);
        } else {
            openModal(dictionary.lossMessage);
        }
    }
}
