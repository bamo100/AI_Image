import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/database/mongoose'; // Adjust the import path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await connectToDatabase();
    console.log("Connected to MongoDB:", connection.connection.readyState); // Logs connection state
    res.status(200).json({ message: "Successfully connected to MongoDB" });
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ message: "Failed to connect to MongoDB", error: error.message });
  }
}

