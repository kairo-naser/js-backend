import mongoose, {Schema} from 'mongoose';
const userSchema  = new Schema({
    username:{
        type:String, 
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minLength:1, 
        maxLength:15,
    },
    email:{
        type:String, 
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        password:true,
    }
},
{
    timestamps:true,
}
)

export const User = mongoose.model("User", userSchema)