import crypto from 'crypto';
require('dotenv').config();

export class Crypt {

    private readonly encryptData: any = {
        algorithm: "aes-256-cbc",
        secret: process.env.SECRET
    };

    constructor() {

    }
    
    public encrypt(key: string): string {

        let cipher = crypto.createCipher(this.encryptData.algorithm, this.encryptData.secret)
        let crypted = cipher.update(key, 'utf8', 'hex')
        crypted += cipher.final('hex');

        return crypted.toString();
    }

    public decrypt(key: string): string {

        let decipher = crypto.createDecipher(this.encryptData.algorithm, this.encryptData.secret)
        let dec = decipher.update(key.toString(), 'hex', 'utf8')
        dec += decipher.final('utf8');

        return dec;
    }
}