function fetchData(url) {
    return fetch(url).then(response => response.json());
}

const url1 = 'https://api.example.com/data1';
const url2 = 'https://api.example.com/data2';

Promise.all([fetchData(url1), fetchData(url2)])
    .then(([data1, data2]) => {
        console.log('Data 1:', data1);
        console.log('Data 2:', data2);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });
