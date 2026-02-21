'use client';

import { useAppContext } from '@/context/AppContext';

export default function WelcomeComponent() {
    const { state } = useAppContext();

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-zinc-800">
            <div className="flex-shrink-0">
                <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <div>
                <div className="text-xl font-medium text-black dark:text-white">Next.js + Redux</div>
                <p className="text-zinc-500 dark:text-zinc-400">Context Theme: {state.theme}</p>
            </div>
        </div>
    );
}
