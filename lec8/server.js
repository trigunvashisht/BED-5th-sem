const express = require("express");
const app=express()
// console.log(app);
app.get("/",(req,res)=>{
    console.log(req);
    // res.send("hello world")  // text
    // res.send("<h1> hello world </h1>")   // html
    res.json({
        name:"trigun",
        address:"delhi",
        islogin:true
    })
})
// path param/variable!
// 1. params

app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    let id=req.params.id;
    res.send(id)
})
// 2. query parameter
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    console.log(req.query.desc);
    res.send("got it")
})

app.listen(2999,()=>{
    console.log("server running on 2999");
})  // port is communication end point