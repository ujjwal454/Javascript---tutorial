//  sets it is itterable
// it stores data 
// sets also have its own methods
// no index bassed  access 
// order is not guaranteed
// it stores only unique value repeted values get ignore
const numbers =new Set()
// add method
numbers.add(1);
numbers.add(2)
numbers.add(["item1" , "item2"])
numbers.add(["item3" , "item4"])
console.log(numbers);
// it is itterable so we can use for of loop here or for 
for(let char of numbers){
    console.log(char);
}
console.log(numbers.has(10));
// uses of sets
// when we have unique
// or we dont want to repeate any value


//  we can also pass array to set by creating a new set
const myarray = ["hello",1,1,1,1,1,2,2,3,4,4,6];
const uniqueElement = new Set (myarray);
console.log(uniqueElement);

//  we canot find the length of sets directly but by using for of we can find it 

let length =0;
for (let element of uniqueElement){
    length++
}
console.log(length);
