// forEach

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((item, index) => {
  console.log(`Item:${item}, Index: ${index}`);
});

let fruit = ["Apple", "Kiwi", "Mango"];
fruit.forEach((items) => {
  console.log(items);
});

//map

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubaled = numbers.map((num) => num * 2);
console.log(doubaled);

//filter
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumber = number.filter((num) => {
  return num % 2 == !0;
  //return num % 2 === 0;
});
console.log(oddNumber);

//find
let userNum = [16, 25, 34, 43, 52, 11, 74, 89, 49];
let findNum = userNum.find((num1) => num1 > 50);
console.log("Find Number:", findNum);

//indexOf
let fruitName = ["Apple", "Banana", "Cherry"];
let findIndex = fruitName.indexOf("Banana");
console.log("FindIndex:", findIndex);

//sort
let userNum1 = [16, 25, 34, 43, 52, 11, 74, 89, 49];
userNum1.sort((a, b) => b - a);
console.log(userNum1);

//reduce
let num2 = [1, 2, 3, 4, 5];
let sum = num2.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

//slice vs splice

//slice
const userFruit = ["APPLE", "BANANA", "KIWI", "CHERRY"];
const slicedFruit = userFruit.slice(1, 3);
console.log(slicedFruit);
console.log(userFruit);

//splice
const splicedFruit = ["APPLE", "BANANA", "KIWI", "CHERRY"];
const splicedFruit1 = splicedFruit.splice(1, 2, "x");
console.log(splicedFruit1);
console.log(splicedFruit);

//concat
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(arr1.concat(arr2));

//flat
const nestedArray = [1, 2, 3, [5, 6], [7, 8, [9, 10]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);
console.log(flattenedArray.flat(2));

//spread operator(...)
let xNum = [1, 2, 3];
let yNum = [6, 7, 8];
console.log([...xNum, ...yNum]);

//Destructuring
let user1 = [1, 2, 3];
let [a, b, c] = user1;
console.log(a);
console.log(b);
console.log(c);
