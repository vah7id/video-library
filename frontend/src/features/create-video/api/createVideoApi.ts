import { apiClient } from '@/lib/api';
import type { ApiResponse, Video, Tag } from '@/shared/types';
import type { CreateVideoFormData } from '../types';

// Create Video API functions
export const createVideoApi = {
  createVideo: (data: CreateVideoFormData): Promise<ApiResponse<Video>> => {
    return apiClient.post<ApiResponse<Video>>('/videos', data);
  },

  getTags: (): Promise<ApiResponse<Tag[]>> => {
    return apiClient.get<ApiResponse<Tag[]>>('/videos/tags');
  },
}; 