# Video Library Application

A full-stack video library application built with Next.js frontend and Node.js (Express) backend.

## Tech Stack

### Frontend

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Material-Tailwind](https://material-tailwind.com/) - React component library
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query) - Server state management
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant forms with validation
- **Form Components**: [React Select](https://react-select.com/) - Flexible select input component
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Notifications**: [Notistack](https://notistack.com/) - Snackbar notifications
- **Testing**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing utilities

### Backend

- **Runtime**: [Node.js](https://nodejs.org/) - JavaScript runtime
- **Framework**: [Express.js](https://expressjs.com/) - Web application framework
- **Security**: [Helmet](https://helmetjs.github.io/) - Security middleware for Express
- **Rate Limiting**: [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) - Basic rate-limiting middleware
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

### Database

- **Database**: [PostgreSQL](https://www.postgresql.org/) - Relational database
- **ORM**: [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript

## Prerequisites

- Node.js 18+
- npm 8+
- PostgreSQL database

## Quick Start

### 1. Install Dependencies

```bash
npm run install:all
```

This will install dependencies for the root project, frontend, and backend.

### 2. Environment Setup

Copy the environment example file:

```bash
cp backend/env.example backend/.env
```

Update `backend/.env` with your database connection details:

```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/video_library?schema=public"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 3. Database Setup

Create a PostgreSQL database named `video_library`, then run:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Start Development Servers

```bash
npm run dev
```

This starts both frontend and backend servers concurrently.

## Available Scripts

### Development

- `npm run dev` - Start both frontend and backend
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only

### Database

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:setup` - Setup database schema
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset and reseed database

### Testing

- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode

### Build

- `npm run build` - Build for production
- `npm run start` - Start production servers

## Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api
- **Prisma Studio**: http://localhost:5555 (when running `npm run db:studio`)

## Project Structure

```
├── frontend/          # Next.js frontend application
├── backend/           # Node.js backend API
```

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running
- Verify database credentials in `backend/.env`
- Check if database `video_library` exists

### Port Conflicts

- Frontend runs on port 3000
- Backend runs on port 3001
- Ensure these ports are available

### Dependencies Issues

If you encounter dependency issues, try:

```bash
npm run clean:install
```

This will clean all node_modules and reinstall everything.

## Future Improvements

### Architecture & Code Quality

- **Error Handling**: Implement centralized error handling with custom error classes and proper error codes
- **Logging**: Add structured logging with Winston or Pino for better debugging and monitoring
- **API Documentation**: Implement comprehensive API documentation using Swagger with interactive testing interface
- **Monorepo**: Implement monorepo with nx for better code organization and dependency management and move shared types to a shared package

### Testing & Quality Assurance

- **Test Coverage**: Increase test coverage to >80% with unit, integration, and E2E tests
- **Performance Testing**: Add load testing with tools like Artillery or k6
- **Security Testing**: Implement security scanning with tools like Snyk or OWASP ZAP

### Performance & Optimization

- **Caching Strategy**: Implement Redis caching for frequently accessed data
- **CDN Integration**: Set up CDN for static assets and media files

### Security Enhancements

- **Input Sanitization**: Enhance input sanitization and XSS protection
- **Security Headers**: Add comprehensive security headers with helmet configuration

### DevOps & Infrastructure

- **CI/CD Pipeline**: Set up comprehensive CI/CD with GitHub Actions including automated testing and deployment
- **Dockerization**: Create multi-stage Docker builds for optimized production images
- **Environment Management**: Implement proper environment variable management with validation
- **Monitoring**: Add application monitoring with tools like Sentry
- **Health Checks**: Implement comprehensive health check endpoints

### User Experience

- **Progressive Web App**: Convert to PWA with offline capabilities and app-like experience
- **Server Side Rendering**: Implement server side rendering for better SEO and performance

### Data Management

- **Pagination**: Implement proper pagination for large datasets to improve performance
- **Search Functionality**: Add full-text search 
