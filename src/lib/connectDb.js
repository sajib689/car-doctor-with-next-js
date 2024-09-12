import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let db;

export const connectDb = async () => {
    if (db) return db; 

    try {
        const uri = 'mongodb+srv://touristSpot:touristSpot@cluster0.2m0rny5.mongodb.net/car-doctor-next-js'
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

       
        db = client.db('car-doctor-next-js'); // Connect to specific DB
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw new Error("Database connection failed");
    }
};
