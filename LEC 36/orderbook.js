class OrderBook{
    constructor(symbol){
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this.currentPrice = null;
        this.trades=[]
    }
    _sort(side){//sirf batane ke liye ki function private hai 
        if(side=="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price-b.price;
                }
                return a.timeStamp-b.timeStamp;
            }) 
        }
        else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price;
                }
                return a.timeStamp-b.timeStamp;
            })
        }
    }

    placeorder(price,quantity,type,side,userName){
        let newOrder={
            symbol: this.symbol,
            orderId:Math.floor(Math.random()*10000),
            side:side,
            type:type,
            price:price || null,
            originalQty:quantity,
            executedQty:0,
            remainingQty:quantity,
            user:userName,
            timeStamp:Date.now()
        }
        if(order.type=="LIMIT"){
            let result = this._LimitMatch(order);
        }
        else{
            let result = this._MarketMatch();
        }
    }
    _LimitMatch(){
        if(order.side=="BUY"){
            let askArr = this.ask;
            while(order.remainingQty >= 0 && askArr.length>0){
                let top = askArr[0];
                if(top.price<=order.price){
                    let buyQuantity = Math.min(top.quantity,order.quantity);
                    //upadate quantity;
                    order.executedQty += buyQuantity;
                    order.remainingQty -=buyQuantity;

                    top.executedQty +=buyQuantity;
                    top.remainingQty -= buyQuantity;

                    if(top.remainingQty==0){
                        askArr.shift();
                    }
                }
                else{
                    break;
                }
            }
        }
        else if(order.side=="SELL"){

        }
        else{
            return "Invald order side";
        }
    }
    _MarketMatch(){

    }

}

let BICUSDOrderBook = new OrderBook("BTC_USD");

BICUSDOrderBook.bids.push({
    price:"100",
    quantity:10,
    type:"LIMIT",
    user:"Vivek bhatt"
})
BICUSDOrderBook.bids.push({
    price:"101",
    quantity:10,
    type:"LIMIT",
    user:"Vinay"
})
BICUSDOrderBook.bids.push({
    price:"99",
    quantity:10,
    type:"LIMIT",
    user:"Vansh"
})

//ask


BICUSDOrderBook.ask.push({
    price:"105",
    quantity:10,
    type:"LIMIT",
    user:"Vivek bhatt"
})
BICUSDOrderBook.ask.push({
    price:"102",
    quantity:10,
    type:"LIMIT",
    user:"VB"
})
BICUSDOrderBook.ask.push({
    price:"110",
    quantity:10,
    type:"LIMIT",
    user:"Virat"
})

BICUSDOrderBook._sort("SELL")
console.log(BICUSDOrderBook);