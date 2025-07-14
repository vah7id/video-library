import { VideoService } from '../src/services/videoService';
import { prisma } from '../src/lib/prisma';
import type { CreateVideoInput, Video } from '../src/types/video';

// Mock the Prisma client
jest.mock('../src/lib/prisma', () => ({
  prisma: {
    video: {
      create: jest.fn(),
    },
  },
}));

describe('VideoService - createVideo', () => {
  let videoService: VideoService;

  beforeEach(() => {
    videoService = new VideoService();
    jest.clearAllMocks();
  });

  it('should create a video with tags', async () => {
    const input: CreateVideoInput = {
      title: 'Test Video',
      tags: ['javascript', 'react'],
    };

    const mockCreatedVideo: Video = {
      id: '1',
      title: 'Test Video',
      thumbnailUrl: expect.any(String), //dynamic generated
      createdAt: new Date(),
      duration: expect.any(Number), //dynamic generated
      views: expect.any(Number), //dynamic generated
      tags: [
        { id: '1', name: 'javascript' },
        { id: '2', name: 'react' },
      ],
    };

    (prisma.video.create as jest.Mock).mockResolvedValue(mockCreatedVideo);

    const result = await videoService.createVideo(input);

    expect(prisma.video.create).toHaveBeenCalledWith({
      data: {
        title: 'Test Video',
        thumbnailUrl: expect.any(String),
        duration: expect.any(Number),
        views: expect.any(Number),
        tags: {
          connectOrCreate: [
            {
              where: { name: 'javascript' },
              create: { name: 'javascript' },
            },
            {
              where: { name: 'react' },
              create: { name: 'react' },
            },
          ],
        },
      },
      include: { tags: true },
    });
    expect(result).toEqual(mockCreatedVideo);
  });

  it('should handle database errors', async () => {
    const input: CreateVideoInput = {
      title: 'Test Video',
      tags: ['javascript', 'react', 'angular', 'vue'],
    };

    const error = new Error('Failed to create video');
    (prisma.video.create as jest.Mock).mockRejectedValue(error);

    await expect(videoService.createVideo(input)).rejects.toThrow('Failed to create video');
  });

  //TODO: add test for create video without tags

}); 