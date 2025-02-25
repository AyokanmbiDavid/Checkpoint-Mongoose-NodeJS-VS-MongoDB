// create-people.js
const Person = require('./person');

// Array of people
const arrayOfPeople = [
  { name: 'Jane Doe', age: 25, favoriteFoods: ['Salad', 'Pasta'] },
  { name: 'Mary Jane', age: 28, favoriteFoods: ['Steak', 'Fries'] },
  { name: 'Peter Parker', age: 24, favoriteFoods: ['Sushi', 'Ramen'] }
];

// Create many records
Person.create(arrayOfPeople, (err, people) => {
  if (err) return console.error(err);
  console.log('People created:', people);
});
