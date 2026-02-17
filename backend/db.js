import { MongoClient } from "mongodb";

let db;

export async function connectDB() {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();

    db = client.db("FurnitureStore");

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}

export function getDB() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}
