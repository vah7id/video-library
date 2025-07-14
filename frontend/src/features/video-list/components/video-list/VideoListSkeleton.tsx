import { GridView } from '@/shared/ui';
import { SkeletonCard } from '@/shared/ui/SkeletonCard';

const SKELETON_COUNT = 15;

export function VideoListSkeleton() {
    return (
        <GridView className='mt-24'>
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </GridView>
    );
} 
