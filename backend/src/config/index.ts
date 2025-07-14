export const config = {
  port: process.env['PORT'] || 3001,
  corsOrigin: process.env['CORS_ORIGIN'] || 'http://localhost:3000',
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
  }
}; 