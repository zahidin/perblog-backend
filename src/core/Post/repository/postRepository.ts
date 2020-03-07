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

    public create(data: TypePost): Promise<TypePost> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.save(this.entity, data);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public find(param?: {}): Promise<TypePost[] | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.find(this.entity, param);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public findOne(condition: TypePost): Promise<TypePost | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.findOne(this.entity, condition);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    public update(condition: TypePost, data: TypePost): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.update(this.entity, condition, data);
                resolve({ success: 1 });
            } catch (error) {
                reject(error);
            }
        });
    }

    public delete(condition: string): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.delete(this.entity, condition);
                resolve({ success: 1 });
            } catch (error) {
                reject(error);
            }
        });
    }
}
