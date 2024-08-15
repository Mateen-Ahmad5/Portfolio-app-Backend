import express from "express";

import cors from "cors";

// importing routes

import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js";



const app = express();
app.use(cors())

// conntect BD
connectDB()


// middleware
app.use(express.json())

app.use('/api/portfolio/experience' , userRoutes)



app.listen(8000,function(){
    console.log("Server is running on port 8000");
})