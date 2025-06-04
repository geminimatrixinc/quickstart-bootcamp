
var sayHello = (user) => {
    console.log(`Hello, ${user}!`);
  };
  
var total = 10; // private...not exported.!


module.exports = {
  greeter: sayHello,
  getTotal: total
}
  