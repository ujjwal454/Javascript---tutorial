// map method
// map method takes a call back function to run
// it is a array function
// we can make the callback funciton before
const myarray = [1,2,3,4,5,6];
function square(number){
    return number * number
}
const ans = myarray.map(square); // no need to use paranthesis here to call the callback function
console.log(ans);

// we can also  make call back function like this
// it works fine with a variable
const numberminus = myarray.map((number)=>{
    return number-1;
})
console.log(numberminus);


// it can also take two arguments the first one gives the index and the second one gives the index value
//  just like in foreach function


const newarray  = [2,4,6,8,9];
const indexwithsquare = newarray.map((square,index)=>{
    return `index:${index}, ${square * square}`;
})
console.log(indexwithsquare);



// real life example
const users = [
    {firstname:"ujjwal", age : 19},
    {firstname:"anuj", age : 15},
    {firstname:"kinsu", age : 12}
]
const username = users.map((namee)=>{
    return namee.firstname;
});
console.log(username);