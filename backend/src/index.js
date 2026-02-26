import dotenv from "dotenv"
import connectDB from "./config/database.js"
import app from "./app.js"
dotenv.config()


const port = process.env.PORT || 5000
const startServer = async()=>{
    try{
     await connectDB()

     app.on("error", (err)=>{
        console.log("Error starting server:", err)
        throw err
     })
        app.listen(port,()=>{
            console.log(`Server is running on port http://localhost:${port}`)
        })
    }
    catch(err){
        console.log("Error connecting databse:" , err)
    }
}

startServer()