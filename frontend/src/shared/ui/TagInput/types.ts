export interface Tag {
    id: string;
    name: string;
}

export interface TagOption {
    value: string;
    label: string;
}

export interface TagSelectProps {
    availableTags: Tag[];
    selectedTags: string[];
    onAddTag: (tag: string) => void;
    placeholder?: string;
}

export interface TagInputProps {
    availableTags: Tag[];
    selectedTags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tag: string) => void;
    placeholder?: string;
    error?: string;
} 

export interface TagListProps {
    selectedTags: string[];
    onRemoveTag: (tag: string) => void;
}
