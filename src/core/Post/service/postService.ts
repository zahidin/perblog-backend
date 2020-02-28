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
                const result = await this.postRepository.create(data);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    // show(condition: Post): Promise<Post[] | {}> {
    //     if (condition instanceof String) {
    //         return this.postRepository.findOne(condition);
    //     }
    //     return this.postRepository.find();
    // }

    // delete(condition: Post): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.delete(condition);
    //             resolve(result);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // update(condition: Post, data: Post): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.update(condition, data);
    //             resolve(result);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // updateById(id: string, data: Post): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.updateById(id, data);
    //             resolve(result);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }
}
