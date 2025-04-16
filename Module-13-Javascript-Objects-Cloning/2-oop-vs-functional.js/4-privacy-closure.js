
// This code demonstrates the use of closures to create private variables in JavaScript.
// It defines a function `createBankAccount` that returns an object with methods to deposit money and get the balance.

// ** JavaScript doesn’t have full-blown access modifiers like private, but here are workarounds:

// https://www.youtube.com/watch?v=vKJpN5FAeF4 (CLosure in JavaScript - YouTube)
function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit(amount) {
        balance += amount;
      },
      getBalance() {
        return balance;
      }
    };
  }
  
  const account = createBankAccount(100);
  account.deposit(50);
  console.log(account.getBalance()); // 150
  console.log(account.balance); // undefined (private)
  