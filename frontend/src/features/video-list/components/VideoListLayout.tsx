'use client';

import { memo } from 'react';
import { VideoSort } from './controls/VideoSort';
import { VideoListHeader } from './video-list/VideoListHeader';
import { VideoListError } from './video-list/VideoListError';
import { VideoListEmpty } from './video-list/VideoListEmpty';
import { VideoListSkeleton } from './video-list/VideoListSkeleton';
import { VideoList } from './video-list/VideoList';
import { useVideoList } from '../hooks/useVideoList';
import { Container } from '@/shared/ui/Container';
import { VideoListErrorBoundary } from './error-boundary/VideoListErrorBoundary';

const MemoizedVideoList = memo(VideoList);

export function VideoListLayout() {
    const { videos, loading, error, sortOrder, toggleSortOrder } = useVideoList();

    const renderContent = () => {
        if (error) return <VideoListError error={error} />;
        if (loading) return <VideoListSkeleton />;
        if (videos.length === 0) return <VideoListEmpty />;

        return (
            <>
                <VideoSort sortOrder={sortOrder} onSortOrderToggle={toggleSortOrder} />
                <MemoizedVideoList videos={videos} />
            </>
        );
    };

    return (
        <Container>
            <VideoListHeader />
            <VideoListErrorBoundary>
                {renderContent()}
            </VideoListErrorBoundary>
        </Container>
    );
} 