let items = document.getElementsByTagName("a");
//  the upper command returns a html collection
console.log(items);
// itteraation using simple for loop
// for(let i=0; i<items.length;i++){
//     const navitems = items[i];
//     navitems.style.backgroundColor="#fff";
//     navitems.style.color="green";
// }

//  itteration using for of loop
// for(let navitems of items){
//     // const navitems = items;
//     navitems.style.backgroundColor="#fff";
//     navitems.style.color="green";
// }

// itteration using for each method

let newitems = Array.from(items);
newitems.forEach((items)=>{
    items.style.backgroundColor="#fff";
    items.style.color="green";
})