// find-one-person.js
const Person = require('./person');

// Find one person by favorite food
Person.findOne({ favoriteFoods: 'Pizza' }, (err, person) => {
  if (err) return console.error(err);
  console.log('Person found:', person);
});
