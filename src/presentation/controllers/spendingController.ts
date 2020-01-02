import { SpendingService } from '../../domain/services/spendingService';
import { Spending } from '../../domain/entities/spending';
import { Request, Response } from "express";

export const createSpending = async (req: Request, res: Response) => {

    let response: any;
    let spendingService: SpendingService = new SpendingService();

    try {
        let spending: Spending = new Spending(req.body);
        let result: Spending = await spendingService.createSpending(spending);

        response = {
            statusCode: 200,
            body: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};

export const listSpendings = async (req: Request, res: Response) => {

    let response: any;
    let spendingService: SpendingService = new SpendingService();

    try {

        let result: any = await spendingService.listByQuery({idUser: req.query.idUser}, "spending");

        response = {
            statusCode: 200,
            body: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};

export const deleteSpending = async (req: Request, res: Response) => {

    let response: any;
    let spendingService: SpendingService = new SpendingService();

    try {

        let spending: Spending = new Spending(req.body);
        let result: Spending = await spendingService.deleteSpending(spending);

        response = {
            statusCode: 200,
            body: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};

export const updateSpending = async (req: Request, res: Response) => {

    let response: any;
    let spendingService: SpendingService = new SpendingService();

    try {

        let spending: Spending = new Spending(req.body);
        let result: Spending = await spendingService.updateSpending(spending);

        response = {
            statusCode: 200,
            body: result
        };

    } catch (error) {

        response = {
            statusCode: 400,
            body: error.toString()
        };
    }

    res.send(response);
};