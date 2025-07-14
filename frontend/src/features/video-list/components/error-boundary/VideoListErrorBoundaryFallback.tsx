'use client';
import { Button, Card, Typography } from '@material-tailwind/react';

export interface VideoListErrorFallbackProps {
    error?: Error;
    retry: () => void;
}

export function VideoListErrorFallback({ error, retry }: VideoListErrorFallbackProps) {
    return (
        <Card className="p-6 text-center">
            <div className="mb-4">
                <Typography variant="h3" className="mb-2">
                    Unable to load videos
                </Typography>
                <Typography variant="paragraph" className="mb-4">
                    We encountered an error while loading your videos. This might be a temporary issue.
                </Typography>
                {process.env.NODE_ENV === 'development' && error && (
                    <details className="mb-4 text-left">
                        <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                            Error Details (Development)
                        </summary>
                        <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                            {error.stack}
                        </pre>
                    </details>
                )}
            </div>
            <Button onClick={retry} className='w-48 mx-auto'>
                Reload Videos
            </Button>
        </Card>
    );
}