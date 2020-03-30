export default interface IService<T> {
    create(data: T): Promise<T | T[]>;
    show(condition: {}): Promise<T[] | {} | undefined>;
    delete(condition: string): Promise<{ success?: number }>;
    update(condition: T, data: T): Promise<{ success?: number }>;
}
