// update-person.js
const Person = require('./person');

// Find person by ID and update
Person.findById('some_person_id', (err, person) => {
  if (err) return console.error(err);

  person.favoriteFoods.push('hamburger');
  person.save((err, updatedPerson) => {
    if (err) return console.error(err);
    console.log('Person updated:', updatedPerson);
  });
});
