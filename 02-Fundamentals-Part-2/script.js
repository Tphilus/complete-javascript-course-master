// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(" I can drive :D");

// =====================================
//         Function
// =====================================

// function logger() {
//   console.log("My name is Jonas");
// }
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(10, 50);
// console.log(appleJuice);

// const orderOranges = fruitProcessor(0, 29);
// console.log(orderOranges);

// const num = Number("23");

// ============================================================
//         Function Decuration vs Function Expression
// ============================================================

// Function Decuration
function calcAge1(brithYeah) {
  return 2037 - brithYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression

const calcAge2 = function (brithYeah) {
  return 2040 - brithYeah;
};

const age2 = calcAge2(2000);
console.log(age2);
