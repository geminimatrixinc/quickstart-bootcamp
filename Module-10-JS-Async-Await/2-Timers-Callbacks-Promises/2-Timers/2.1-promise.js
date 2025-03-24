function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Data fetched successfully' };
            //resolve(data);
            reject('An error occurred'); // Simulating an error by rejecting the promise with an error message
        }, 2000);
    });
}

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });



    var result = async () => {
        try {
            await fetchData();
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    console.log(result());

