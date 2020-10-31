import React from 'react';
import './App.css';
import BoardHolder from './components/BoardHolder';
import { unsolvedBoard } from './data/SomeBoards';
import { LanguageProvider } from './contexts/Language';
import LanguagePicker from './components/settings/LanguagePicker';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <LanguageProvider>
            <div className="App">
                <Header/>
                <main>
                    <BoardHolder originalBoard={unsolvedBoard}/>
                </main>
                <Footer/>
            </div>
        </LanguageProvider>
    );
}

export default App;
