import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

type ValidationTarget = 'body' | 'query' | 'params';
type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void | Response>;

export const validate = (schema: AnyZodObject, target: ValidationTarget): ValidationMiddleware => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataToValidate = req[target] || {};
      req[target] = await schema.parseAsync(dataToValidate);
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      console.error('Validation middleware error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
}; 