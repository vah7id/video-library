import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/providers/Providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Video Library',
    description: 'A modern video library application',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-50 min-h-screen">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
} 