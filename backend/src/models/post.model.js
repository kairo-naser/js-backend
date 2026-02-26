import mongoose , {Schema} from "mongoose";

const postScheme = new Schema({
    name: {
        type:String,
        required:true,
        minLength:1, 
        maxLength:50,
    },
    description:{
        type:String,
        minLength:1, 
        maxLength:100,
    },
    age:{
        type:Number,

    }
},
{
    timeStamp: true,
}
)


export const Post = mongoose.model("Post", postScheme)