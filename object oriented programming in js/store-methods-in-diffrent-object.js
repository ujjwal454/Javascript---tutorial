// const createuser = (firstname,lastname,email,age,addrress)=>{
//     const user={};
//     user.firstname=firstname;
//     user.lastname=lastname;
//     user.age=age;
//     user.email=email;
//     user.addrress=addrress;
//     user.about=function(){
//         return  `${this.firstname},${this.age}`
//     }   
//     user.is18=function(){
//         return age >= 18;// this ill return true or false
//     }

//     return user

// }
 // this is not the right way to declare method to create object
//  if we use this method this will create same function in every object which takes unnecessary functions
// so we should create method in another object and give there refrence (address) to function which create method

//  right way to declare the function

const usermethods ={
    about:function(){
        return `${this.firstname},${this.lastname},${this.age},${this.addrress}`
    },
    is18:function(){
        return this.age >= 18;
    }
}
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
    user.is18=usermethods.about;
    user.is18 = usermethods.is18;
        

    return user

}