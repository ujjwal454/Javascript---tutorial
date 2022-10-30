//  diffrence between dot and bracket notaion
const data ={
    name:"ujjwal",
    age:19,
    hobbies:["gaming","sleeping","music","eating"],
    "personal hobbies":"playing guittar"
}
// now we cannot acces the personal hobbies key from using dot notation
// so we have to use the bracket notations here
console.log(data["personal hobbies"]);



// addinga a key value from a variable
const key = "email"
data[key]="estyujjtwal512@gmail.com"
console.log(data);