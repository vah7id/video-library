'use client';

import React, { Component } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        if (process.env.NODE_ENV === 'development') {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        }

        this.props.onError?.(error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <Card className="p-6 text-center">
                    <div className="mb-4">
                        <Typography variant="h5" className="mb-2">
                            Something went wrong
                        </Typography>
                        <Typography variant="small" className="text-gray-600 mb-4">
                            We encountered an unexpected error. Please try again.
                        </Typography>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-4 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                                    Error Details (Development)
                                </summary>
                                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                                    {this.state.error.stack}
                                </pre>
                            </details>
                        )}
                    </div>
                    <Button onClick={this.handleRetry} variant="filled" color="blue">
                        Try Again
                    </Button>
                </Card>
            );
        }

        return this.props.children;
    }
} 