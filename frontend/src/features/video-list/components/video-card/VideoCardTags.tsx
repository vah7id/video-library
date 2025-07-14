import type { Tag } from '@/shared/types';
import { Chip } from '@material-tailwind/react';

interface VideoCardTagsProps {
    tags: Tag[];
}

export function VideoCardTags({ tags }: VideoCardTagsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Chip
                    key={tag.id}
                    size='sm'
                    variant='ghost'
                    value={tag.name}
                    data-testid={`video-card-tag-${tag.name}`}
                    className='mt-2'
                />
            ))}
        </div>
    );
} 