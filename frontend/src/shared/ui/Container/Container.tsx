'use client';

import { forwardRef } from 'react';
import { ContainerProps } from './types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({
        className,
        children,
        ...props
    }, ref) => {
        return (
            <div
                ref={ref}
                className={`min-h-screen bg-gray-50 py-8 ${className || ''}`}
                {...props}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        );
    }
);

Container.displayName = 'Container'; 