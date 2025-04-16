import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use the port from environment variables or default to 5000
app.use(express.json()); // Middleware to parse JSON data from the request body

app.use("/api/products", productRoutes); // Mount the product routes on the /api/products path

app.listen(PORT, () => {
    
    connectDB();
    console.log("Server is running on port", PORT);
}); 


