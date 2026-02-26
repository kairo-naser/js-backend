import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
const app = express(); //creates an express application

// using express json middleware to parse incoming JSON requests
app.use(express.json())
// routes 
app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
export  default app 
