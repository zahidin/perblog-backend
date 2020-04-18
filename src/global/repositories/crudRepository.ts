import { getManager, EntityManager } from 'typeorm';
import { FAILED, NOT_FOUND } from '@/constant/flag';
export default class CrudRepository<T> {
    private entityRepository: EntityManager;
    public entity: any;

    constructor() {
        this.entityRepository = getManager();
    }

    public create(data: T): Promise<T | T[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.entityRepository.save<T>(this.entity, data);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public find(param?: {}): Promise<T[] | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.entityRepository.find<T | T[]>(this.entity, param);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public findOne(condition: T): Promise<T | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.entityRepository.findOne<T>(this.entity, condition);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public findOneOrFail(condition: string): Promise<T | {}> {
        console.log('condition', condition);
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.entityRepository.findOneOrFail<T>(this.entity, condition);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public update(condition: T, data: T): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const findData = await this.findOne(condition);
                if (findData) {
                    await this.entityRepository.update(this.entity, condition, data);
                    resolve({ success: 1 });
                } else {
                    reject({ flag: NOT_FOUND.flag, message: NOT_FOUND.message });
                }
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }

    public delete(condition: string): Promise<{ success?: number }> {
        return new Promise(async (resolve, reject) => {
            try {
                const checkingData = await this.findOneOrFail(condition);
                if (checkingData) {
                    await this.entityRepository.delete(this.entity, condition);
                    resolve({ success: 1 });
                } else {
                    reject({ flag: FAILED.flag, message: FAILED.message });
                }
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.errmsg });
            }
        });
    }
}
