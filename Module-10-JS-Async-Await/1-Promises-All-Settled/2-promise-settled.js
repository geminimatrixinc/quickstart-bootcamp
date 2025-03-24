const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));

Promise.allSettled([promise1, promise2]).then(results => {
    results.forEach((result) => console.log(result.status, result.value || result.reason));
    // Output: 'fulfilled' 3
    //         'rejected' error
});
