// const age = 15;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wind";
// } else {
//   drink2 = "water";
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// Solution

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
