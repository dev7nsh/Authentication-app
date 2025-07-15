import express from "express"
import dotenv from "dotenv"
import authroute from "./Routes/auth.routes.js";
import {Conn} from "./lib/db.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// Routes
app.use("/api" , authroute);

// Start server
app.listen(PORT, () => {
    console.log("server is running ",PORT,
        Conn()
    );
});