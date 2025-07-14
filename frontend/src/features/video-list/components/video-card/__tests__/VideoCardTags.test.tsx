import { render, screen } from '@testing-library/react';
import { VideoCardTags } from '../VideoCardTags';
import type { Tag } from '@/shared/types';

// Mock Material Tailwind Chip component
jest.mock('@material-tailwind/react', () => ({
    Chip: ({ value, ...props }: any) => <span {...props}>{value}</span>,
}));

describe('VideoCardTags', () => {
    const mockTags: Tag[] = [
        { id: '1', name: 'nature' },
        { id: '2', name: 'game' },
        { id: '3', name: 'wedding' },
    ];

    it('should render all tags correctly', () => {
        render(<VideoCardTags tags={mockTags} />);

        expect(screen.getByText('nature')).toBeTruthy();
        expect(screen.getByText('game')).toBeTruthy();
        expect(screen.getByText('wedding')).toBeTruthy();
    });

    it('should render single tag correctly', () => {
        const singleTag: Tag[] = [{ id: '1', name: 'single-tag' }];
        render(<VideoCardTags tags={singleTag} />);

        expect(screen.getByText('single-tag')).toBeTruthy();
    });

}); 