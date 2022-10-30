class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    issupercute(){
        if(age <=1){
            return `${this.name} is super cute`;
        }
        return this.name,"is cute";
    }
}

// we can also inherit the property of animal to diffrent class
class dog extends animal{

}


// now we can use all the property of animal in dog as well

const tommy = new animal("tommy",1);
console.log(tommy);
