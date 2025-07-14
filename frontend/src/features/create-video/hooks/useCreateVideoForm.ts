'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useCreateVideo } from './useCreateVideoMutation';
import type { CreateVideoFormData } from '../types';
import type { CreateVideoState, CreateVideoActions } from '../types';
import { useAvailableTags } from './useAvailableTags';

export const useCreateVideoForm = (): CreateVideoState & CreateVideoActions => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const createVideoMutation = useCreateVideo();
  const { data: availableTags = [], isLoading: tagsLoading } = useAvailableTags();

  const submitForm = useCallback(async (data: CreateVideoFormData) => {
    try {
      // data sanitization
      await createVideoMutation.mutateAsync({
        title: data.title.trim(),
        tags: data.tags.filter(tag => tag.trim()),
      });
      
      enqueueSnackbar('Video created successfully!', {
        variant: 'success',
      });
      
      // Navigate back to video list
      router.push('/');

    } catch (err) {
      enqueueSnackbar('Failed to create video. Please try again.', {
        variant: 'error',
      });
    }
  }, [createVideoMutation, router, enqueueSnackbar]);

  const handleCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
    availableTags,
    loading: tagsLoading,
    error: createVideoMutation.error?.message || null,
    isSubmitting: createVideoMutation.isPending,
    submitForm,
    onCancel: handleCancel,
  };
}; 