const numbers =[4,2,8,6];
// function multiplyby2(number,index){
//     console.log(`index is ${index}, number is${number} multiplication is is ${number*2}`)
// }// how function will know what is index and waht is index value
// for(let i in numbers){
//     multiplyby2(numbers[i],i);
// }
numbers.forEach((num,index) =>{
    console.log(num,index)
})
//  by default the for each or for in loop passes index and for in only index accordingly it gives value to funtion
// in easy wrods it passes the index and index value
