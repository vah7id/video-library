import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

interface VideoListErrorProps {
    error: string;
}

export function VideoListError({ error }: VideoListErrorProps) {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <Card>
            <CardBody className="flex justify-between items-center">
                <Typography variant="h4">
                    Something went wrong! Please try again later.
                </Typography>
                <Typography variant="small" className="text-red-500">
                    {error}
                </Typography>
                <Button
                    onClick={handleRetry}
                    variant="outlined"
                >
                    Try Again
                </Button>
            </CardBody>
        </Card>
    );
} 