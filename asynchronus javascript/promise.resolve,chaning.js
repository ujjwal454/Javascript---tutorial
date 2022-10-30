const hello = Promise.resolve(5);
hello.then((value)=>{
    console.log(value);
    value += value;
    return value //  it will not return value instead it return the promise with incremented value
})
.then(value=>{
    console.log(value);
})

