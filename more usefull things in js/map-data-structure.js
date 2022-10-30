// maps are itterable because we can use for of loop here 

// in map data  structure we can store any data type key
//  number,string,array 
//value add by using set method
// we can get the value by using get method 
const person = new Map();
// adding key value pair to the person
person.set("firstname","ujjwal");
person.set("age","19");
person.set(1,"one");
console.log(person.get("firstname"));
// getung all the keys of the map by the help of for of loop and keys() method
for(let keys of person.keys()){
    console.log(keys);
}
//  another method to create a map
const user = new Map([["firstname","ujjwal"],["age",19]]);
                    //   frirst and second array                   
console.log(user);

//  creating a map using an object

const person1 ={
    name:"ujjwal",
    id:1
}
 const person2 ={
    name :"kamal",
    id:2
 }

const mymap = new Map();
mymap.set(person1, {age:8, gender:"male"});
mymap.set(person2, {age:7, gender:"male"});
console.log(mymap);


// getting diffrent values fom our map
console.log(mymap.get(person1).id);// doubt
console.log(mymap.get(person2));// doubt




//  realistic example of map


