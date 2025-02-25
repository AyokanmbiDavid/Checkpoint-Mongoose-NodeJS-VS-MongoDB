// delete-many-people.js
const Person = require('./person');

// Remove people by name
Person.remove({ name: 'Mary' }, (err, result) => {
  if (err) return console.error(err);
  console.log('People deleted:', result);
});
