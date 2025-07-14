'use client';

import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import type { ReactNode } from 'react';

interface SnackbarProviderProps {
    children: ReactNode;
}

export function SnackbarProvider({ children }: SnackbarProviderProps) {
    return (
        <NotistackSnackbarProvider
            maxSnack={3}
            autoHideDuration={5000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            preventDuplicate
        >
            {children}
        </NotistackSnackbarProvider>
    );
} 