import { NextFunction, Request, Response } from "express";

export const Logger = async (req: Request, res: Response, next: NextFunction) => {
    const now: string = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, now);
    next();
}