'use client';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { VideoListErrorFallback } from './VideoListErrorBoundaryFallback';

interface VideoListErrorBoundaryProps {
    children: React.ReactNode;
}

export function VideoListErrorBoundary({ children }: VideoListErrorBoundaryProps) {
    return (
        <ErrorBoundary
            fallback={<VideoListErrorFallback retry={() => window.location.reload()} />}
            onError={(error, errorInfo) => {
                // Log to external service in production
                if (process.env.NODE_ENV === 'production') {
                    // TODO: send this to error tracking service like sentry
                    console.error('VideoList Error:', error, errorInfo);
                }
            }}
        >
            {children}
        </ErrorBoundary>
    );
} 
