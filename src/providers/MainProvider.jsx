'use client';

import ReduxProvider from "@/redux/ReduxProvider";
import { AppWrapper } from "@/context/AppContext";

/**
 * MainProvider consolidates all global state and theme providers.
 * Add new providers (like ThemeProvider, QueryClient, etc.) here.
 */
export default function MainProvider({ children }) {
    return (
        <ReduxProvider>
            <AppWrapper>
                {children}
            </AppWrapper>
        </ReduxProvider>
    );
}
