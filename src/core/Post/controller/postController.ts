import { Request, Response } from 'express';
import response from '@/utils/response';
import { postService } from '@/core/Post/service';
import validator from '@/utils/validator';
import { validationCreate, validationShow, validationDelete } from '@/core/Post/validation';
import { SUCCESS } from '@/constant/flag';
export default class PostController {
    @validator(validationCreate)
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.create(req.body);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }

    public async showAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.show();
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }

    @validator(validationShow)
    public async show(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.show({ slug: req.params.slug });
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }

    @validator(validationCreate)
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.update({ slug: req.params.slug }, req.body);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }

    @validator(validationDelete)
    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.delete(req.params.id);
            return response.success(SUCCESS.message, res, result);
        } catch (error) {
            return response.error(error.message, res, error.flag);
        }
    }
}
