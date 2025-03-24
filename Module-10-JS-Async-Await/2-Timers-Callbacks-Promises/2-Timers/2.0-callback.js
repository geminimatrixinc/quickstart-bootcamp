function fetchData(callback) {
    setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        callback(data);
    }, 2000);
}

var outputMessage = (data) => {
    console.log(data);
}

fetchData(outputMessage);
