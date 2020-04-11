import IService from '@/types/service';
import { Post } from '@/types/post';
import PostRepository from '@/core/Post/repository/postRepository';
import slugify from 'slugify';
import { FAILED, NOT_FOUND } from '@/constant/flag';

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
        return new Promise(async (resolve, reject) => {
            try {
                let result: {} | [];

                if (condition instanceof Object) {
                    result = await this.postRepository.findOne(condition);
                } else {
                    result = await this.postRepository.find();
                }

                if (!result) {
                    reject({ flag: NOT_FOUND.flag, message: NOT_FOUND.message });
                }
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
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
                const proccessData = {
                    ...data,
                    slug: slugify(data.title?.toLowerCase() as string),
                };
                const result = await this.postRepository.update(condition, proccessData);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}
