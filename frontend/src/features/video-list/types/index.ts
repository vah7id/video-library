import type { Video } from '@/shared/types';
import type { SortOrder } from '@/shared/utils';

export type { SortOrder };

export interface VideoListState {
  videos: Video[];
  loading: boolean;
  error: string | null;
  sortOrder: SortOrder;
}

export interface VideoListActions {
  toggleSortOrder: () => void;
}

export interface VideoCardProps {
  video: Video;
} 