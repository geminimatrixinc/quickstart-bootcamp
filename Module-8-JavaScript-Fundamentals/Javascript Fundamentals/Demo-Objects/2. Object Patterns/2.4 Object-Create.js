
let hulk = new Object();

hulk.name = 'Hulk Hogan';
hulk['age'] = 67;
hulk.greeting = function() {
  alert('Hey brother,! I\'m ' + this.name + '.');
};



  // Object.create()
  let savage = Object.create(hulk);
  savage.name = 'Randy Savage';
  savage.greeting();





//// Entries ////
  const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed

  





