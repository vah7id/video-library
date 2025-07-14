import type { Tag } from '@/shared/types';
import { z } from 'zod';

// Form validation schema
export const CreateVideoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')).optional().default([]),
});

export interface CreateVideoFormData {
  title: string;
  tags: string[];
}

export interface CreateVideoState {
  availableTags: Tag[];
  loading: boolean;
  error: string | null;
  isSubmitting: boolean;
}

export interface CreateVideoActions {
  submitForm: (data: CreateVideoFormData) => void;
  onCancel: () => void;
}

export interface VideoFormProps {
  availableTags: Tag[];
  isSubmitting: boolean;
  onSubmit: (data: CreateVideoFormData) => void;
  onCancel: () => void;
}

// Re-export Tag type for convenience
export type { Tag }; 