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
class dog extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `${this.name} can run by ${this.speed} km/hr`;
    }
}
// now we want  to use one more perameter in dog which is speed 
// so we need to define the constructor for using speed
// super keyword is defining the inherit peramter name and age from constructor animal
// and now we can use name,age speed together

//  for example
const tommy = new dog("tommy",2,45);
console.log(tommy);
console.log(tommy.run());