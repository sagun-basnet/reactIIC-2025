// let arr = [
//   4,
//   1,
//   2,
//   6,
//   8,
//   "asdfa",
//   false,
//   98.45,
//   [12, 13, 14],
//   myFun(),
//   null,
//   undefined,
//   NaN,
//   { name: "jhon", age: 12 },
// ];

// console.log(arr[8][0]);

// function myFun() {}

// let obj = {
//   age: 12,
//   name: "jhon",
//   email: "jhon@gmail.com",
//   isVerfied: false,
//   myArr: [0, 4, 5, 7, 8, { password: "1232342" }],
//   address: {
//     country: "Nepal",
//     city: "Itahari",
//   },
// };

// console.log(obj.myArr[5].password);

function addFun(a, b) {
  return a + b;
}

const addFun = (a, b) => a + b;

const fun = (a, b) => {};

console.log(addFun(1, () => 2));
