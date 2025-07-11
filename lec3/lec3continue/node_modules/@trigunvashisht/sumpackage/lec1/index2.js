const fs=require("fs");
// console.log(fs);
console.log('start');
setImmediate(()=>{
    console.log("set immediate");
})
setTimeout(()=>{
    console.log("setttimout");
},0)
    // fs.readFile("demo.txt",(data)=>{
//     console.log("file read")
//     setTimeout(()=>{
//     console.log("timer 2");
// },0)
// setImmediate(()=>{
//     console.log("immediate 2");
// })
// })
// console.log("end");
