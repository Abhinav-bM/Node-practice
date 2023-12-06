// // ES modules format

// // first pattern
// import add from "./Addition.mjs";
// console.log(add(2,3));

// // second pattern
// import add from "./Addition.mjs";
// console.log(add(2,3));

// // third pattern
// import math from "./Addition.mjs"
// console.log(math.add(2,2));
// console.log(math.substraction(3,2));
// // OR
// import math from "./Addition.mjs"
// const {add, substraction} = math;
// console.log(add(2,2));
// console.log(substraction(2,2));

// // named Exports

// // first Way
// import * as math from "./Addition.mjs"
// const {add, substraction} = math;
// console.log(add(2,2));
// console.log(substraction(3,4));
// second way
// import {add, substraction} from "./Addition.mjs"
// console.log(add(1,2));
// console.log((3,4));