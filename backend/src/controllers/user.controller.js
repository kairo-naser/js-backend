import { loginUserService, logoutUserService, registerUserService } from "../services/user.service.js";


export const registerUser = async (req, res)=>{
    try{
        // destructure the request body
const { username, email, password} = req.body;

//   create user
  const user = await registerUserService(
    username,
    email.toLowerCase(),
    password, 
  )
  if (!user) {
            return res.status(400).json({ message: "Username or email already exists" });
        }
 
// status code in here
  res.status(201).json({message:"User registered successfully", user})
    }

    catch(error){
        console.log("Error registering user:", error)
    
        res.status(500).json({message:"Server error"})
    }

}
export const loginUser = async (req, res)=>{
    try{
        // destructure the request body
const { email, password} = req.body;
const user = await loginUserService(email)
if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return res.status(400).json({ message: "Invalid credentials" });
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

export const logoutUser = async (req, res)=>{
 try{
    const { email } = req.body;
        const user = await logoutUserService(email.toLowerCase());

        if (!user) {
            return res.status(404).json({ message: "User not found" });
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

