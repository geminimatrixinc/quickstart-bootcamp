// 1- built in node-module
//const os = require('node:os');

// 2-npm registry module 
import chalk from 'chalk';

// custom module
import greeter from './greeter.js';

greeter.greeter('John'); // Hello, John!

console.log(chalk.blue('Hello world!'));
