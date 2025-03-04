// program to print the value of i
for (let i = 1; i <= 100; i++) {

    debugger
    
    // condition to continue    
    if (i == 3) {
        console.log('ready to continue')
        continue; // skip..and contine
    }

    if (i == 4) {
        ('exiting..')
        break; // exiting..
    }
    // skip...the rest of the statement
    console.log(i);
}