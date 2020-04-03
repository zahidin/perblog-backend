import IRepository from '@/types/repository';
import { getManager, EntityManager } from 'typeorm';
import { FAILED } from '@/constant/flag';
export default class CrudRepository<T> implements IRepository<T> {
    postRepository: EntityManager;
    entity: any;

    constructor() {
        this.postRepository = getManager();
    }

    public create(data: T): Promise<T | T[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.save<T>(this.entity, data);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public find(param?: {}): Promise<T[] | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.find<T | T[]>(this.entity, param);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public findOne(condition: T): Promise<T | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.findOne<T>(this.entity, condition);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public update(condition: T, data: T): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.update(this.entity, condition, data);
                resolve({ success: 1 });
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public delete(condition: string): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.postRepository.delete(this.entity, condition);
                resolve({ success: 1 });
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }
}
