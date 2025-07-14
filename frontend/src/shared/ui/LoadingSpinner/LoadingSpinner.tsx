'use client';

import { Spinner, Typography } from "@material-tailwind/react";
import type { LoadingSpinnerProps } from './types';

export function LoadingSpinner({ message = "Loading...", className = "" }: LoadingSpinnerProps) {
    return (
        <div className={`flex justify-center gap-8 flex-col items-center ${className}`}>
            <Spinner />
            <Typography variant="paragraph">{message}</Typography>
        </div>
    );
} 