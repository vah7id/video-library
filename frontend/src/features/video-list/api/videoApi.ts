import { apiClient } from '@/lib/api';
import type { ApiResponse, Video } from '@/shared/types';

// Video API functions
export const videoApi = {
  getVideos: (): Promise<ApiResponse<Video[]>> => {
    return apiClient.get<ApiResponse<Video[]>>('/videos');
  },
}; 