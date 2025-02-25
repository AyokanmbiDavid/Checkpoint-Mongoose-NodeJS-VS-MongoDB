// update-person-age.js
const Person = require('./person');

// Find person by name and update age
Person.findOneAndUpdate({ name: 'John Doe' }, { age: 20 }, { new: true }, (err, person) => {
  if (err) return console.error(err);
  console.log('Person updated:', person);
});
