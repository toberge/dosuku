import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/Language';
import { SettingsContext, HINT_ALTERNATIVES, Hints } from '../../contexts/Settings';
import './SettingsMenu.css'

export function SettingsMenu() {
    const { dictionary } = useContext(LanguageContext);
    const { hints, setHints } = useContext(SettingsContext);

    return (
        <>
            <h2>
                {dictionary.settings}
            </h2>
            <h3>
                {dictionary.hintsLabel}
            </h3>
            <p className="btn-row">
                {HINT_ALTERNATIVES.map(h => (
                    <button className={hints === h ? 'active' : ''} onClick={() => setHints(h)}>
                        {dictionary[`hints: ${h}`] || '???'}
                    </button>
                ))}
            </p>
            <p>
                <Link to="/">
                    <button className="btn-wide">{dictionary.goBack}</button>
                </Link>
            </p>
        </>
    );
}
