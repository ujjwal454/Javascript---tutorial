const numbers = [3,1,7,8];
// this method checks all the element of the array and if any  of them satisfying the condition then it returns boolean true ad f there not any value satisfy then it returns false
const ans = console.log(numbers.some((num)=>num%2===0));

const cart =[
    {pcode:01,pname:"mobile",price:4100},
    {pcode:02,pname:"acrt",price:5000},
    {pcode:03,pname:"rod",price:200},
    {pcode:04,pname:"laptop",price:1000001},

]
const value = cart.some((cartprice)=> cartprice.price>1000000);
console.log(value);