// const expr = "Oapayas";
const expr = "hello";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const obj = {
  prop1: "value1",
  prop2: "value2",
};

const { prop1: ujjwal } = obj;
console.log(ujjwal);

// function rand(a = 1, b = 2) {
//   return a + b;
// }
const rand = (a = 1, b = 2) => {
  return a + b;
};
console.log(rand(1, 4));
console.log(rand());
