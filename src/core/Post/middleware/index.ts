import { Request, Response, NextFunction } from 'express';
import response from '@/utils/response';
import { checkJwt, generateToken } from '@/utils/jwt';

export default class Middleware {
    public checkJwt(req: Request, res: Response, next: NextFunction): Response | void {
        const token: string = req.headers.authorization?.split(' ')[1] as string;
        let jwtPayload: string | object;
        try {
            jwtPayload = checkJwt(token);
            res.locals.jwtPayload = jwtPayload;
        } catch (error) {
            return response.unauthorized('Access Denied', res, '');
        }

        // const newToken = generateToken(jwtPayload);
        // res.setHeader('token', newToken);

        next();
    }
}
