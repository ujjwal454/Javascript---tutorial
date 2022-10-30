let call = (myname)=>{
    console.log(`my name is ${myname}`)
}
let callback= (call)=>{
    call(myname);
}
callback(call("ujjwal"));
