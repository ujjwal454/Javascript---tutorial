// fill method fill specified elements in an array with a value
// it overwrites the orignal array or we can also build a new array 
// value , start , end
const array = new Array(10).fill(1,                             0,                                                       10);
//                               value to be filled in array,   index through which value will be filled,                end index value                  
console.log(array);
 
//  end value is n-1 
// we can also overwrite an array
const myarray = [2,4,3,9,10];
const ans =(myarray.fill(6,2,4));
console.log(ans);
// doubt if it overwrites an array y it is not console.log without an new array
