let arr = ["Apple", "Banana", "Mango", "Kiwi"];
console.log(arr);

console.log(arr.length);

console.log(arr[3]);

arr.pop();
console.log(arr); // remove last arr

arr.shift();
console.log(arr); //remove first arr

arr.push("Pineapple");
console.log(arr); //add new arr in the last

arr.unshift();
console.log(arr);

let x = ["Param", 25];
x[1] = 24; //update
console.log(x);
