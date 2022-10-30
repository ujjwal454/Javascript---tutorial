//  creatig our own methods
// method => function inside object
const objectinfo =function(){
    console.log(`person name is ${this.firstname}`);
}
const person = {
    firstname:"ujjwal",
    // about:()=>{  i cant use arrow function here?
    about:objectinfo
}
person.about();

// we can also create that function outside the object
 

// and we can use that function with diffrent object also


const person1 = {
    firstname : "nitish",
    age:19,
    about:objectinfo   
}
person1.about();