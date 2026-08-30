// Prototypes
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log("Hello, " + this.name);
};
const user = new Person("Param");
user.getName();

// Prototype Chaining

const animal = {
  eats: true,
};
const dog = {
  barks: true,
};

dog.__proto__ = animal; //dog is the child of animal
console.log(dog.eats); //true
console.log(dog.barks); //true
