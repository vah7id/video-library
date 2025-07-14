import { Express } from 'express';
import videoRoutes from './videoRoutes';

// Health check handler
const healthCheck = (_req: any, res: any) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
};

export const setupRoutes = (app: Express) => {
  // Routes
  app.use('/api/videos', videoRoutes);

  // Health check
  app.get('/health', healthCheck);
}; 