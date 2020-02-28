export default interface IService<T> {
    create(data: T): Promise<T>;
    // show(condition: T): Promise<T[] | {}>;
    // delete(condition: T): Promise<{ success?: number }>;
    // updateById(id: string, data: T): Promise<{ success?: number }>;
    // update(condition: T, data: T): Promise<{ success?: number }>;
}
