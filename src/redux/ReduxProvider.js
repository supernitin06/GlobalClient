'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';

/**
 * ReduxProvider is a client-side component that wraps its children with the Redux Store provider.
 * Since Next.js App Router uses Server Components by default, we need this wrapper
 * to provide the Redux state to client-side components.
 */
export default function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
