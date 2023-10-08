// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;
// let person = "Jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// let age = 23;

// let javascriptIsFun = true;
// javascriptIsFun = "Yes!";
// console.log(javascriptIsFun);
// console.log(typeof true);

// let year;
// year = 1991;
// console.log(typeof year);

const now = 2037;
const ageJonas = now - 1991;
const ageSerah = now - 2018;
console.log(ageJonas, ageSerah);

console.log(ageJonas * 2, ageJonas / 10);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // X = x * X = 400
x++; // x = x + 1
x--;

// console.log(x);

// comparison operators
// console.log(ageJonas > ageSerah);
// console.log(ageSerah >= 18);

// const isFullAge = ageSerah >= 18;

// console.log(now - 1991 > now - 2018);

// let q, y;
// q = y = 25 - 10 - 5; // x = y 10,
// console.log(q, y);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
