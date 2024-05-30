import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import { ErrorHandler } from './middlewares/ErrorHandlerMiddleware';

dotenv.config();

export const app: Application = express();

// Middleware for handling different HTTP errors
app.use(ErrorHandler);