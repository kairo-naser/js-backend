import { User } from "../models/user.model.js";

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
        console.log("Error registering user:", error)
    
        res.status(500).json({message:"Server error"})
    }

}
const loginUser = async (req, res)=>{
    try{
        // destructure the request body
const { email, password} = req.body;
const user = await User.findOne({email: email.toLowerCase()})
if(!user) {
    return res.status(400).json({message:"User is not found"})
}
// compare   the password
const isMatched = await user.comparePassword(password)
if(!isMatched){
    return res.status(400).json({message:"Invalid credentials"})
}
res.status(200).json({message:"Login successful", user:{
    id:user._id,
    username:user.username,
    email:user.email,
}})
    }
    catch(error){
        console.log("Error logging in user:", error)    
        res.status(500).json({message:"Server error"})
    }
}

const logoutUser = async (req, res)=>{
 try{
    const {email } = req.body
    const user = User.findOne({
        email 
    })

    if(!user) {
        return res.status(404).json({
            message:"User not found"
        })
    }
    res.status(200).json({
        message:"Logout successfully"
    })

 }
 catch(error){
  res.status(500).json({
    message:"Server Error"
  })
 }
}

export{
    registerUser,
    loginUser,
    logoutUser
}