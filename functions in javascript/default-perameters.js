//   default perameter
//  previously back in before 2015 we set default perameters like this
function gg(a,b){
    if(typeof b==="undefined"){
        b=0;
    }
    return a+b;
}
const ans = gg(5);
console.log(ans);
//  but js has made things easy for us now
const multply = (a,b)=>{
    if(typeof b==="undefined"){
        b=0
    }
    return a*b;
}
console.log(multply(2));