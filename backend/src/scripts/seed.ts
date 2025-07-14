import { prisma } from '../lib/prisma';
import videosData from '../../data/videos.json';

async function seed() {
  console.log('Starting database seeding...');

  try {
    // Clear existing data
    await prisma.video.deleteMany();
    await prisma.tag.deleteMany();

    console.log('Cleared existing data');

    // Create tags first
    const allTags = new Set<string>();
    videosData.videos.forEach((video: any) => {
      video.tags.forEach((tag: string) => allTags.add(tag));
    });

    const tagMap = new Map<string, string>();
    for (const tagName of allTags) {
      const tag = await prisma.tag.create({
        data: { 
          name: tagName
        },
      });
      tagMap.set(tagName, tag.id);
    }

    console.log(`Created ${tagMap.size} tags`);

    // Create videos
    for (const videoData of videosData.videos) {
      await prisma.video.create({
        data: {
          id: videoData.id,
          title: videoData.title,
          thumbnailUrl: videoData.thumbnail_url,
          createdAt: new Date(videoData.created_at),
          duration: videoData.duration,
          views: videoData.views,
          tags: {
            connect: videoData.tags.map((tagName: string) => ({
              id: tagMap.get(tagName)!,
            })),
          },
        },
      });
    }

    console.log(`Created ${videosData.videos.length} videos`);
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed(); 