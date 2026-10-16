// ===================== Task #1 =====================
// Biography using 'var' and primitive types
var fullName = "Ali Khan";          // string
var age = 21;                       // number
var isStudent = true;               // boolean
var cgpa = 3.4;                     // number

console.log("----- Task 1: Biography -----");
console.log("My name is " + fullName + ". I am " + age + " years old.");
console.log("Student: " + isStudent + ", CGPA: " + cgpa);

// Biography as a JS object (with nested objects)
var biography = {
  name: "Ali Khan",
  age: 21,
  hobbies: ["coding", "cricket", "reading"],
  address: {
    street: "Street 5, Sector A",
    city: "Mansehra",
    province: "Khyber Pakhtunkhwa",
    country: "Pakistan"
  },
  degreeProgram: {
    title: "BS Computer Science",
    university: "Some University",
    semester: 5
  }
};

// Print values individually (not the whole object)
console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Hobbies: " + biography.hobbies.join(", "));
console.log("Address: " + biography.address.street + ", " + biography.address.city + ", " +
  biography.address.province + ", " + biography.address.country);
console.log("Degree: " + biography.degreeProgram.title + " at " +
  biography.degreeProgram.university + " (Semester " + biography.degreeProgram.semester + ")");


// ===================== Task #2 =====================
// Next prime after a given prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function nextPrime(p) {
  let candidate = p + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}

console.log("\n----- Task 2: Next Prime -----");
let givenPrime = 11; // hardcoded
console.log("Prime after " + givenPrime + " is " + nextPrime(givenPrime));


// ===================== Task #3 =====================
/**
 * Function takes array of numbers and returns
 * @param {array of numbers} numbers
 * @returns string in following format: "(123) 456-7890"
 */
function createPhoneNumber(numbers) {
  let n = numbers.join("");
  return "(" + n.substring(0, 3) + ") " + n.substring(3, 6) + "-" + n.substring(6);
}

console.log("\n----- Task 3: Phone Number -----");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890


// ===================== Task #4 =====================
// roundMe: 0 args -> 0, 1 arg -> number, N args -> array
function roundMe() {
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return Math.round(arguments[0]);
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result.push(Math.round(arguments[i]));
  }
  return result;
}

console.log("\n----- Task 4: roundMe -----");
console.log(roundMe());          // 0
console.log(roundMe(4.7));       // 5
console.log(roundMe(4.7, 4.4));  // [ 5, 4 ]


// ===================== Task #5 =====================
// Generic helper so abs, ceil and floor behave exactly like roundMe
function makeMultiArgFn(mathFn) {
  return function () {
    if (arguments.length === 0) return 0;
    if (arguments.length === 1) return mathFn(arguments[0]);
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
      result.push(mathFn(arguments[i]));
    }
    return result;
  };
}

var abs = makeMultiArgFn(Math.abs);
var ceil = makeMultiArgFn(Math.ceil);
var floor = makeMultiArgFn(Math.floor);

console.log("\n----- Task 5: abs, ceil, floor -----");
console.log(abs());              // 0
console.log(abs(-4.7));          // 4.7
console.log(abs(-4.7, 4.4));     // [ 4.7, 4.4 ]
console.log(ceil());             // 0
console.log(ceil(4.2));          // 5
console.log(ceil(4.2, 4.9));     // [ 5, 5 ]
console.log(floor());            // 0
console.log(floor(4.7));         // 4
console.log(floor(4.7, 4.4));    // [ 4, 4 ]


// ===================== Task #6 =====================
// Sum of all multiples of x or y below z
function sumOfMultiples(x, y, z) {
  let sum = 0;
  for (let i = 1; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log("\n----- Task 6: Sum of multiples -----");
console.log(sumOfMultiples(3, 5, 10));   // 23
console.log(sumOfMultiples(3, 5, 1000)); // 233168
