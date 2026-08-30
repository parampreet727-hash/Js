// // .this
// "use strict"; //undefined
// function thisFun() {
//   console.log(this);
// }
// thisFun();

// const userThis = {
//   name: "Param",
//   age: 25,
//   greet() {
//     console.log(this.name); //userThis
//   },
// };
// userThis.greet();

// Arrow function has not this
// const userThis1 = {
//   name: "Parampreet Dhatt",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// userThis1.greet();

//how to use this in Arrow function
const userThis2 = {
  name: "Parampreet Dhatt",
  greet: function () {
    console.log(this.name);
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

userThis2.greet();
