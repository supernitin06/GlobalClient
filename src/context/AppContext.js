'use client';

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        theme: 'light',
        user: null,
    });

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', state.theme);
    }, [state.theme]);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppWrapper');
    }
    return context;
}
