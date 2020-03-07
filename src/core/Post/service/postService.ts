import IService from '../../../types/service';
import { Post } from '../../../types/post';
import PostRepository from '../repository/postRepository';

export default class PostService implements IService<Post> {
    public postRepository: PostRepository;

    constructor(postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    public create(data: Post): Promise<Post> {
        return new Promise(async (resolve, reject) => {
            try {
                const setSlug =
                    data.title &&
                    data.title
                        .trim()
                        .replace(/\s/g, '-')
                        .toLowerCase();

                const proccessData = {
                    ...data,
                    slug: data.slug !== '' ? data.slug : setSlug,
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
