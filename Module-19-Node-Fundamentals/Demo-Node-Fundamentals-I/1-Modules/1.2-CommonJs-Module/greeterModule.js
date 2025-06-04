
function greeterModule() {

    this.hello = function() {
      console.log('hello!');
    }
  
    this.goodbye = function() {
      console.log('goodbye!');
    }

    this.total = 10;
  }

  
  
  module.exports = greeterModule;

  