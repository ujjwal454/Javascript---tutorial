// static list 
//  the list got by querry selector mehtod are static list
// we have added another li element dynamically and it visible also but not accessable
// const elem = document.querySelector("#todo");
// const alllist=document.querySelectorAll("#todo li");
// console.log(alllist);
// const newelem = document.createElement("li");
// newelem.textContent="item 5";
// elem.append(newelem);

//  live list
const elem = document.getElementById("todo");
const alllist=elem.getElementsByTagName("li");
console.log(alllist);
const newelem = document.createElement("li");
newelem.textContent="item 5";
elem.append(newelem);