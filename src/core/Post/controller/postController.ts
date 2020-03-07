import { Request, Response } from 'express';
import response from '../../../utils/response';
import { postService } from '../service/';
import validator from '../../../utils/validator';
import { body, param } from 'express-validator';
import { string, integer, required } from '../../../constant/errorMessageValidation';

export default class PostController {
    @validator([
        body('title')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('date')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('content')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('tags')
            .isString()
            .withMessage(string),
    ])
    public async create(req: Request, res: Response) {
        try {
            const result = await postService.create(req.body);
            return response.success('Success Add Post', res, result);
        } catch (error) {
            return response.error('Error Add Post', res, error);
        }
    }

    public async showAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.show();
            return response.success('Success Show Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }

    @validator([
        param('slug')
            .exists()
            .withMessage(required),
    ])
    public async show(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.show({ slug: req.params.slug });
            return response.success('Success Show Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }

    @validator([
        param('slug')
            .exists()
            .withMessage(required),
        body('title')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('date')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('content')
            .isString()
            .withMessage(string)
            .exists()
            .withMessage(required),
        body('tags')
            .isString()
            .withMessage(string),
    ])
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.update({ slug: req.params.slug }, req.body);
            return response.success('Success Update Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }

    @validator([
        param('id')
            .exists()
            .withMessage(required),
    ])
    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.delete(req.params.id);
            return response.success('Success Delete Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }
}
