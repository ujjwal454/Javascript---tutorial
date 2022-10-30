//  cloning a object
const obj = {
    key1:"value1",
    key2:"value2"
}


// cloning  using assign method
const obj2 = Object.assign({}, obj);
console.log(obj2);


// or we can simply use spread operator
const obj3 = {...obj};
console.log(obj3);
