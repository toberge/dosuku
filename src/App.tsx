import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BoardHolder from './components/game/BoardHolder';
import { LanguageProvider } from './contexts/Language';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import { SettingsProvider } from './contexts/Settings';
import { SettingsMenu } from './components/settings/SettingsMenu';

function App() {
    return (
        <Router>
            <SettingsProvider>
                <LanguageProvider>
                    <div className="App">
                        <Header />
                        <main>
                            <Switch>
                                <Route exact path="/">
                                    <MainMenu />
                                </Route>
                                <Route exact path="/settings">
                                    <SettingsMenu />
                                </Route>
                                <Route path="/board/:id">
                                    <BoardHolder />
                                </Route>
                                <Route>
                                    <h2>404 Not Found</h2>
                                </Route>
                            </Switch>
                        </main>
                        <Footer />
                    </div>
                </LanguageProvider>
            </SettingsProvider>
        </Router>
    );
}

export default App;
