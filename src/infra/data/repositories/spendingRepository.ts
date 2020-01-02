import { Spending } from './../../../domain/entities/spending';
import { BaseRepository } from "./baseRepository";

export class SpendingRepository extends BaseRepository<Spending> {

    constructor() {
        super();
    }
}