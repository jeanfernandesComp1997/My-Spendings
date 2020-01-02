import { SpendingRepository } from './../../infra/data/repositories/spendingRepository';
import { Spending } from './../entities/spending';
import { ServiceBase } from './serviceBase';

export class SpendingService extends ServiceBase<Spending> {

    private readonly spendingRepository = new SpendingRepository();

    constructor() {
        super();
    }

    public async createSpending(obj: Spending): Promise<Spending> {

        let result: Spending = await this.spendingRepository.add(obj);

        return result;
    }

    public async deleteSpending(obj: Spending): Promise<any> {

        let result: any = await this.spendingRepository.delete(obj);

        return result;
    }

    public async updateSpending(obj: Spending): Promise<any> {

        let result: any = await this.spendingRepository.update(obj);

        return result;
    }
}