import * as MongoDB from 'mongodb';

const client = new MongoDB.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
const connection = await client.connect();
console.log('MongoDB connect correctly!');
const DB = connection.db('cat');


export default DB;