let account_balance = 20000;

let products = [
    {
        name: "samsung",
        amount: 70000,
        quantity: 10
    },
    {
        name: "Iphone 16",
        amount: 10000,
        quantity: 1
    }
];

function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        let isproduct = null;

        for (let i = 0; i < products.length; i++) {
            if (products[i].name === product_name) {
                isproduct = products[i];
                break;
            }
        }

        if (!isproduct) {
            reject("Product is not available");
        } else {
            resolve(isproduct.amount);
        }
    });
}
buyProduct("samsung")
    .then(amount => {
        console.log("Product is purchased. Amount:", amount);
    })
    .catch(err => {
        console.log("Error:", err);
    });

function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(amount>account_balance){
            reject("Insufficient balance");
        }else{
            account_balance-=amount;
            resolve("Amount deducted");
        }
    })
}
deductAmount(100000)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})