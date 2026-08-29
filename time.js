const today = new Date();
console.log(today);

//toString
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleDateString());

const birthday = new Date("2001-06-24");
console.log(birthday);

const dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth() + 1); //bcz index start 0
console.log(dateNow.getDate());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());

//set or modify
let dateSet = new Date();
dateSet.setFullYear(2001);
dateSet.setMonth(5);
dateSet.setDate(24);

console.log(dateSet);

// Get Current Timestamp & Date Difference

const startDate = new Date("2025-06-29");
const endDate = new Date("2026-08-29");
const timeDiff = endDate.getTime() - startDate.getTime();
const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(
  `Number of days between ${startDate.toDateString()} and ${endDate.toDateString()} is ${daysDiff} days.`,
);
