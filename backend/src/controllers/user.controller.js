import { User } from "../models/usermodel.js";

const registerUser = async (req, res)=>{
    try{
        // destructure the request body
const { username, email, password} = req.body;

// validate the input
 if(!username || !email || !password){
    return res.status(400).json({message:"All fields are required"})
 }

//  check if user already exists
  const existing = await User.findOne({email: email.toLowerCase()})
  if(existing){
    return res.status(400).json({message:"User already exists"})
  }

//   create user
  const user = await User.create({
    username,
    email:email.toLowerCase(),
    password, 
  })
// status code in here
  res.status(201).json({message:"User registered successfully", user})
    }

    catch(error){
    
        res.status(500).json({message:"Server error"})
    }

}

export{
    registerUser
}