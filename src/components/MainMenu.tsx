import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguagePicker from './settings/LanguagePicker';
import { LanguageContext } from '../contexts/Language';

export default function MainMenu() {
    const { dictionary } = useContext(LanguageContext);

    return (
        <>
            <p>
                <Link to="/board/easy">
                    <button>{dictionary.difficultyEasy}</button>
                </Link>
            </p>
            <p>
                <Link to="/board/medium">
                    <button>{dictionary.difficultyMedium}</button>
                </Link>
            </p>
            <p>
                <Link to="/board/hard">
                    <button>{dictionary.difficultyHard}</button>
                </Link>
            </p>
            <p>
                <LanguagePicker />
            </p>
        </>
    );
}
