const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('objectid');
require('dotenv').config();
import MongoClient from 'mongodb';

export class UnitOfWork<T> {

    private readonly uri = process.env.URI;
    private readonly db_name = process.env.DB_NAME;

    constructor() {

    }

    public async add(obj: T): Promise<any> {

        let conn = await this.connect(obj.constructor.name.toLowerCase());

        return new Promise((resolve) => {
            conn.collection.insertOne(obj, (error, result) => {
                if (error) {
                    throw error;
                }

                conn.client.close();

                resolve();
            });
        });
    }

    public async findOne(id: string, collection: string): Promise<any> {

        let conn = await this.connect(collection);

        return new Promise((resolve) => {
            conn.collection.findOne({ "_id": new ObjectId(id) }, (error, result) => {
                if (error) {
                    throw error;
                }

                conn.client.close();

                resolve(result);
            });
        });
    }

    public async listByQuery(query: any, collection: string): Promise<Array<any>> {

        let conn = await this.connect(collection);

        return new Promise((resolve) => {
            conn.collection.find(query).toArray(function (err, result) {

                if (err) {
                    throw err;
                }

                conn.client.close();

                resolve(result);
            });
        });
    }

    public async delete(obj: T): Promise<any> {

        let conn = await this.connect(obj.constructor.name.toLowerCase());
        let newObj: any = obj;

        let query: any = {
            _id: ObjectId(newObj._id)
        };

        return new Promise((resolve) => {
            conn.collection.deleteOne(query, (error, result) => {
                if (error) {
                    throw error;
                }

                conn.client.close();

                resolve();
            });
        });
    }

    public async update(obj: T): Promise<any> {

        let conn = await this.connect(obj.constructor.name.toLowerCase());
        let newObj: any = obj;

        let query: any = {
            _id: ObjectId(newObj._id)
        };

        delete newObj._id;

        let newvalues: any = {
            $set: newObj
        };

        return new Promise((resolve) => {
            conn.collection.updateOne(query, newvalues, (error, result) => {
                if (error) {
                    throw error;
                }

                conn.client.close();

                resolve();
            });
        });
    }

    public async connect(collectionName: string): Promise<any> {

        let database, collection;

        return new Promise((resolve) => {
            MongoClient.connect(this.uri, { useUnifiedTopology: true }, (error, client) => {
                if (error) {
                    throw error;
                }
                database = client.db(this.db_name);
                collection = database.collection(collectionName);

                resolve({ collection: collection, client: client });
            });
        });
    }
}