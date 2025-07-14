import { Request, Response } from 'express';
import { VideoService } from '../services/videoService';

const videoService = new VideoService();

export class VideoController {
  async getVideos(_req: Request, res: Response) {
    try {
      const videos = await videoService.getVideos();
      
      res.json({
        success: true,
        data: videos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch videos',
      });
    }
  }

  async createVideo(req: Request, res: Response) {
    try {
      const data = req.body;
      const video = await videoService.createVideo(data);
      
      res.status(201).json({
        success: true,
        data: video,
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        message: 'Failed to create video',
      });
    }
  }

  async getTags(_req: Request, res: Response) {
    try {
      const tags = await videoService.getTags();
      
      res.json({
        success: true,
        data: tags,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch tags',
      });
    }
  }
} 