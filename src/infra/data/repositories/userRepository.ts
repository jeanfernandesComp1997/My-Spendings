import { User } from './../../../domain/entities/user';
import { BaseRepository } from "./baseRepository";

export class UserRepository extends BaseRepository<User> {

    constructor() {
        super();
    }

}