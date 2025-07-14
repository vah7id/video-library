import type { Video } from '@/shared/types';
import { VideoCardMetadata as VideoMetadata } from './VideoCardMetadata';
import { VideoCardTags as VideoTags } from './VideoCardTags';
import { CardBody } from '@material-tailwind/react';

interface VideoCardContentProps {
    video: Video;
}

export function VideoCardContent({ video }: VideoCardContentProps) {
    return (
        <CardBody className='hover:opacity-80 cursor-pointer'>
            <VideoMetadata title={video.title} createdAt={video.createdAt} />
            <VideoTags tags={video.tags} />
        </CardBody>
    );
} 