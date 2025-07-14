'use client';

import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import { TagInput, TextInput } from '@/shared/ui';
import { useTagSelection } from '../../hooks/useTagSelection';
import type { CreateVideoFormData } from '../../types';
import type { Tag } from '@/shared/types';

interface VideoFormFieldsProps {
    register: UseFormRegister<CreateVideoFormData>;
    errors: FieldErrors<CreateVideoFormData>;
    control: Control<CreateVideoFormData>;
    availableTags: Tag[];
}

export function VideoFormFields({
    register,
    errors,
    control,
    availableTags,
}: VideoFormFieldsProps) {
    const {
        selectedTags,
        handleAddTag,
        handleRemoveTag,
        error: tagError,
    } = useTagSelection(control, availableTags);

    return (
        <div className="space-y-6 pt-8">
            <TextInput
                {...register('title')}
                label="Title"
                placeholder="Enter video title"
                error={!!errors.title?.message}
                errorMessage={errors.title?.message}
                required
            />
            <TagInput
                placeholder="Select tags..."
                availableTags={availableTags}
                selectedTags={selectedTags}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
                error={tagError?.message}
            />
        </div>
    );
} 