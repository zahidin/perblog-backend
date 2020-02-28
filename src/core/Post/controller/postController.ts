import { Request, Response } from 'express';
import response from '../../../utils/response';
import { postService } from '../service/';

export default class PostController {
    public async create(req: Request, res: Response) {
        try {
            const result = await postService.create(req.body);
            return response.success('Success Add Post', res, result);
        } catch (error) {
            console.log('TCL: PostController -> error', error);
            return response.error('Error Add Post', res, error);
        }
    }

    async showAll(req: Request, res: Response): Promise<Response> {
        try {
            // const result = await this.postService.show(req.body);
            return response.success('Success Show Post', res, '');
        } catch (error) {
            return response.error('Error Show Post', res, error);
        }
    }
}
