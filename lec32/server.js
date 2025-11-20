const express = require("express");
const app = express();
const { createClient } = require("redis");

async function connect() {
    const client = createClient();
    client.on("error", function(err) {
        console.log(err);
    });
    await client.connect();
    return client;
}

// connect()
// .then(() => {
//     app.listen(3000, () => {
//         console.log("server started");
//     });
// })
// .catch((err) => {
//     console.error("Failed to connect to Redis:", err);
// });

function cachedData(){
    client.set("user:100",JSON.stringify([{
        name:"Trigun",
        age:"20"
    }]))
}
cachedData()
.then(()=>{
    console.log("data cached successfully")
})
async function readUser(){
 let user =await client.get("user:100")
 return user;
}
readUser().
then((data)=>{
    console.log(JSON.parse(data))
})