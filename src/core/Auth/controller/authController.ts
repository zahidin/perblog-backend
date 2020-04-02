import { authService } from '@/core/Auth/service';
import { Request, Response } from 'express';
import response from '@/utils/response';
import validator from '@/utils/validator';
import { validationRegister, validationLogin } from '@/core/Auth/validation';

export default class AuthController {
    @validator(validationLogin)
    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const result = await authService.login(req.body);
            return response.success('Success login User', res, result);
        } catch (error) {
            return response.forbidden(error.message, res, error.flag);
        }
    }

    @validator(validationRegister)
    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const result = await authService.register(req.body);
            return response.success('Success Register User', res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }
}
