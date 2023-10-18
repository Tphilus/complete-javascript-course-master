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

// // Function Decuration
// function calcAge1(brithYeah) {
//   return 2037 - brithYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression

// const calcAge2 = function (brithYeah) {
//   return 2040 - brithYeah;
// };

// const age2 = calcAge2(2000);
// console.log(age2);

// =====================================
//         Arrow Function
// =====================================

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} year`;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));

// ===========================================
//         Function Calling Other Function
// ===========================================

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// ===========================================
//         Function Calling Other Function
// ===========================================

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUnitRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   //   return retirement;
// };

// console.log(yearsUnitRetirement(1991, "Jonas"));
// console.log(yearsUnitRetirement(1970, "Mike"));

// ===========================================
//         Challenge 1
// ===========================================

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);
