// chain-search-queries.js
const Person = require('./person');

// Find people who like burritos
Person.find({ favoriteFoods: 'burritos' })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec((err, people) => {
    if (err) return console.error(err);
    console.log('People found:', people);
  });
