const numbers =[100,212,8,4,1];
// numbers.sort()
// console.log(numbers);


// sort () sort the element of an array
// sort overwrites the orignal array
// sorts the elements a string in alphabatic order
// in javascript the each number small letter and capital letter have a unique code according to the that code the sort method sort the array
// the sort() can also take a call back function to sort 
// sort method is good if we want to sort an array which contains element in strings
// but it not sort so good in numbers element so we need to define a callback funcion 


//  sorting with the use of callback function

numbers.sort((a,b)=>a-b);
console.log(numbers);// this will sort our array in assending order 

const array = ["abb","AABB","bb","dd","D"];
array.sort();
console.log(array);// sort method is good with array containing elements in strings


// sorting with a real life example

const cart =[
    {pcode:01,pname:"mobile",price:4100},
    {pcode:02,pname:"acrt",price:5000},
    {pcode:03,pname:"rod",price:200},
    {pcode:04,pname:"laptop",price:1000},
]
// sorting low to high
cart.sort((a,b)=>a.price-b.price);
console.log(cart);

// sorting high to low

const newcart =[
    {pcode:01,pname:"mobile",price:4100},
    {pcode:02,pname:"acrt",price:5000},
    {pcode:03,pname:"rod",price:200},
    {pcode:04,pname:"laptop",price:1000},
]
newcart.sort((a,b)=>b.price-a.price);
console.log(newcart);

//  there is a problem it overwrite an orignal array if we not want to overwrite the array we need to clone it to another array after sortinig
const cloneit =[
    {pcode:01,pname:"mobile",price:4100},
    {pcode:02,pname:"acrt",price:5000},
    {pcode:03,pname:"rod",price:200},
    {pcode:04,pname:"laptop",price:1000},
]
const mynewcart = cloneit.slice(0).sort((a,b)=>a.price-b.price);//doubt how not to change the orignal array
console.log("mynewcart",mynewcart);