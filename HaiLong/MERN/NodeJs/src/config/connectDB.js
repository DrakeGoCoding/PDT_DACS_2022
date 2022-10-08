import { MongoClient } from 'mongodb';
import "dotenv/config";

const url = process.env.DB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;

let db = null;

const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        db = client.db(dbName);

        const collection = db.collection('documents');
    } catch (error) {
        console.log('Connected error to server: ', error);

    } finally {
        // await client.close()
    }
}

const getDB = () => {
    return db;
}

module.exports = { connectDB, getDB }


