// find-people.js
const Person = require('./person');

// Find people by name
Person.find({ name: 'John Doe' }, (err, people) => {
  if (err) return console.error(err);
  console.log('People found:', people);
});
