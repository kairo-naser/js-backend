import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
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


// before saving the user, hash the password
userSchema.pre("save", async function next(){
    if(!this.isModified("password")){
        return next()
    }   

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
// compare the password during login
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)