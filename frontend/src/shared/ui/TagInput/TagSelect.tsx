'use client';

import Select from 'react-select';
import type { TagOption, TagSelectProps } from './types';
import { selectStyles } from './styles';

export function TagSelect({
    availableTags,
    selectedTags,
    onAddTag,
    placeholder
}: TagSelectProps) {

    const options: TagOption[] = availableTags
        .filter(tag => !selectedTags.includes(tag.name))
        .map(tag => ({ value: tag.name, label: tag.name }));

    const handleChange = (newValue: TagOption | null) => {
        if (newValue) onAddTag(newValue.value);
    };

    return (
        <Select
            isClearable
            isSearchable
            placeholder={placeholder}
            options={options}
            onChange={handleChange}
            noOptionsMessage={() => "No items found"}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={selectStyles}
        />
    );
} 