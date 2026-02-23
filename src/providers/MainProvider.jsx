'use client';

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import ReduxProvider from "@/redux/ReduxProvider";
import { AppWrapper } from "@/context/AppContext";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * MainProvider consolidates all global state and theme providers.
 * Add new providers (like ThemeProvider, QueryClient, etc.) here.
 */
export default function MainProvider({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            <ReduxProvider>
                <AppWrapper>
                    {children}
                </AppWrapper>
            </ReduxProvider>
        </ThemeProvider>
    );
}
