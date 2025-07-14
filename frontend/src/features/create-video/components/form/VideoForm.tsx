'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, Typography } from '@material-tailwind/react';
import { VideoFormFields } from './VideoFormFields';
import { VideoFormActions } from './VideoFormActions';
import { VideoFormProps, CreateVideoFormData, CreateVideoSchema } from '../../types';

export function VideoForm({
    availableTags,
    isSubmitting,
    onSubmit,
    onCancel,
}: VideoFormProps) {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<CreateVideoFormData>({
        resolver: zodResolver(CreateVideoSchema),
        defaultValues: {
            title: '',
            tags: [],
        },
    });

    return (
        <Card className='p-8 max-w-2xl mx-auto'>
            <Typography variant="h2">Create New Video</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VideoFormFields
                    register={register}
                    errors={errors}
                    control={control}
                    availableTags={availableTags}
                />
                <VideoFormActions
                    isSubmitting={isSubmitting}
                    onCancel={onCancel}
                />
            </form>
        </Card>
    );
} 