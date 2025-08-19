module.exports.postAddBlog=async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;

    let getUser = await USER.findById(userId);
    if(!getUser){
        return res.json({
            success:false,
            message:"User not found"
        })
    }
    
    let blog = {
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    }