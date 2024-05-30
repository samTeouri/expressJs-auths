import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import { ErrorHandler } from './middlewares/ErrorHandlerMiddleware';
import { Logger } from './middlewares/LoggerMiddleware';

dotenv.config();

export const app: Application = express();

// Logger
app.use(Logger);

// Middleware for handling different HTTP errors
app.use(ErrorHandler);