import React, { useContext } from 'react';
import LanguagePicker from './settings/LanguagePicker';
import { LanguageContext } from '../contexts/Language';

export default function Header() {
    const { dictionary } = useContext(LanguageContext);

    return (
        <header>
            <h1>dosuku</h1>
            {/*TODO: random permutation of su,do,ku*/}
            <h2>{dictionary.description}</h2>
            <p><LanguagePicker/></p>
        </header>
    );
}