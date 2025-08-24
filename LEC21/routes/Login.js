const express = require("express");
const router = express.Router();
const UserModel = require("../model/user");  
const jwt=require("jsonwebtoken")
router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email, password });

        if (user) {
            let token=jwt.sign({"user":userExist},"yooo")
            res.json({
                success:true,
                message:"login successful..."
            });
        } else {
            res.json({
                success:false,
                message:"invalid user..."
            });
        }
        if(userExist.password==password){
            let token=jwt.sign({"user":userExist},"rrrr")
            return res.json({
                success:true,
                message:"login succesfully",
                token:token
            })
        }

    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
