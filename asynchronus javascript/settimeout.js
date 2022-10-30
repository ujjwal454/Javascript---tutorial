// set timeout is not a javascript function
// it is the function provided by our browser 
// it takes a call back function and a time delay value 
// it basically delay to run a funciton inside the function

// for ex

console.log("script start");
setTimeout(()=>{
    console.log("i got delayed")
},0)//1000 ms = 1s
for(let i = 1; i<100;i++){
    console.log("see i runed before my turn")
}
console.log("script end");

// every line of code runed before the settimeout

