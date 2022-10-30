// it is also not a js funciton it is also a browser which browser provides us 
// so it is also asynchronus 
//  promises -> the promise takes a callback funciton which contains two perametere one is resolve, another is reject 
//  both perameter have there specific condition if any of them get true the condition implimented

// for ex


//  producing the promice 

console.log("script start");

bucket =["rice","maze","cofee","salt","vegetable"]
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable")&&bucket.includes("rice")&&bucket.includes("salt")){
        resolve("freid rice");
    }else{
        reject("couldnt do it")
    }
});


//  consuming the promise


// then it helps to consume a promise
//  then takes two callback function 
// the first callback returns resolved value (if resolved)
//  the second callback returns rejects value (if rejected)
 
friedRicePromise.then((myfriedRice)=>{
    console.log("lets eat",myfriedRice);
},(error)=>{
    console.log(error)
})

console.log("script end");
