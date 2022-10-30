// we dont need to define a key and then method for method inside object
// we can define it using short syntax
 



const  likethis = {
    firstname:"ujjwal",
    age:19,
    about(){
        console.log(this.firstname,this.age)
    }
}
likethis.about();