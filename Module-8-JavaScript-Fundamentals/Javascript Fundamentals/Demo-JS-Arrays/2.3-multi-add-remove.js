
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.push(['Peter', 24]);

console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]


// using index notation
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1][2] = 'hello';

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// remove the array element from outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]