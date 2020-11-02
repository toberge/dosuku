import React, { createContext, PropsWithChildren, useState } from 'react';
import { dictionaries, languageNames } from '../data/Languages';


export const LanguageContext = createContext({
    language: 'en',
    dictionary: dictionaries.en,
    languageChange: (id: string) => { return; } // TODO: what is the common way to do this?
});

export function LanguageProvider({ children }: PropsWithChildren<{}>) {
    const [language, setLanguage] = useState('en');

    const provider = {
        language,
        dictionary: dictionaries[language],
        languageChange: (id: string) => {
            const newLanguage = id in languageNames ? id : 'en';
            setLanguage(newLanguage);
            localStorage.setItem('language', newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}