//  promise && settimeout
function mypromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve()
            }else{
                reject()
            }
        },2000)
    })
}
mypromise()
    .then(()=>{console.log("resovled")})//.then takes the resolved value
    .catch(()=>{console.log("rejected")})// .catch takes the rejected value
