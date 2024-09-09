import { MongoClient } from "mongodb";

let db;

export const connectDb = async () => {
    if(db) return db
    try {
        const uri = process.env.URI
       
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db = client.db('car-doctor-next-js')
          return db
    } catch (error) {
        console.log(error) 
    }
}