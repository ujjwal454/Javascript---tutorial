

function returnPromise(){
    return new Promise((resolve,reject)=>{
        bucket =["rice","maze","cofee","salt","vegetable"]
        if(bucket.includes("vegetable")&&bucket.includes("rice")&&bucket.includes("salt")){
            resolve("freid rice");
        }else{
            reject("couldnt do it")
        }        
    })
}
returnPromise().then((myfriedRice)=>{
    console.log("lets eat",myfriedRice);
},(error)=>{
    console.log(error)
})
