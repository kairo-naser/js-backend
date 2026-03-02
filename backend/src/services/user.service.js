import { User } from "../models/user.model.js";

export const registerUserService = async (username, email, password)=>{
   const existing = await User.findOne({
    email
   })
    if(existing){
    return console.log("The user is already existing")
  }
  const user = await User.create({
    username,
    email,
    password, 
  })

  return user

}
export const loginUserService = async (email)=>{
    const user = await User.findOne({email: email.toLowerCase()})
    return user
    
}

export const logoutUserService = async (email)=>{
 
    const user = User.findOne({
        email 
    })
    return user
}
