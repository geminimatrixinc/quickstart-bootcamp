
async function fetchDataWithAsyncAwait(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Could not fetch data:', error);
    }
}

fetchDataWithAsyncAwait('https://api.github.com/users/github/repos');
