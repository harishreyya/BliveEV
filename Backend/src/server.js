import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";
import { AuthMiddleware } from "./middlewares/AuthMiddleware.js";
import  cors from 'cors';
const app = express();

mongoose.connect(DB_CONNECT,{
    useNewUrlParser:true
})
app.use(cors())
app.use(express.json())
app.use('/api/',apiRoute);
app.use('/api/',AuthMiddleware,apiProtected);
app.listen(4000,()=>{
    console.log("server is listening on 4000")
})

