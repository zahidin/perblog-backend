import { Request, Response, NextFunction } from 'express';
import response from '@/utils/response';
import { checkJwt, generateToken } from '@/utils/jwt';
import { User } from '@/types/user';

export default class Middleware {
    public checkJwt(req: Request, res: Response, next: NextFunction): Response | void {
        const token: string = req.headers.authorization?.split(' ')[1] as string;
        try {
            const jwtPayload: User = checkJwt(token);
            res.locals.jwtPayload = jwtPayload;
        } catch (error) {
            return response.unauthorized('Access Denied', res, '');
        }

        // const newToken = generateToken(jwtPayload);
        // res.setHeader('token', newToken);

        next();
    }
}
