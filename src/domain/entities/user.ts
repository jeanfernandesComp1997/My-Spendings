import { Crypt } from './../libs/crypt';
import { EntityBase } from "./base/entityBase";

export class User extends EntityBase {

    private firstName: string;

    set _firstName(firstname: string) {
        if (firstname === "" || firstname === undefined) {
            throw new Error("firstName cannot be empty");
        }

        this.firstName = firstname;
    }

    private lastName: string;

    set _lastName(lastname: string) {
        if (lastname === "" || lastname === undefined) {
            throw new Error("lastName cannot be empty");
        }

        this.lastName = lastname;
    }

    private email: string;

    get _email() {
        return this.email;
    }

    set _email(email: string) {
        if (email === "" || email === undefined) {
            throw new Error("email cannot be empty");
        }

        this.email = email;
    }

    private password: string;

    set _password(password: string) {
        if (password === "" || password === undefined) {
            throw new Error("password cannot be empty");
        }

        this.password = password;
    }

    constructor(req: any) {
        super(req);
        this._firstName = req.firstName;
        this._lastName = req.lastName;
        this._password =  new Crypt().encrypt(req.password);
        this._email = req.email;
    }
}