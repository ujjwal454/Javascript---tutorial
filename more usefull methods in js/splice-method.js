//  it add and remove elements
// it overwrite the orignal array
//  it takes three perameters 
// 1 start index from which items to be deleted
//  2 end index index till which items to be deleted 
// 3 insertion values if whish to insert the values after deleted
// splice(start,end,insertion values);
const myarray = [1,2,3,4];
myarray.splice(1,1,12);
console.log(myarray); 
mynewarray=[1,2,3,4,5,6,7,8,9,0];
const splicemethod = mynewarray.splice(1,1);
console.log(splicemethod);
