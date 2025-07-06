// const arr = [12, 13, 4, 6, 7, 8];

// const [a, b, c, d] = arr;

// console.log(a, b, c, d);

// const obj = {
//   name: "jhon",
//   address: "Itahari",
//   email: "jhon@gmail.com",
//   password: "123213",
// };

// const myFun = (newObj) => {
//   const { name, address, password, email } = newObj;
//   console.log(newObj.name, ":From obj");

//   console.log(name, address);
// };

// myFun(obj);

// rest and spread operator
// const arr1 = [12, 13, 4, 6, 7, 8];
// const arr2 = [10, 15, 118, 19];

// const newArr = [...arr1, ...arr2]; //spread operator
// console.log(newArr);

// const [a, b, c, d, ...others] = arr1; //rest operator

// console.log(others);

// const obj = {
//   name: "jhon",
//   address: "Itahari",
//   email: "jhon@gmail.com",
//   password: "123213",
// };

// const { password, ...rest } = obj;

// console.log(rest);

const arr1 = [12, 13, 4, 6, 7, 8];
arr1.map((itm, idx) => {
  console.log("Item: " + itm + " in index: " + idx);

  console.log(`Item: ${itm} in index: ${idx}`);
});
