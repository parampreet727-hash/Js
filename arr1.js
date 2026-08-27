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
userNum1.sort((a,b)=>b-a);
console.log(userNum1);
