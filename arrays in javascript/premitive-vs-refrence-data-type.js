// primitive 
let num1= 6;
let num2=num1;
console.log(`value of num 1 is ${num1}`);
console.log(`value of num 2 is ${num2}`)
num1++
console.log(`value of num 1 is ${num1}`);
console.log(`value of num 2 is ${num2}`); // in primitive data type the incriminated value not comes in item 2
// refrence 
let array1 = ["item1","item2"];
let array2=array1;
console.log(`the value of array1 is ${array1}`)
console.log(`the value of array2 is ${array2}`)
array1.push("hello");
console.log(`the value of array2 is ${array2}`)// here incremanted value get in array 2 also

