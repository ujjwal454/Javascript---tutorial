const fruits =["banana", "mango", "grapes", "guava"];
const fruit2=[];
for(let fruit in fruits){// gives the index number
    console.log(fruits[fruit])
    fruit2.push(fruits[fruit].toUpperCase());
}
console.log("fruits2",fruit2);