import { Request, Response } from 'express';
import response from '../../../utils/response';
import { postService } from '../service/';
import { Post } from '../../../types/post';

export default class PostController {
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

    public async show(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.show({ slug: req.params.slug });
            return response.success('Success Show Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.update({ slug: req.params.slug }, req.body);
            return response.success('Success Update Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const result = await postService.delete(req.params.id);
            return response.success('Success Delete Post', res, result);
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }
}
