import { User } from './../../entities/user';
import { IUserRepository } from './iUserRepository';

export interface IUoWRepository {

    userRepository: IUserRepository<User>;
}