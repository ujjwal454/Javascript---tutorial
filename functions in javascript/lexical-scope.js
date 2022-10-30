//  it means if the another function craeted inside a function then the inner function have the reach to outer global atmosphere of the function as well as function in which it  is already created
const newvalue ="mynewvalue"
function hello(){
    const value = "myvalue";
    const inside =()=>{
        const insideValue = "imINside";
        console.log("see it can acces the value outside the function",value);
        console.log("it can also access the value outside the function",newvalue)
    }
    console.log(value);
    inside();
    // console.log("but the main function is not access to the value inside the inner function",insideValue);
    console.log("it can also access the value outside the function",newvalue);
}
hello();