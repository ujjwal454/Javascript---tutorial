// clone a array
// slicing method
let array1 = ["item1", "item1"];
let array2 = array1.slice(0);
console.log(array2 === array1);
array1.push("item1");
console.log("element after pushing element");
console.log(array1);
console.log(array2);
// spread operators
let greet = ["hi", "hello", "sup!", "ok"];
let greet2 = [...greet]; // cloned a array using spread operator
greet.push("helloo");
console.log(greet === greet2);
console.log(greet2);
console.log(greet);
// concat method
array3 = [].concat(array2); //concat method
console.log(array3);
//  push pop slice shift unshift method
