import React, { useContext } from 'react';
import LanguagePicker from './settings/LanguagePicker';
import { LanguageContext } from '../contexts/Language';

export default function Footer() {
    const { dictionary } = useContext(LanguageContext);

    return (
        <footer>
            <p>sudoku kudosu sukudo</p>
            <p>sudoku dokusu kusudo</p>
            <p>kudosu dosuku sukudo</p>
        </footer>
    );
}