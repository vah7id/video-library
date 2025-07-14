import { Button } from '@material-tailwind/react';
import type { SortOrder } from '../../types';

interface VideoSortProps {
    sortOrder: SortOrder;
    onSortOrderToggle: () => void;
}

export function VideoSort({ sortOrder, onSortOrderToggle }: VideoSortProps) {
    return (
        <div className="flex justify-end">
            <Button
                size='sm'
                variant="outlined"
                onClick={onSortOrderToggle}
            >
                Sort by Date {sortOrder === 'newest' ? '↓' : '↑'}
            </Button>
        </div>
    );
} 