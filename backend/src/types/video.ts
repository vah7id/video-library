import { z } from 'zod';
import { Tag } from './tag';

export const CreateVideoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')).optional().default([]),
});

export type CreateVideoInput = z.infer<typeof CreateVideoSchema>;


export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  createdAt: Date;
  duration: number;
  views: number;
  tags: Tag[];
} 
