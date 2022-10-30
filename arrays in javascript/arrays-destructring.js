const myarray=["value1","value2","value3"];
// let var1 =myarray[0];
// let var2 =myarray[1];
// console.log("value of variable 1",var1);
// console.log("value of variable 2",var2);



// anotehr way to do this
// let[mayvar1,mayvar2]=myarray;
// console.log("value of variable 1",mayvar1);
// console.log("value of variable 2",mayvar2);


// if we want to give ous second variable value3
let[mayvar1, ,mayvar2]= myarray;//doubt
console.log("value of variable 1",mayvar1);
console.log("value of variable 2",mayvar2);