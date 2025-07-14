
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";

export function VideoListHeader() {
    return (
        <div className="mb-8 flex justify-between items-center">
            <div>
                <Typography variant="h3">Video Library</Typography>
                <Typography variant="paragraph">
                    Browse and manage your video collection
                </Typography>
            </div>
            <Link href="/create-video">
                <Button variant="filled" size="md">
                    Create Video
                </Button>
            </Link>
        </div>
    );
} 