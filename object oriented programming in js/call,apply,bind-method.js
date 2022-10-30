//  call
// if we  created a method inside a object 
// and if we want to use that method in other object then we need to call that method and pass the object name inside the paranhesis of call
// we can also pass the perameters if the method have

// for ex 
const user1={
    firstname:"ujjwal",
    age:19,
    about:function(){
        console.log(`first name is ${this.firstname} and age is ${this.age}`)
    }
}
//  so we have object name user 1
//  we have anoter object nemw user2 
const user2 = {
    firstname:"mohit",
    age:21
}
// now  we want to use the about function here

// we can use the about here by call method

user1.about.call(user2);
// bassically call gives this keyword value user2

// we can also do this globally
// and also pass the 

// for ex
function callme(hobby){
    console.log(` the firstname is ${this.firstname}, and the age is ${this.age},`,"hobby",hobby)
}
callme.call(user1,"playing football"); 

//apply -> it is same as call the diffrence is it take the perameter values in a array

// for example
callme.apply(user1,["coding"]);

// bind  -> it do all the things like call do 
//  the diffrence is this -> it return a fucntion if we call that then we can see that method working
//  for ex

const see =callme.bind(user1,"codding");
see();

