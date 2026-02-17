import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, getDB } from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
await connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

// Get products
app.get("/products", async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection("Products").find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
