import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../contexts/Language';
import { languageNames } from '../../data/Languages';

export default function LanguagePicker() {
    const { language, languageChange } = useContext(LanguageContext);

    useEffect(() => {
        let defaultLang = localStorage.getItem('language');
        if (!defaultLang) defaultLang = window.navigator.language.substr(0,2);
        languageChange(defaultLang);
    }, [languageChange]);

    return (
        <>
            <button onClick={() => languageChange('en')}>{languageNames.en}</button>
            <button onClick={() => languageChange('no')}>{languageNames.no}</button>
        </>
    )
}