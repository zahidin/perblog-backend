import IRepository from '../../../types/repository';
import { Post as TypePost } from '../../../types/post';
import { getManager, EntityManager } from 'typeorm';
import { Post } from '../../../entity/Post';

export default class PostRepository implements IRepository<TypePost> {
    postRepository: EntityManager;
    entity: any;

    constructor() {
        this.entity = Post;
        this.postRepository = getManager();
    }

    create(data: TypePost): Promise<TypePost> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.save(this.entity, data);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    // find(param?: {}): Promise<TypePost[]> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.find(param);
    //             resolve(result);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // findOne(condition: TypePost): Promise<TypePost> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.findOne(condition);
    //             resolve(result);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // update(condition: TypePost, data: TypePost): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.update(condition, data);
    //             resolve(result.raw);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // updateById(id: string, data: Post): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.findOneAndUpdate([id], data);
    //             resolve(result.value);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // delete(condition: Post): Promise<{ success?: number }> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await this.postRepository.delete(condition);
    //             resolve(result.raw);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }
}
