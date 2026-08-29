//Lexical Scope
function outer() {
  let name = "Parampreet";
  function inner() {
    console.log(name);
  }
  inner();
  console.log(name);
}
outer();

//Closure
function greet(greetName) {
  return function () {
    console.log(`Hello, ${greetName}`);
  };
}
const greeting = greet("Parampreet Dhatt");
greeting();
