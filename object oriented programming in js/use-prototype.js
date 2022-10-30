//  now we see the use of prototype in function
function Createuser(firstname, age) {
    const user = Object.create(Createuser.prototype);
    user.firstname = firstname;
    user.age = age;
    return user;
}
Createuser.prototype.about = function(){
    return `${this.firstname},${this.age}`
} 
Createuser.prototype.is18=function(){
    return this.age >= 18;
}
Createuser.prototype.sing=function(){
    return 'lalalla';
}
const user1 = Createuser("ujjwal",18);
console.log(user1);
const is18 = user1.is18();
console.log(is18);
