// if we call this without a object this will gives us window object
// const myfunc=()=>{
//     console.log(this)// this creates sometimes problem so before working with this keyword we use strict mode
// }
// myfunc(); 
const myfamfunc = ()=>{
    "use strict" // doubt
    console.log(this);
}
myfamfunc();