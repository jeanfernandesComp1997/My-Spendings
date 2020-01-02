import { EntityBase } from "./base/entityBase";

export class Spending extends EntityBase {

    private description: string;
    set _description(description: string) {
        if (description === "" || description === undefined) {
            throw new Error("description cannot be empty");
        }

        this.description = description;
    }

    private value: number;
    set _value(value: number) {
        if (value === undefined) {
            throw new Error("value cannot be empty");
        }

        this.value = value;
    }

    private date: string;
    set _date(date: string) {
        if (date === undefined) {
            throw new Error("date cannot be empty");
        }

        this.date = date;
    }

    private local: string;
    set _local(local: string) {
        if (local === "" || local === undefined) {
            throw new Error("local cannot be empty");
        }

        this.local = local;
    }

    private paymentMethods: string;  
    set _paymentMethods(paymentMethods: string) {
        if (paymentMethods === "" || paymentMethods === undefined) {
            throw new Error("paymentMethods cannot be empty");
        }

        this.paymentMethods = paymentMethods;
    }  

    private idUser: string;  
    set _idUser(idUser: string) {
        if (idUser === "" || idUser === undefined) {
            throw new Error("idUser cannot be empty");
        }

        this.idUser = idUser;
    } 

    constructor(req: any) {
        super(req);
        this._description = req.description;
        this._value = req.value;
        this._date = req.date;
        this._local = req.local;
        this._paymentMethods = req.paymentMethods;
        this._idUser = req.idUser;
    }
}