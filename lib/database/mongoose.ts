import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn:null,
        promise: null
    }
}

//console.log(process.env.MONGODB_URL)
export const connectToDatabase = async () => {
    
    if(cached.conn) return cached.conn;
    
    if(!process.env.MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise = cached.promise || mongoose.connect(process.env.MONGODB_URL, {dbName: 'imagnify', bufferCommands: false});

    cached.conn = await cached.promise;

    return cached.conn;
}