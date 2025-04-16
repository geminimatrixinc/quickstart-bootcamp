'use strict';

function test() {
  undeclared = 42; // Throws error!
}
test();
