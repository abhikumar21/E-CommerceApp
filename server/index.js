
//1:45 models (rating)

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {connectDb} from "./config/db.js";
import dotenv from "dotenv";
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js'



const app = express();
app.use(express.json());
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
app.use(cors({origin: allowedOrigins}));
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// middleware 
app.use(function(req, res, next) {
    console.log("middleware")
    next()
})

const PORT = process.env.PORT
app.listen(PORT, async(req, res)=> {
    await connectDb();

    console.log(`Server is running at port ${PORT}`)
})

    // mongoose.connect('mongodb+srv://abhishekkumar2004abhi:GQKbT3IGQbajLcmy@cluster0.f6ho7lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    // .then(() => console.log('db is connected'))
    // .catch((error) => console.log(error));


// app.get('/', (req, res)=> {
//     res.send("hello")
// } )
app.use('/auth', AuthRoute);
app.use('/user', UserRoute)