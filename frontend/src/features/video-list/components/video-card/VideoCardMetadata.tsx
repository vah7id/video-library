import { formatDate } from '@/shared/utils';
import { Typography } from '@material-tailwind/react';

interface VideoCardMetadataProps {
    createdAt: string;
    title: string;
}

export function VideoCardMetadata({ title, createdAt }: VideoCardMetadataProps) {
    return (
        <>
            <Typography
                variant="h6"
                data-testid="video-card-title">
                {title}
            </Typography>

            <Typography
                variant='small'
                data-testid={`video-card-metadata-date`}>
                {formatDate(createdAt)}
            </Typography>
        </>
    );
} 