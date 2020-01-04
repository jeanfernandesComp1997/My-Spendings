import { Crypt } from './../libs/crypt';
import { UserRepository } from './../../infra/data/repositories/userRepository';
import { User } from './../entities/user';
import { ServiceBase } from './serviceBase';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export class UserService extends ServiceBase<User> {

    private readonly userRepository = new UserRepository();

    constructor() {
        super();
    }

    public async createUser(obj: User): Promise<User> {

        let existUser: Array<any> = await this.listByQuery({email: obj._email}, "user");
        if (existUser.length !== 0)
            throw new Error('this email is already in use !');

        let result: User = await this.userRepository.add(obj);

        return result;
    }

    public async login(email: string, password: string): Promise<any> {

        let result: Array<any> = await this.listByQuery({email: email}, "user");

        if (result.length <= 0)
            throw new Error('User not found !');

        if (new Crypt().decrypt(result[0].password) === password) {

            let accesToken = await jwt.sign({email: result[0].email}, process.env.SECRET, {
                expiresIn: 43200
            });

            return {
                token: accesToken,
                user: result[0]._id
            };
        }
        else
            throw new Error('Password incorrect !');
    }
}