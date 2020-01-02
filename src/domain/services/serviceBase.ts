import { BaseRepository } from './../../infra/data/repositories/baseRepository';
export class ServiceBase<T> {

    private readonly baseRepository = new BaseRepository();

    constructor() {

    }

    public async findOne(id: string, collection: string): Promise<T> {

        let result: any = await this.baseRepository.findOne(id, collection);

        return result;
    }

    public async listByQuery(query: any, collection: string): Promise<Array<any>>{

        let result: Array<any> = await this.baseRepository.listByQuery(query, collection);

        return result;
    }

}