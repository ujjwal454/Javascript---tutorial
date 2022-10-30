const users =[
    {userID:1,firstname:"ujjwal",gender:"male"},
    {userID:2,firstname:"kamali",gender:"female"},
    {userID:3,firstname:"kamal",gender:"other"}
]
// const [user1, ,user2] = users;
// console.log(user2.firstname);
//  hume ek object banana h jiski firstname first boject se lena h or gender second me se 
// const[{firstname: user1name}, {gender:user2gender}];//doubt
// console.log(user1name,user2gender);//doubt


const [user1,user2,user3] = users
const [{firstname,gender},,{userID}]= users;
console.log(firstname);
console.log(gender);
console.log(userID);



