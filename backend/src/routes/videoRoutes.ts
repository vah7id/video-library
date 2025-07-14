import { Router } from 'express';
import { VideoController } from '../controllers/videoController';
import { validate } from '../middleware/validation';
import { CreateVideoSchema } from '../types/video';

const router = Router();
const videoController = new VideoController();

// GET /api/videos - Get all videos with pagination and filtering
router.get('/', videoController.getVideos.bind(videoController));

// POST /api/videos - Create new video
router.post('/', validate(CreateVideoSchema, 'body'), videoController.createVideo.bind(videoController));

// GET /api/videos/tags - Get all tags
router.get('/tags', videoController.getTags.bind(videoController));

export default router; 