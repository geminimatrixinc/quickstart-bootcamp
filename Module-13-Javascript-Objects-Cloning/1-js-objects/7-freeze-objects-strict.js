// https://www.youtube.com/watch?v=H5VV5Ebd8Yg

// strict mode is a way to opt in to a restricted variant of JavaScript.
//  It helps in catching common coding errors and "unsafe" actions such as defining global variables unintentionally. 
// It can be applied to entire scripts or individual functions.

'use strict';



const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // Throws TypeError in strict mode
