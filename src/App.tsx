import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BoardHolder from './components/game/BoardHolder';
import { LanguageProvider } from './contexts/Language';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';

function App() {
    return (
        <Router>
            <LanguageProvider>
                <div className="App">
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/">
                                <MainMenu/>
                            </Route>
                            <Route path="/board/:id">
                                <BoardHolder />
                            </Route>
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </LanguageProvider>
        </Router>
    );
}

export default App;
