import objectid from 'objectid';

export abstract class EntityBase {

    private _id: any;
    get id(): any {
        return this._id;
    }

    set id(id: any) {
        if (id === "") {
            throw new Error("id cannot be empty");
        }

        this._id = id;
    }

    constructor(req: any) {
        this.id = req._id !== undefined ? req._id : new objectid();
    }
}