import express from 'express';
import { config } from './config';
import { setupMiddleware } from './middleware/setup';
import { setupRoutes } from './routes';
import { setupErrorHandling } from './middleware/errorSetup';

const app = express();

// Setup middleware
setupMiddleware(app);

// Setup routes
setupRoutes(app);

// Setup error handling
setupErrorHandling(app);

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
}); 