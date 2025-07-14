'use client';
import { Chip } from '@material-tailwind/react';
import type { TagListProps } from './types';

export function TagList({ selectedTags, onRemoveTag }: TagListProps) {
    if (selectedTags.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
                <Chip
                    key={tag}
                    onClose={() => onRemoveTag(tag)}
                    value={tag}
                    variant="outlined"
                />
            ))}
        </div>
    );
} 