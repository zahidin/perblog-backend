import { authService } from '@/core/Auth/service';
import { Request, Response } from 'express';
import response from '@/utils/response';
import validator from '@/utils/validator';
import { validationRegister, validationLogin } from '@/core/Auth/validation';
import { SUCCESS } from '@/constant/flag';
export default class AuthController {
    @validator(validationLogin)
    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const result = await authService.login(req.body);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.forbidden(error.message, res, error.flag);
        }
    }
    @validator(validationRegister)
    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const result = await authService.register(req.body);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }

    public async logout(req: Request, res: Response): Promise<Response> {
        try {
            const result = await authService.logout(req.headers.authorization as string);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }
}
