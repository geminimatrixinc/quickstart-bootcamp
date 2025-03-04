
let studentsData = [
    ['Jack', 24], 
    ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}

// let studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
// studentsData.forEach((student) => {
//     student.forEach((data) => {
//         console.log(data);
//     });
// });