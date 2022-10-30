const array = [1, 2, 3, 4, 5, 6];
// array.forEach((items, index) => {
//   array[index] = items * 2;
// });
// console.log(array);

//  it does'nt return any thing it manuplates the orignal array

// map

//  it is a array method it takes a callback and that call back takes currentvalue,index,array as the argument and the second that map takes is the this value
// unlike for eaxh it doesnt  manuplates the orignal array intead it returns the new array with updated values
// the second diffrence is we can chain more array function after map closes
const multBy2 = array
  .map((item) => {
    return item * 2;
  })
  .filter((current, index) => {
    return index < 4;
  })
  .reduce((accum, current) => {
    return accum + current;
  }, 0);

console.log(multBy2);
console.log(array);

// sort
//  it is the array method it manuplates the orignal
// it is used to sort the element inside an array for every letter there is a unique code
//  if we want to sort the array that contains the string we can directly use sort on it
// but if it contain number than we need to sort it with a callback function

const straArr = ["b", "A", "a", "B"];

// array.sort((a, b) => b - a);
// console.log(array);

// splice method

// arguments   ->   startingIn endInd  newValue

// straArr.splice(1, 1);
// if we want insert something without deleting any value we can do this
straArr.splice(1, 0, "inserted value");
console.log(straArr);

const obj1 = {
  name: "Ujjwal",
  meth: function (age) {
    return `hello ${this.name} your age is ${age}`;
  },
};

const obj2 = {
  name: "Kamal",
};

console.log(obj1.meth(19));
console.log(obj1.meth.call(obj2, 20));

// bind  => binds instead of calling the fucntion it returns the fucntion and we  can call it later also

const func = obj1.meth.bind(obj2, 20);
console.log(func());
