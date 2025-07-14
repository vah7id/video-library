import { render, screen } from '@testing-library/react';
import { VideoCard } from '../VideoCard';
import type { Video } from '../../../../../shared/types';

// Mock Material Tailwind components
jest.mock('@material-tailwind/react', () => ({
    Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    CardBody: ({ children }: any) => <div>{children}</div>,
    Typography: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    Chip: ({ children, value, ...props }: any) => <span {...props}>{value || children}</span>,
}));


describe('VideoCard', () => {
    const mockVideo: Video = {
        id: '1',
        title: 'Amazing Video Keywords',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        createdAt: '2024-01-01T00:00:00Z',
        duration: 300,
        views: 1500,
        tags: [
            { id: '1', name: 'video' },
            { id: '2', name: 'keywords' },
        ],
    };

    it('should render video card with all components', () => {
        render(<VideoCard video={mockVideo} />);

        expect(screen.getByTestId('video-card-1')).toBeTruthy();
        expect(screen.getByTestId('video-card-title')).toBeTruthy();
        expect(screen.getByTestId('video-card-metadata-date')).toBeTruthy();
        expect(screen.getByTestId(`video-card-tag-${mockVideo.tags[0].name}`)).toBeTruthy();
        expect(screen.getByTestId(`video-card-tag-${mockVideo.tags[1].name}`)).toBeTruthy();
    });

    it('should display video information correctly', () => {
        render(<VideoCard video={mockVideo} />);

        expect(screen.getByTestId('video-card-title').textContent).toBe('Amazing Video Keywords');
        expect(screen.getByTestId('video-card-metadata-date').textContent).toBe('Jan 1, 2024');
        expect(screen.getByTestId(`video-card-tag-${mockVideo.tags[0].name}`).textContent).toBe(mockVideo.tags[0].name);
        expect(screen.getByTestId(`video-card-tag-${mockVideo.tags[1].name}`).textContent).toBe(mockVideo.tags[1].name);
    });

    it('should handle video with no tags', () => {
        const videoWithoutTags: Video = {
            ...mockVideo,
            tags: [],
        };

        render(<VideoCard video={videoWithoutTags} />);

        expect(screen.getByText('Amazing Video Keywords')).toBeTruthy();
        expect(screen.getByTestId('video-card-title')).toBeTruthy();
    });
}); 