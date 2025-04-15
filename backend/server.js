import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON data from the request body

app.use("/api/products", productRoutes); // Mount the product routes on the /api/products path

app.listen(5000, () => {
    
    connectDB();
    console.log("Server is running on port 5000 ");
}); 


