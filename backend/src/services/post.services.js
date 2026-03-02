import {Post} from  "../models/post.model.js";

export const postCreateService = async (name, description, age)=>{
    const post = await Post.create({
       name,
       description,
       age
   })
   return post 
}

export const getAllPostService = async ()=>{
    const post = await Post.find()
    return post
}

export const updatePostService = async (id, body)=>{
    const post = await Post.findByIdAndUpdate(id, body,{new:true} )
    return post
}

export const deletePostService = async (id)=>{
const post = await Post.findByIdAndDelete(id)
return post
}

