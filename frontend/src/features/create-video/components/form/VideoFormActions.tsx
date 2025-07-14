import { Button } from '@material-tailwind/react';

interface VideoFormActionsProps {
    isSubmitting: boolean;
    onCancel: () => void;
}

export function VideoFormActions({ isSubmitting, onCancel }: VideoFormActionsProps) {
    return (
        <div className="flex gap-4 pt-8">
            <Button
                type="button"
                variant="outlined"
                onClick={onCancel}
                disabled={isSubmitting}
                className="flex-1"
            >
                Cancel
            </Button>
            <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="flex-1"
            >
                Create Video
            </Button>
        </div>
    );
} 