const createuser = (firstname,lastname,email,age,addrress)=>{
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.email=email;
    user.addrress=addrress;
    user.about=function(){
        return  `${this.firstname},${this.age}`
    }
    user.is18=function(){
        return age >= 18;// this ill return true or false
    }

    return user

}
user1 = createuser("ujjwal","gupta","kfjknfjkl",19,"myaddress");
const age = user1.is18();
console.log(age);