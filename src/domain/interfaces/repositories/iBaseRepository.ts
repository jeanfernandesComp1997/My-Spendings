export interface IBaseRepository<T> {

    Add(obj: T): T;
}