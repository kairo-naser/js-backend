import Joi from 'joi'
import { User } from '../models/user.model.js'

const registerScheme = Joi.object({
    username:Joi.string().min(1).max(15).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()

})
const loginScheme = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()

})
const logoutScheme = Joi.object({
    email:Joi.string().email().required(),

})

export const registerValidate = async  (req, res, next)=>{
    const {error} = registerScheme.validate(req.body)
    if(error){
        return res.status(400).json({
            message:error.details[0].message

        })
    }
    const { email } = req.body;
    const existing = await User.findOne({email})
        
      if (existing) {
      return res.status(400).json({ message: "Username or email already exists" });
    }


    next()
}
export const loginValidate = async (req, res, next)=>{
    const {error} = loginScheme.validate(req.body)
    if(error){
        return res.status(400).json({
            message:error.details[0].message

        })
    }

    
    next()
}

export const logoutValide= async (req, res, next)=>{
const {error} = logoutScheme.validate(req.body)
    if(error){
        return res.status(400).json({
            message:error.details[0].message

        })
    }
   
    next()
}