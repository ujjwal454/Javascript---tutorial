//  if same key is used for diffrent value it will overwrite the first one
const obj1 ={
    key1:"value1",
    key2:"value2",
} 
console.log(obj1);
const obj2 ={
    key3:"value3",
    key4:"value4",
} 
const newobjec={...obj1,...obj2};
console.log(newobjec)
//  converting arrrays into object
const arrrays =["a","b"]
const obj={...[arrrays]};
console.log(obj);
//  if we creating object using spread operator than the index of the string or array becomes key and the index value becomes the valueu of the objects
// for example
let string="abcdf"
const favobj = {...string};// or 
console.log(favobj)
const famobj ={..."abc"};
console.log(famobj);
