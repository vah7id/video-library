import { VideoCardContent as VideoContent } from './VideoCardContent';
import type { Video } from '@/shared/types';
import { Card } from '@material-tailwind/react';

interface VideoCardProps {
    video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
    return (
        <Card data-testid={`video-card-${video.id}`}>
            <VideoContent video={video} />
        </Card>
    );
} 