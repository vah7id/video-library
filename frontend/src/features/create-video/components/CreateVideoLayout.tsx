'use client';

import { VideoForm } from './form/VideoForm';
import { useCreateVideoForm } from '../hooks/useCreateVideoForm';
import { LoadingSpinner } from '@/shared/ui';
import { Container } from '@/shared/ui/Container';

export function CreateVideoLayout() {
    const {
        availableTags,
        loading,
        isSubmitting,
        submitForm,
        onCancel,
    } = useCreateVideoForm();

    return (
        <Container>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <VideoForm
                    availableTags={availableTags}
                    isSubmitting={isSubmitting}
                    onSubmit={submitForm}
                    onCancel={onCancel}
                />
            )}
        </Container>
    );
} 