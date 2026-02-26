import mongoose from "mongoose"
const connectDB = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(process.env.MANGO_URI)
       console.log("Database connected successfully:", connectionInstance.connection.host)
    }
    catch(err){
        console.log("Error connecting to database:", err)
    }
}
export default connectDB