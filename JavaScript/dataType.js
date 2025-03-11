let name = "Abhishek"; // String
console.log(typeof name); // string

let age = 23; // Number
console.log(typeof age); // number

let isMale = true; // Boolean
console.log(typeof isMale); // boolean

let x; // Undefined
console.log(typeof x); // undefined

let A = null; // Null
console.log(typeof A); // object (historical JavaScript quirk)

let myName = { firstName: "Abhishek", lastName: "Kalantre" };
console.log(typeof myName); // object
console.log(myName.firstName);
console.log(myName.lastName);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(typeof numbers); // object (arrays are special objects)

function greet() {
  return "Hello!";
}
console.log(typeof greet); // function

let symbolVar = Symbol("symbol");
console.log(typeof symbolVar); // symbol

let bigNumber = 124567890987654321258456n;
console.log(typeof bigNumber); // bigint
