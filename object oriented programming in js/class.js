// classes are very easy to use and create
// f we want to create a class for creating a object then 
// we need to give the class a name and then create a constructor inside it
// we can pass the perameters to the constructor inside its peranthesis and all the keys in curly brasis
// we can also defines more methids to  our simply like this name(){}
// we can only create object using the class with the help of new keyword without using new keyword we can not create object 




class creatruser{
    constructor(firstname,lastname,email,age,addrress){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.email=email;
    this.addrress=addrress;
    }
    about(){
        console.log(this.lastname,this.age);
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "llalalal"
    }
}

const user1 =  new creatruser("ujjwal","gupta","email",19,"myaddress");
console.log(user1);


// also we can use all the methods of creatuser

user1.about();
const age = console.log(user1.is18());

