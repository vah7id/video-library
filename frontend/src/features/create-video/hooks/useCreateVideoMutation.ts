import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createVideoApi } from '../api/createVideoApi';
import { videoKeys } from '../../video-list/hooks/useVideoQuery';
import type { CreateVideoFormData } from '../types';

export const useCreateVideo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateVideoFormData) => createVideoApi.createVideo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: videoKeys.list });
    },
  });
};
