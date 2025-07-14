import { useController, Control } from 'react-hook-form';
import type { CreateVideoFormData } from '../types';
import type { Tag } from '@/shared/types';

export function useTagSelection(
    control: Control<CreateVideoFormData>,
    availableTags: Tag[]
) {
    const {
        field: { value: selectedTags, onChange },
        fieldState: { error }
    } = useController({
        name: 'tags',
        control,
        defaultValue: []
    });

    const handleAddTag = (tag: string) => {
        if (!selectedTags.includes(tag)) {
            onChange([...selectedTags, tag]);
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        const updatedTags = selectedTags.filter(tag => tag !== tagToRemove);
        onChange(updatedTags);
    };

    return {
        selectedTags,
        handleAddTag,
        handleRemoveTag,
        error,
        availableTags
    };
} 
