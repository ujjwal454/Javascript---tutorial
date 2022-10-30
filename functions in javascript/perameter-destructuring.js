const obj ={
    Name :"ujjwal",
    age:19,
    favThings:"[playing games]"
}
function peraDestructring({Name,age,favThings}){  
    console.log(Name);
    console.log(age);
    console.log(favThings);
}
peraDestructring(obj);