import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

export const ErrorHandler = async (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    switch (err.statusCode) {
        case 400:
            return res.status(err.statusCode).json({ message: 'Bad request data format' });
        case 401:
            return res.status(err.statusCode).json({ message: 'Unauthorized' });
        case 403:
            return res.status(err.statusCode).json({ message: 'Forbidden' });
        case 404:
            return res.status(err.statusCode).json({ message: 'Not Found' });
        default:
            return res.status(500).json({ message: 'Internal Server Error' });
    }
}