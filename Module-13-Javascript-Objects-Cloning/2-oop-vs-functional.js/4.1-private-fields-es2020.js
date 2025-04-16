// ** JavaScript doesn’t have full-blown access modifiers like private, but here are workarounds:

// Private fields in ES2020
// Private fields are prefixed with # and are not accessible outside the class
// They are only accessible within the class itself

class BankAccount {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account2 = new BankAccount(200);
  account2.deposit(100);
  console.log(account2.getBalance()); // 300
  console.log(account2.#balance); // ❌ SyntaxError
  