import IService from '@/types/service';
import { Post } from '@/types/post';
import PostRepository from '@/core/Post/repository/postRepository';
import slugify from 'slugify';

export default class PostService implements IService<Post> {
    public postRepository: PostRepository;

    constructor(postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    public create(data: Post): Promise<Post | Post[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const proccessData = {
                    ...data,
                    slug: slugify(data.title?.toLowerCase() as string), // same as slugify(<string> data.title),
                };
                const result = await this.postRepository.create(proccessData);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public show(condition?: Post): Promise<Post[] | {} | undefined> {
        if (condition instanceof Object) {
            return this.postRepository.findOne(condition);
        }
        return this.postRepository.find();
    }

    public delete(condition: string): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.delete(condition);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public update(condition: Post, data: Post): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.update(condition, data);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}
