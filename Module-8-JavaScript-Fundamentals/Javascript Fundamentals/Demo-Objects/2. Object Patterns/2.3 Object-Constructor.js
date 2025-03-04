
let hulk = new Object(); // {}

hulk.name = 'Hulk Hogan';
hulk['age'] = 67;
hulk.greeting = function() {
  console.log('Hey brother,! I\'m ' + this.name + '.');
};

hulk.greeting();

// Object literal => constructor

let stoneCold = new Object({
    name: 'Steve Autin',
    age: 55,
    greeting: function() {
      alert('Stone Cold' + this.name + '.');
    }
  });


  stoneCold.greeting();

