function singHappyBirthday(){
    console.log("happybirthday to you");
}
singHappyBirthday();
function twoPlusFour(){
    console.log(2+4);
}
twoPlusFour();
// dry = dnt repeat yourself
// reuasble function
function sum(num1,num2){
    return num1 + num2;
}
const umm =sum(10,5);
console.log(umm);
// function  which check odd and even
function checkoddEven(n){
    if(n%2===0){
        return true;
    }
    else{
        return false;
    }
}
let evennumber = checkoddEven(1);
console.log(evennumber);
//  function which takes two argument one is for array and another is for target if the target meets with a value in array which is same as the target then we need to return the index of the value
function checkindex(array,target){
    for(i in array){
        if(array[i]===target){
            return i
        }
        // else{
        //     return "value not in array" // doubt
        // }
    }
    return " no value in array"

}
// function checkIndex(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//         // else{
//         //     return "value not in array"
//         // }
// why i can not use else here
//     }
//     return "no value found";
// }
let number=[1,2,3,4,5];
let checkIndexn = checkindex(number,3);
console.log(checkIndexn);
