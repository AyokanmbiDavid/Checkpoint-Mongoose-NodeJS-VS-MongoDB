// create-person.js
const Person = require('./person');

// Create a new person
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Burger']
});

// Save the person to the database
person.save((err, data) => {
  if (err) return console.error(err);
  console.log('Person saved:', data);
});
