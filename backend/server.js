import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use the port from environment variables or default to 5000

const __dirname = path.resolve(); // Get the current directory name
app.use(express.json()); // Middleware to parse JSON data from the request body

app.use("/api/products", productRoutes); // Mount the product routes on the /api/products path


if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend build directory
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")));
}

app.listen(PORT, () => {
    
    connectDB();
    console.log("Server is running on port", PORT);
}); 


