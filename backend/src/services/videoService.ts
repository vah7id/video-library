import { prisma } from '../lib/prisma';
import type { CreateVideoInput, Video } from '../types/video';

export class VideoService {
  async getVideos(): Promise<Video[]> {
    return prisma.video.findMany({
      include: {
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createVideo(data: CreateVideoInput) {
    const { title, tags } = data;

    // Generate default values
    const thumbnailUrl = `https://picsum.photos/seed/${Date.now()}/300/200`;
    const duration = Math.floor(Math.random() * 600) + 60; // 1-10 minutes
    const views = Math.floor(Math.random() * 10000);

    return prisma.video.create({
      data: {
        title,
        thumbnailUrl,
        duration,
        views,
        tags: {
          connectOrCreate: tags.map(tagName => ({
            where: { name: tagName },
            create: { name: tagName },
          })),
        },
      },
      include: { tags: true },
    });
  }

  async getTags() {
    return prisma.tag.findMany({
      orderBy: { name: 'asc' },
    });
  }
} 