
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'foo')); // slowest...

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);  // Output: [3, 42, 'foo']
    })
    .catch(error => {
        console.error('Error:', error);
    });



    function resolveAfter2Seconds(x) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(x);
          }, 2000);
        });
      }

    
    resolveAfter2Seconds(10)
      .then((value) => {
        console.log(value); // Output: 10
        return value * 2;
      })
      .catch((error) => {
        console.error('Error:', error);
      })


    try
    {
        var result = await resolveAfter2Seconds(10);
        console.log(result); // Output: 10
    }
    catch(error)
    {
        console.error('Error:', error);
    }
    

