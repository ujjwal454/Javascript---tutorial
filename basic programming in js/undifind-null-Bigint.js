// undefined 
// if we create an element and do not asign any value with it then it returns undefined but it will show an error if we created an element using const 
// let Name;
// var hello;
// const hi;
// console.log(Name);
// console.log(hello);
// console.log(hi); 


// big int
//  javacript has a limit till it can be deal with number 
// if we want to cross that limit to do operations then we use biging
// to convert number to bigint 
let Nmber = BigInt(12); //or
let number = 12n;
console.log(Nmber);
console.log(number, typeof number);


// null -> it means nothing, empty
// if  we pass the variable and set its value to null for preventing error.
// for example
const firstname = null;
console.log(firstname);
console.log(typeof firstname); // it should show null type but there is a bug in js which shows null to object
// but y they not fix that the reason behind this is because allot people typed thier code, framework considered that bug if they change it  all the code and framwork also needed to be correct
