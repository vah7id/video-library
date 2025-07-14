import { VideoCard } from '../video-card/VideoCard';
import type { Video } from '@/shared/types';
import { GridView } from '@/shared/ui';

interface VideoListProps {
    videos: Video[];
}

export function VideoList({ videos }: VideoListProps) {
    return (
        <GridView className='mt-8'>
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </GridView>
    );
}
