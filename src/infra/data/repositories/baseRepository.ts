import { UnitOfWork } from './../unitOfWork/unitOfWork';

export class BaseRepository<T> {

    private readonly unitOfWork: UnitOfWork<T> = new UnitOfWork();

    constructor() {

    }

    public async add(obj: T): Promise<T> {

        await this.unitOfWork.add(obj);

        return obj;
    }

    public async findOne(id: string, collection: string): Promise<any> {

        let result: any = await this.unitOfWork.findOne(id, collection);

        return result;
    }

    public async listByQuery(query: any, collection: string): Promise<any> {

        let result: Array<any> = await this.unitOfWork.listByQuery(query, collection);

        return result;
    }

    public async delete(obj: T): Promise<any> {

        let result: any = await this.unitOfWork.delete(obj);

        return result;
    }

    public async update(obj: T): Promise<any> {

        let result: any = await this.unitOfWork.update(obj);

        return result;
    }
}