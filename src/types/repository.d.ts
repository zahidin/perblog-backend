export default interface IRepository<T> {
    create(data: T): Promise<T | T[]>;
    find(param?: {}): Promise<T[] | {}>;
    findOne(condition: T): Promise<T | {}> | undefined;
    delete(condition: string): Promise<{ success?: number }>;
    update(condition: T, data: T): Promise<{ success?: number }>;
}
