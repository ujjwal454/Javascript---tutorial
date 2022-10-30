const numbers = [2,4,6,8,10];
const vheck = (numbers.every((num)=>num%2===0));
console.log(vheck);


//  every method returns a boolean for overall value of a arary
// it just check all the value of the arary and returns a boolean


const cart =[
    {pcode:01,pname:"mobile",price:4100},
    {pcode:02,pname:"acrt",price:5000},
    {pcode:03,pname:"rod",price:200},
    {pcode:04,pname:"laptop",price:1000},
]
const checkprice = cart.every((value)=>value.price<30000);
console.log(checkprice); 