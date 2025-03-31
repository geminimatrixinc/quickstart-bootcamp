function fetchDataWithPromises(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Could not fetch data:', error);
        });
}

fetchDataWithPromises('https://api.github.com/users/github/repos');
