const array =[1,2,3,4,5];
const sum =array.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue
},0);
// we can also pass a ininital value so the current value of accumulator is 100 and the current value is 1
console.log(sum); 
// accumulator , currentvalue return
//  1   , 2,   3
// next time the value of accumulator is = to retrn value so,
// 3,3,6
// 6,4,10
// 10,5,15
//  firs value of accumulator is the value at 0th index of the array


const usercart =[
    {productid:1, productname: " mobile" , price:12000},
    {productid:2, productname: "utensils" , price:1000},
    {productid:3, productname: "laptop" , price:10000},
]
// we need the sum of price
const sumOfPrice = usercart.reduce((totalprice,currentprice)=>{
    return totalprice +currentprice.price;
},0)// doubt what happening here without an initial value
console.log(sumOfPrice);