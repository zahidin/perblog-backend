export default interface IRepository<T> {
    create(data: T): Promise<T>;
    // find(param?: {}): Promise<T[] | undefined> | undefined;
    // findOne(condition: T): Promise<T>;
    // delete(condition: T): Promise<{ success?: number }>;
    // update(condition: T, data: T): Promise<{ success?: number }>;
    // updateById(id: string, data: T): Promise<{ success?: number }>;
}
