//  it is also an array method
const numbers =[1,2,3,4,5,6,7,8,9,10];
function isEven(number){
    return number % 2===0;
}
const ans = numbers.filter(isEven);
console.log(ans); 
// so it takes the true value to a new array
//  it can also takes two arguments first one passes indexvalue and second one passes index

// we can also define a callback function inside filter peranthesis
const isodd = numbers.filter((number)=>{
    return number%2!==0;
})
console.log(isodd);