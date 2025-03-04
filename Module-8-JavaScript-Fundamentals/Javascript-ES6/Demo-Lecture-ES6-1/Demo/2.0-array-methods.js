
const fruits = ['Apples', 'Oranges', 'Grapes'];


// FOREACH
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));



const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

// FILTER
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

// filter used commonly in Redux, when deleting something from the state
const people2 = people.filter(person => person.id !== 2);
console.log(people2);