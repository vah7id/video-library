'use client';
import type { ReactNode } from 'react';
import { QueryProvider } from '@/providers/QueryProvider';
import { SnackbarProvider } from '@/providers/SnackbarProvider';
import { ThemeProvider } from '@material-tailwind/react';

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider>
            <QueryProvider>
                <SnackbarProvider>
                    {children}
                </SnackbarProvider>
            </QueryProvider>
        </ThemeProvider>
    );
} 