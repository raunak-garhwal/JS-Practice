
// IIFE
(function () {
  console.log("This is an IIFE Function...");
})();


// Object Destructuring
let obj = {
  alphabet: 1,
  ballbearing: 4,
  chinatown: 6,
};

let { alphabet: al, chinatown: ch } = obj;
console.log(al, ch);


// Array Destructuring
let [c, d] = [1, 3, 5, 6];
console.log(c, d);


// Rest Operator
let [e, f, ...rest] = [1, 8, 4, 3, 5, 6];
console.log(e, f, rest);


// Spread(...) Operator
function sum(a, b, c) {
  return a + b + c;
}

let arr = [2, 5, 6];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); // Efficient Way

let object = { ...arr };
console.log(object);


// Console.table
let fullName = "Leo";
let age = 22;
let course = "MCA";
let rollNo = 28;

console.table([fullName, age, course, rollNo]);


// Some Important results
console.log(true);
console.log(+true);
console.log(+"");


// No OutOfIndex error
let array = [1, 3, 4, 5];
array[30] = 7;
console.log(array);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
