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

// if acces the keys using for in loop it will also give us the keys which are in our prototype
//if we not want to access the key from prototype we need to set condition
// with the help of hasOwnProperty

for(let keys in user1){
    if(user1.hasOwnProperty(keys)){
        console.log(keys);
    }
}
