// new keyword

function createuser(firstname,age){
    this.firstname=firstname;
    this.age=age;
}
createuser.prototype.about=function(){
    console.log(this.firstname, this.age);
}
createuser.prototype.is18=function(){
    return this.age >= 18;
}
const user1 = new createuser("ujjwal",19);
console.log(user1);

// new is doing 3 things here
// 1,  it creates a empty object here
// 2 making the value of this = variable used to call the function and return the object
// 3 it creates- a link for proto using prototype of the function

//  now we can use the methods for user1 also
user1.about();
console.log(user1.is18()); 