//  we can call a function before function declaration but not on case of function expression

callme()

// function callme(){
//     console.log("yes!")
// }
let callme = ()=>{
    console.log("yes!");
}