// trim method
// The trim() method removes whitespace from both sides of a string.

// The trim() method does not change the original string. it gives a new string because strings are immutable
const Name = "  ujjwal  "
console.log(Name.length);
let newName = Name.trim();
console.log(newName.length);// it gives -> "ujjwal"
// slice method
// this method takes two arguments first is start and second is end
let numbers =[0,1,2,3,4]
                            // statrting index   and n-1 end index  
let newnumbers = numbers.slice(0,2)
console.log(newnumbers); // output = [0,1]

