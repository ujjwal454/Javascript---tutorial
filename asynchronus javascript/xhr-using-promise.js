const url = "https://jsonplaceholder.typicode.com/posts"
function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=function(){
            if(xhr.status >=200 && xhr.status < 300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("something went wrong"));
            }
        }
        xhr.onerror =function(){
            reject(new Error("something went wrong"));
        }
        xhr.send();
    })
}
sendRequest("GET",url)
    .then((response)=>{
        const data = JSON.parse(response);
        console.log(data)
        return data
    })
    .then((data)=>{
        console.log(data[3].id);
    })