// find-person-by-id.js
const Person = require('./person');

// Find person by ID
Person.findById('some_person_id', (err, person) => {
  if (err) return console.error(err);
  console.log('Person found:', person);
});
