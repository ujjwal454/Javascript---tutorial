//  xhr -> xml https request
//  xhr  provides us resorses from backend 
//  step to achive that 
// step 1 create xhr request
const url = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// step 2 open the url
// to open we need an xhr server url code
console.log(xhr);// here the ready state is zero ->  which means request created but not opened
// now we need to open it useing open method
// open method takes two argument 
// 1 argument -> how we want to open url for ex -> get
// 2 argument -> url
xhr.open("GET",url);
console.log(xhr)// here ready state is 1 ->  request has been opened
// xhr.onreadystatechange = function(){
//     console.log(xhr); // calls function for two times when geting the request on readystate -> 3
//     // if request  made successfully sends then the its ready state is -> 4
//     console.log(xhr.response);
//     if(xhr.readyState===4){
//         const response = xhr.response
//         // json is java script object notation
//         data = JSON.parse(response); // json.parse => it converts the javascript object notation to javascript object
//         console.log(data);
//     }
// }
xhr.onload = function(){
    console.log(xhr.readyState);
    const response = xhr.response();
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();