function getCommentData(){
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
getCommentData();
async function getCommentData2(){
    try{
        const res=await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(res.data)
    }
    catch(err)
    {
        console.log(err);
    }
}
getCommentData2();
function adduser(email,password){
    axios.post('/user',{
        email: email,
        password: password
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
adduser("trigun7888@gmail.com","1223")