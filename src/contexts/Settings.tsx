import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

export type Hints = 'none' | 'on check' | 'always';
export const HINT_ALTERNATIVES: Hints[] = ['none', 'on check', 'always'];

export const SettingsContext = createContext<{
    hints: Hints;
    setHints: (h: Hints) => void;
}>({
    hints: 'on check',
    setHints: () => { return; },
})

export function SettingsProvider({ children }: PropsWithChildren<{}>) {
    const [hints, setHints] = useState<Hints>('on check');

    useEffect(() => {
        const oldHintLevel = localStorage.getItem('hints');
        if (oldHintLevel && HINT_ALTERNATIVES.includes(oldHintLevel as Hints))
            setHints(oldHintLevel as Hints);
    }, [])

    useEffect(() => {
        localStorage.setItem('hints', hints);
    }, [hints]);

    const provider = {
        hints,
        setHints
    };

    return (
        <SettingsContext.Provider value={provider}>
            {children}
        </SettingsContext.Provider>
    )
}
