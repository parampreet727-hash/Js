const person = {
  fullName: "Parampreet Dhatt",
  age: 25,
  city: "Sunam",
};

// first method
console.log(person.fullName);
console.log(person.age);
console.log(person.city);

//second method
console.log(person["fullName"]);

//obj add
person.location = "India";
console.log(person);

//update obj
person.age = 24;
console.log(person);

//delete obj
delete person.city;
console.log(person);

//nested obj
const person1 = {
  fullName1: "Harpreet Dhatt",
  age: 26,
  city: "Sunam",
  location: {
    state: "Punjab",
    country: "India",
  },
};
console.log(person1);
console.log(person1.location.state);

//obj method
const person2 = {
  personName: "Nobaldeep",
  age: 27,
  city: "Sunam",
  location: {
    state: "Punjab",
    country: "India",
  },
  getName: function () {
    return this.personName;
  },
};

console.log(person2.getName());

//loop in obj
for (let key in person) {
  console.log(key, person[key]);
}

//keys,values,entries
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

// Obj Destructurig
const userPerson = {
  userName1: "Harpreet Dhatt",
  age: 26,
  city: "Sunam",
  location: {
    state: "Punjab",
    country: "India",
  },
};

const { userName1, age, city } = userPerson;
console.log(userName1, age);

const { state, country } = userPerson.location;
console.log(state, country);

//operation chaining(?.)
const user2 = {
  fullName: "Parampreet Dhatt",
  age: 24,
  city: "Sangrur",
  location: {
    state: "Punjab",
    country: "India",
  },
};
console.log(user2?.city);
console.log(user2.location?.state);
console.log(user2.location?.city); //undefined

//nullish coalescing operator(??)
const user3 = {
  fullName: "Parampreet Dhatt",
  age: 24,
  city: "Sangrur",
  location: {
    userState: "Punjab",
    country: "India",
  },
};
const usercity = user3.location?.city ?? "Unknown City";
const userCountry = user3.location?.country ?? "Unknown City";
console.log(usercity);
console.log(userCountry);
