import { Typography } from "@material-tailwind/react";

export function VideoListEmpty() {
    return (
        <div className="text-center py-12">
            <Typography variant="h3">No videos found</Typography>
            <Typography variant="paragraph">
                Create your first video to get started
            </Typography>
        </div>
    );
} 