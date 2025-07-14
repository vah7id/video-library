'use client';

import { Typography, Input } from '@material-tailwind/react';
import { forwardRef } from 'react';
import { TextInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ label,
        placeholder,
        error,
        errorMessage,
        required,
        className,
        ...props
    }, ref) => {

        const displayLabel = required ? `${label} *` : label;

        return (
            <div className="space-y-2">
                <Input
                    {...props}
                    ref={ref}
                    variant='outlined'
                    placeholder={placeholder}
                    label={displayLabel}
                    error={!!error}
                    className={`rounded-lg ${className}`}
                />
                {error && errorMessage && (
                    <Typography
                        variant="small"
                        className="text-red-500 text-sm"
                    >
                        {errorMessage}
                    </Typography>
                )}
            </div>
        );
    }
);

TextInput.displayName = 'TextInput'; 