import { Response } from 'express';

export default {
    serverError(message: string, res: Response, flag: string): Response {
        return res.status(500).json({
            success: false,
            flag,
            message,
        });
    },
    success(message: string, res: Response, data?: any): Response {
        return res.status(200).json({
            success: Boolean(data),
            message,
            result: data,
        });
    },
    emptyCollection(message: string, res: Response, flag: string): Response {
        return res.status(200).json({
            success: false,
            flag,
            message,
        });
    },
    error(message: string, res: Response, flag: string): Response {
        return res.status(500).json({
            success: false,
            flag,
            message,
        });
    },
    notFound(message: string, res: Response, flag: string): Response {
        return res.status(404).json({
            success: false,
            flag,
            message,
        });
    },
    badRequest(message: string, res: Response, flag: string): Response {
        return res.status(400).json({
            success: false,
            flag,
            message,
        });
    },
    unauthorized(message: string, res: Response, flag: string): Response {
        return res.status(401).json({
            success: false,
            flag,
            message,
        });
    },
    forbidden(message: string, res: Response, flag: string): Response {
        return res.status(403).json({
            success: false,
            flag,
            message,
        });
    },
    conflict(message: string, res: Response, flag: string): Response {
        return res.status(409).json({
            success: false,
            flag,
            message,
        });
    },
};
