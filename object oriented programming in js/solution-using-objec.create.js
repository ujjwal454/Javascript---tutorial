//  there is one more way by which we can use the methods which we have not defined in the other objects

//  to do that we need to create object using object.create method
// object.create takes a perameter inside its peranthesis
//  the perameter creates proto which declare as __proto__ or [[prototype]]

//  the funciton of prototype is this if we have not created a key value pair inside a object
// then javascript itself search  key value pair to its proto

const usermethods ={
    about:function(){
        return `${this.firstname},${this.lastname},${this.age},${this.addrress}`
    },
    is18:function(){
        return this.age >= 18;
    }
}
const createuser = (firstname,lastname,email,age,addrress)=>{
    const user= Object.create(usermethods);// peranthesis takes __proto__
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.email=email;
    user.addrress=addrress;
    return user
}
//  now we could use the method in new created user by that funciton
// due to __proto__

user1 = createuser("ujjwal","gupta","kfjknfjkl",19,"myaddress");
console.log(user1);
// now we will call the method which we have defined in the user1
const about = user1.about();
console.log(about);