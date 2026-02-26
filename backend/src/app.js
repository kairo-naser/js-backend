import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express(); //creates an express application

// using express json middleware to parse incoming JSON requests
app.use(express.json())
// routes 
app.use('/api/users', userRouter)
export  default app 
