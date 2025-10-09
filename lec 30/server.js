const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080});


// wss.on("connection",function(socket){
//     console.log("New user connected");
//     socket.send("welcome !!!");
//     setInterval(()=>{
//         socket.send("Reliance stock price is "+" "+Math.random())
//     },1000)
// })


// wss.on("connection",function(socket){
//     console.log("New user connected");
//     socket.send("welcome !!!");
//     socket.on("message",function(message){
//         console.log(message);
//         if(message.toString()==="ping"){
//             socket.send("pong");
//         }else{
//             socket.send("not correct message")
//         }
//     })
    
// })

let allSockets = [];
wss.on("connection",function(socket){
    console.log("New user connected");
    allSockets.push(socket);
    // console.log(allSockets);
    socket.send("message",function(message){
        allSockets.forEach((s)=>{
            s.send(message.toString());
    })
})
})