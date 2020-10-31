import React from 'react';
import './App.css';
import BoardHolder from './components/BoardHolder';
import { unsolvedBoard } from './data/SomeBoards';

function App() {
    return (
        <div className="App">
            <header>
                <h1>dosuku</h1>
                {/*TODO: random permutation of su,do,ku*/}
            </header>
            <main>
                <BoardHolder originalBoard={unsolvedBoard}/>
            </main>
            <footer>
                <p>sudoku kudosu sukudo</p>
                <p>sudoku dokusu kusudo</p>
                <p>kudosu dosuku sukudo</p>
            </footer>
        </div>
    );
}

export default App;
