import { Request, Response } from "express";
import { STATUS_CODES } from "http";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {

    console.log(req.body);

    let response: any = {
        statusCode: 200,
        body: 'teste'
    };

    res.send(response);
};