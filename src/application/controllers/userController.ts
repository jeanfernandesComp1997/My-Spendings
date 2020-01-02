import { UserService } from '../../domain/services/userService';
import { User } from '../../domain/entities/user';
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {

    let response: any;
    let userService: UserService = new UserService();

    try {
        let user: User = new User(req.body);
        let result: object = await userService.createUser(user);

        response = {
            statusCode: 200,
            response: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};

export const findUser = async (req: Request, res: Response) => {

    let response: any;
    let userService: UserService = new UserService();

    try {
        let result: object = await userService.findOne(req.query.id, 'user');

        response = {
            statusCode: result !== null ? 200 : 404,
            response: result ? result : 'User not found.'
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};

export const login = async (req: Request, res: Response) => {

    let response: any;
    let userService: UserService = new UserService();

    try {
        let result: object = await userService.login(req.body.email, req.body.password);

        response = {
            statusCode: 200,
            response: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};