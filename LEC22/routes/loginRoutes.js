const express=require("express");
const router=express.router();



app.delete("/blogs/:blogId",async (req,res)=>{
    let blogId=req.params.blogId;
    let userId=req.body.userId;
    let blogExist=await Blog.findById(blogId);
    if(!blogExist)
    {
        return res.json({
            success:false,
            message:"blog does not exist"

        })
    }
    if(blogExist.userId!=userId)
    {
         return res.json({
            success:false,
            message:"permission denied"

        })
    }
    await Blog.findByIdAndDelete(blogId);

})