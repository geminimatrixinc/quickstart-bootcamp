const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'two'));

Promise.race([promise1, promise2]).then(value => {
    console.log('Resolved:', value);
}).catch(reason => {
    console.log('Rejected:', reason); // Output: 'Rejected: two'
});
