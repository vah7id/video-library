import { useQuery } from '@tanstack/react-query';
import { videoApi } from '../api/videoApi';

// Query keys
export const videoKeys = {
  list: ['videos', 'list'] as const,
};

// Queries
export const useVideoQuery = () => {
  return useQuery({
    queryKey: videoKeys.list,
    queryFn: () => videoApi.getVideos(),
    select: (response) => response.data,
  });
}; 