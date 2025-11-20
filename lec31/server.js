const {WebSocketServer}=require("ws");
const wss=new WebSocketServer({port:8080})
let rooms =new Map();
wss.on("connection",function(socket){
console.log("New User Connected");
socket.on("message",function(message){
    let parsedMessage=JSON.parse(message);
    if(parsedMessage.type=="join"){
        let roomId=parsedMessage.roomId;
        if(!rooms.get(roomId)){
            rooms.set(roomId, new Set())
        }
        rooms.get(roomId).add(socket)
        socket.send("you are added to room"+" "+roomId)
        console.log(rooms)
    }
    else if(parsedMessage.type=="chat"){
        let roomId=socket.roomId;
        let message=parsedMessage.payload.message;
        let allclients=rooms.get(roomId);
        allclients.forEach(s=> {
            s.send(message)
        });
    }
    else if(parsedMessage.type=="create"){
        let roomId=Math.floor(Math.random()*10000000).toString()
        rooms.set(roomId,new Set());
        socket.send(roomId);
    }
})
})