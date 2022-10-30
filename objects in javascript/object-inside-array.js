const users =[
    {userID:1,firstname:"ujjwal",gender:"male"},
    {userID:2,firstname:"kamal",gender:"male"}
]
// impoertant note -> for in index deta h, for of index ki value deta h
// console.log(users);
// for(let  keys in users){
//     console.log(users[keys]);
// }
for(let keys of users){
    console.log(keys);
}