// Create a new Promise
const simplePromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to see the reject case

    if (success) {
        // Resolve the promise with a message
        resolve('The operation was successful!');
    } else {
        // Reject the promise with an error message
        reject('The operation failed.');
    }
});

// Use the promise
simplePromise
    .then((message) => {
        console.log(message); // Output if promise is resolved
    })
    .catch((error) => {
        console.error(error); // Output if promise is rejected
    });
