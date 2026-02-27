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

export async function getPosts(req, res){
    try{
     const post = await Post.find()
     res.status(200).json(post)
    }
    catch(error)
{
        console.log("Error creating the post: ",error )
res.status(400).json({
    message:"Internal Server Error"
})
}}

export async function updatePost(req, res){
    try{
       if(Object.keys(req.body).length === 0){
        return res.status(400).json({
            message:"All fields are required"
        })
         }

        const post = Post.findByIdAndUpdate(req.params.id, req.body,{new:true})
         if(!post){
            return res.status(404).json({message:"post not found"})
         }
         res.status(200).json({message:"Post update successfully "})
   
    }
    catch(error)
{
    console.log("Error of updating post: ", error)
    res.status(500).json({
        message:"Failed to update post"
    })
}}

export async function deletePost(req, res){
    try{
      const post = Post.findByIdAndDelete(req.params.id)
      if(!post) return res.status(404).json({message:"The post not found"})
      res.status(200).json({
      message:"The Post Deleted",
      Post
})
    }
    catch(error){
        console.log("Error deleting post: ", error)
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}