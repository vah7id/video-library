import { Express } from 'express';
import { errorHandler, notFound } from './errorHandler';

export const setupErrorHandling = (app: Express) => {
  // 404 handler
  app.use(notFound);

  // Error handler
  app.use(errorHandler);
}; 