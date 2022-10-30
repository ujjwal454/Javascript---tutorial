//  another way to declarae a funciton
const famfunction = ()=>{
    console.log("your function is ready to use")
}
famfunction();
const checkindex=(array,target)=>{
    for(i in array){
        if(array[i]===target){
            return i
        }
        // else{
        //     return "value not in array"
        // }
    }
    return " no value in array"

}
console.log(checkindex([1,2,3,4],4));