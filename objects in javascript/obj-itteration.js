const data ={
    name:"ujjwal",
    age:19,
    hobbies:["gaming","sleeping","music","eating"]
}
//  for in loop 
for(key in data){
    console.log(data[key]);
}
//  if we want to print the key an value together
for(bin in data){
    console.log(`${bin} : ${data[bin]}`);// tempered concatination method
}
for(uj in data){
    console.log(key, ":", data[uj]);
}
//  using for of method to itterate the object
for(gy of Object.keys(data)){
    console.log(data[gy]);
}