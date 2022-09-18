const prices = [9.99,1.50,19.99,49.99,30.50];

//let total = 0;
//for( let price of prices){
  //  total += price
//}
//console.log(total)

//const  total =prices.reduce((total, prices) => {
//    return total + price
//})


const  total =prices.reduce((total, price) => total + price)
    


const minPrice =prices.reduce((min,price) => {
    if(price < min){
        return price;
    }
    return min;
})



const evens = [2,4,6,8];

evens.reduce((sum,num)=> sum+num)




//key


const person =