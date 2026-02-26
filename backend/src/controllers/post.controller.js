 import {Post} from  "../models/post.model.js";


export async function createPost (req, res){
try{
   const { name, description, age} = req.body
   if(!name || !age ) return res.status(400).json({
    message:"name and age are required"
   })

   const post = await Post.create({
       name,
       description,
       age
   })
   res.status(200).json({
    message:"Successfully Posted ",
    post:{
        name:post.name,
        description:post.description,
        age:post.age


    }
   })

}
catch(error){
    console.log("Error creating the post: ",error )
res.status(400).json({
    message:"Internal Server Error"
})
}
}

