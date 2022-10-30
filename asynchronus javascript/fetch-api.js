const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then((response)=>{
        if(response.ok){
          return response.json()  
        }
        else{
            throw new Error("somethig went wrong");
        }
        
    })// fetch do all the work by it self 
    //  it opens the url by using get method by default
    // it sends request 
    // in the end it return a promise 
    // that promise contain xhr value 
    // later again we return data using response.json()
    // and we will get the data
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("inside error")
    })

