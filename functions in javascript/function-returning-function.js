function myfunc(){
    return function(){
        return "hello world"
    }
}
const ans = myfunc();
console.log(ans());