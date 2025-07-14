'use client';
import { Typography } from '@material-tailwind/react';
import type { TagInputProps } from './types';
import { TagSelect } from './TagSelect';
import { TagList } from './TagList';

export function TagInput({
    availableTags,
    selectedTags,
    onAddTag,
    onRemoveTag,
    placeholder,
    error
}: TagInputProps) {
    return (
        <div className="space-y-3">
            <TagSelect
                availableTags={availableTags}
                selectedTags={selectedTags}
                onAddTag={onAddTag}
                placeholder={placeholder}
            />
            <TagList
                selectedTags={selectedTags}
                onRemoveTag={onRemoveTag}
            />
            {error && (
                <Typography variant="small" className="text-red-600 text-sm mt-1">
                    {error}
                </Typography>
            )}
        </div>
    );
} 