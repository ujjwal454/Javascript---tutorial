//  we cannot use this keyword with arrow function
const user1 ={
    firstname:"ujjwal",
    age:19,
    aboout:()=>{
        console.log(this.firstname,this.age)
    }
}
user1.aboout();
// the value of this here is window object and there is not firstname or age is defined at window object
// so it is showing undifined undifined
