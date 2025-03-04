// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {
    console.log(`outer loop`)
    // second loop
    for (let j = 1; j <= 3; j++) {
        console.log('nested loop')
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}