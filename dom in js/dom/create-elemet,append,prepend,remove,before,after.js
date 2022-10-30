// append
// const newelement = document.createElement("li");
// const newtext =  document.createTextNode("see i created it using javascript");
// newelement.append(newtext);
// const element=document.querySelector("#todo");
// console.log(element);
// element.appendChild(newelement);



//  prepend
// const newelement = document.createElement("li");
// const newtext =  document.createTextNode("see i created it using javascript");
// newelement.append(newtext);
// const element=document.querySelector("#todo");
// console.log(element);
// element.prepend(newelement);// it will add task before the current entered task

// remove
// const element = document.querySelector("#todo li");
// console.log(element);
// element.remove();


// insert before
// const newelement = document.createElement("li");
// // const newtext =  document.createTextNode("see i created it using javascript");
// // newelement.append(newtext);
// newelement.textContent="see i created it using js";
// const element=document.querySelector("#todo");
// element.before();
// console.log(newelement);

//  insert after
const newelement = document.createElement("li");
// const newtext =  document.createTextNode("see i created it using javascript");
// newelement.append(newtext);
newelement.textContent="see i created it using js";
const element=document.querySelector("#todo");
element.after();
console.log(newelement);