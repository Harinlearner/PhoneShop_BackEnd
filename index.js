import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import route from "./Router/userRoute.js"
const app = express();
app.use(express.json()); //middleware
app.use(cors());
dotenv.config();
const PORT=7000;
const URL="mongodb+srv://harinmurugesan:o992b1g4xsoXXCte@cluster0.99s4l.mongodb.net/Ecommerce";
mongoose
    .connect(URL)
    .then(()=>{
        console.log("Database Connected");
        app.listen(PORT,()=>{
            console.log(`Port ${PORT}`);
        })
    })
    
app.use('/api',route);
