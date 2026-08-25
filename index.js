function greet(name) {
  return `I'm ${name}.`;
}
console.log(greet("Param"));

const person = function (name) {
  return `Hello, ${name}`;
};
console.log(person("Harry"));

const person1 = (fullName) => `Hey, ${fullName}`;
console.log(person1("Parampreet Dhatt"));
