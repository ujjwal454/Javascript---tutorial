const myarray = ["array", "mat", " fat", "cat"];
const ans = myarray.find((string)=>{
    return string.length === 3
})
console.log(ans);

const users = [
    {firstname:"ujjwal", age : 19},
    {firstname:"anuj", age : 15},
    {firstname:"kinsu", age : 12},
    {firstname:"kamal", age : 14}
];
const newans = users.find((value)=>{
    return  value.age === 19;
})
console.log(newans);
// how to return only name bytaking age in value

