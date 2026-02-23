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

        // Global Image Appearance Animation (Zoom-in)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pg-img-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const revealImages = () => {
            document.querySelectorAll('img').forEach(img => {
                if (!img.classList.contains('pg-img-reveal')) {
                    img.classList.add('pg-img-reveal');
                    observer.observe(img);
                }
            });
        };

        revealImages();

        // Watch for dynamic content
        const mutationObserver = new MutationObserver(() => {
            revealImages();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
            <ReduxProvider>
                <AppWrapper>
                    {children}
                </AppWrapper>
            </ReduxProvider>
        </ThemeProvider>
    );
}
