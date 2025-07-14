import { useCallback, useState, useMemo } from 'react';
import { useVideoQuery } from './useVideoQuery';
import { sortByDate } from '@/shared/utils';
import type { VideoListState, VideoListActions, SortOrder } from '../types';

const DEFAULT_SORT_ORDER: SortOrder = 'newest';

export const useVideoList = (): VideoListState & VideoListActions => {
  const { data: videos = [], isLoading, error } = useVideoQuery();
  const [sortOrder, setSortOrder] = useState<SortOrder>(DEFAULT_SORT_ORDER);

  const handleToggleSortOrder = useCallback(() => {
    setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest');
  }, []);

  const sortedVideos = useMemo(() => {
    return sortByDate(videos, 'createdAt', sortOrder);
  }, [videos, sortOrder]);

  return {
    videos: sortedVideos,
    loading: isLoading,
    error: error?.message || null,
    sortOrder,
    toggleSortOrder: handleToggleSortOrder,
  };
}; 
