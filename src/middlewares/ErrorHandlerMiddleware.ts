import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

export const ErrorHandler = async (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    switch (err.statusCode) {
        case 400:
            res.status(err.statusCode).json({ message: 'Bad request data format' });
            break;
        case 401:
            res.status(err.statusCode).json({ message: 'Unauthorized' });
            break;
        case 403:
            res.status(err.statusCode).json({ message: 'Forbidden' });
            break;
        case 404:
            res.status(err.statusCode).json({ message: 'Not Found' });
            break;
        default:
            res.status(500).json({ message: 'Internal Server Error' });
            break;
    }
}