let file1=require("./file1");
console.log(file1);
let res=file1.add(2,3);
function mul(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
module.exports.mul=mul;
module.exports.divide=divide;